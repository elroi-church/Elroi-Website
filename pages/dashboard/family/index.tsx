import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { Column } from "react-table";
import ReactTable from "../../../core/components/commons/datatable/index";
import AuthLayout from "../../../core/components/commons/layouts/AuthLayout";
import {
  useDeleteFamilyMutation,
  useGetMyFamilyQuery,
} from "../../../core/features/family/api/family.api";
import { Family } from "../../../core/features/family/models/family";

const FamilyList = () => {
  const router = useRouter();
  const [totalData, setTotalData] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [params, setParams] = React.useState([]);
  const [familyList, setFamilyList] = useState<Family[]>([]);

  const { data, isLoading, error, refetch } = useGetMyFamilyQuery(
    {
      page: currentPage,
      limit: 10,
    },
    {
      skip: false,
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (data) {
      setTotalData(data.total);
      setLastPage(data.lastPage);
      setFamilyList(data.data);
    }
  }, [data]);

  const [deleteFamily] = useDeleteFamilyMutation();

  const handleChangePage = (page: number) => {
    setCurrentPage(page + 1);
  };

  const handlePageSizeChange = (pageSize: number) => {
    setPageSize(pageSize);
  };

  const onDelete = useCallback(
    async (id: string) => {
      try {
        const confirm = window.confirm("Are you sure to delete this family?");
        if (confirm) {
          await deleteFamily({
            id,
          }).unwrap();

          refetch();
        }
      } catch (e) {
        console.log(e);
      }
    },
    [deleteFamily, refetch]
  );

  const familyColumns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: "Family Name",
        accessor: "name",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Action",
        accessor: "_id",
        Cell: ({ row }) => (
          <div>
            <button
              className="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500 mr-2"
              onClick={() =>
                router.push(`/cools/detail/${row.original._id}`, undefined, {
                  shallow: true,
                })
              }
            >
              <FaEye />
            </button>
            <button
              className="btn bg-white border-gray-200 hover:border-gray-300 text-yellow-500 mr-2"
              onClick={() =>
                router.push(
                  `/dashboard/family/${row.original._id}/edit`,
                  undefined,
                  {
                    shallow: true,
                  }
                )
              }
            >
              <FaEdit />
            </button>
            {/* <button
              className="btn bg-white border-gray-200 hover:border-gray-300 text-red-500"
              onClick={() => onDelete(row.original._id)}
            >
              <FaTrash />
            </button> */}
          </div>
        ),
      },
    ],
    [onDelete, router]
  );

  return (
    <AuthLayout>
      <div className="bg-white shadow-lg rounded-sm border border-gray-200 relative">
        <header className="px-5 py-4 flex justify-between">
          <h2 className="font-semibold text-gray-800">
            Family List
            <span className="ml-2 text-gray-400 font-medium">{totalData}</span>
          </h2>
          <div>
            <Link href="/dashboard/family/add">
              <a className="btn btn-primary">
                <FaPlus />
              </a>
            </Link>
          </div>
        </header>
        <ReactTable
          tableOptions={{
            columns: familyColumns,
            data: familyList,
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

export default FamilyList;
