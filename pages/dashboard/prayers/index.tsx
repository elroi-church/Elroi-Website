import React, { useState } from "react";
import Link from "next/link";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Column } from "react-table";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";
import { useRouter } from "next/router";
import ReactTable from "../../../core/components/commons/datatable/index";

const Prayers = () => {
  const router = useRouter();
  const [totalData, setTotalData] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [params, setParams] = React.useState([]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page + 1);
  };

  const handlePageSizeChange = (pageSize: number) => {
    setPageSize(pageSize);
  };

  const coolColumns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: "Response By",
        accessor: "name",
      },
      {
        Header: "My Prayer",
        accessor: "myPrayer",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Priority",
        accessor: "priority",
      },
      // {
      //   Header: "Created At",
      //   accessor: "createdAt",
      // },
      // {
      //   Header: "Action",
      //   accessor: "_id",
      //   Cell: ({ row }) => (
      //     <div>
      //       <button
      //         className="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500 mr-2"
      //         onClick={() =>
      //           router.push(`/cools/detail/${row.original._id}`, undefined, {
      //             shallow: true,
      //           })
      //         }
      //       >
      //         <FaEye />
      //       </button>
      //       <button
      //         className="btn bg-white border-gray-200 hover:border-gray-300 text-yellow-500 mr-2"
      //         onClick={() => {}}
      //       >
      //         <FaEdit />
      //       </button>
      //       <button
      //         className="btn bg-white border-gray-200 hover:border-gray-300 text-red-500"
      //         onClick={() => {}}
      //       >
      //         <FaTrash />
      //       </button>
      //     </div>
      //   ),
      // },
    ],
    [router]
  );
  return (
    <AuthLayout>
      <div className="bg-white shadow-lg rounded-sm border border-gray-200 relative">
        <header className="px-5 py-4">
          <h2 className="font-semibold text-gray-800">
            My Prayer List
            <span className="ml-2 text-gray-400 font-medium">{totalData}</span>
          </h2>
        </header>
        <ReactTable
          tableOptions={{
            columns: coolColumns,
            data: [
              {
                name: "Kezia Imanuella",
                myPrayer: "Prayer for Exam",
                date: "May 26, 2019",
                priority: "High",
              },
            ],
            manualFilters: true,
            disableGlobalFilter: true,
            disableFilters: false,
            manualPagination: true,
            initialState: {
              pageIndex: 0,
              pageSize: pageSize,
            },
            pageCount: lastPage,
          }}
          onHandlePageChange={handleChangePage}
          onHandlePageSizeChange={handlePageSizeChange}
          onHandleFilterChange={setParams}
        />
      </div>
    </AuthLayout>
  );
};

export default Prayers;
