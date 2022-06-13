import React, { FunctionComponent } from "react";
import CheckBox from "../../core/components/commons/checkbox";
import AuthLayout from "../../core/components/commons/layouts/AuthLayout";

interface TypeCardTask {
  title: string;
  status: string;
  checked: boolean;
}

const Index: FunctionComponent = () => {
  const cardTask = [
    {
      title: "Finish ticket update",
      status: "Urgent",
      checked: false,
    },
    {
      title: "Create new ticket example",
      status: "New",
      checked: false,
    },
    {
      title: "Update ticket report",
      status: "Default",
      checked: true,
    },
  ];
  const [state, setState] = React.useState<TypeCardTask[]>(cardTask);

  return (
    <AuthLayout>
      <div className="flex mr-4">
        <div className="p-4 w-3/4 bg-transparent rounded-l-lg border sm:p-8">
          <div className="flex justify-between items-center mb-4">
            <span>
              <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-black mb-2">
                Today`s trends
              </h3>
              <p className="text-sm font-light">as of 25 May 2019, 09:41 PM</p>
            </span>
          </div>
          <div className="flow-root"></div>
        </div>
        <div className="w-1/4 bg-transparent rounded-r-lg border">
          <div className="flex flex-col items-center border-b-2 w-100 py-4 sm:py-8">
            <h3 className="text-lg font-light leading-none text-gray-400 mb-2">
              Resolved
            </h3>
            <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-black">
              449
            </h3>
          </div>
          <div className="flex flex-col items-center border-b-2 w-100 py-4 sm:py-8">
            <h3 className="text-lg font-light leading-none text-gray-400 mb-2">
              Received
            </h3>
            <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-black">
              49
            </h3>
          </div>
          <div className="flex flex-col items-center border-b-2 w-100 py-4 sm:py-8">
            <h3 className="text-lg font-light leading-none text-gray-400 mb-2">
              Average first response time
            </h3>
            <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-black">
              33m
            </h3>
          </div>
          <div className="flex flex-col items-center border-b-2 w-100 py-4 sm:py-8">
            <h3 className="text-lg font-light leading-none text-gray-400 mb-2">
              Average response time
            </h3>
            <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-black">
              3h 8m
            </h3>
          </div>
          <div className="flex flex-col items-center w-100 py-4 sm:py-8">
            <h3 className="text-lg font-light leading-none text-gray-400">
              Resolution within SLA
            </h3>
            <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-black">
              94%
            </h3>
          </div>
        </div>
      </div>
      <br />
      <div className="flex">
        <div className="p-4 w-1/2 mr-4 bg-transparent rounded-lg border sm:p-8">
          <div className="flex justify-between items-center mb-4">
            <span>
              <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-black">
                Unresolved tickets
              </h3>
              <p className="text-sm font-light text-gray-400">
                Group <span className="font-bold text-black">Support</span>
              </p>
            </span>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View details
            </a>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-black truncate">
                      Waiting on Feature Request
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-400">
                    320
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-black truncate">
                      Awaiting Customer Response
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-400">
                    3467
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-black truncate">
                      Awaiting Developer Fix
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-400">
                    346
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 w-1/2 mr-4 bg-transparent rounded-lg border sm:p-8">
          <div className="flex justify-between items-center mb-4">
            <span>
              <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-black">
                Tasks
              </h3>
              <p className="text-sm text-gray-400 font-light">Today</p>
            </span>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {state.map((item, index) => (
                <li className="py-3 sm:py-4" key={index}>
                  <div className="flex items-center space-x-4">
                    <div className="min-w-0">
                      <CheckBox
                        key={index}
                        value={index}
                        checked={item.checked}
                        item={item}
                        cb={(checked: number): void =>
                          setState(
                            state.map((v, idx) => {
                              if (idx === checked) {
                                v.checked = !v.checked;
                              }
                              return v;
                            })
                          )
                        }
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-black truncate">
                        {item.title}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-400">
                      {item.status}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Index;
