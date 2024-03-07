"use client";

import clsx from "clsx";

type ColumnType = {
  title: string;
  key: string;
  render?: (data: any) => void;
};

type TableProps = {
  data: any[];
  column: ColumnType[];
};

function Table({ data = [], column = [] }: TableProps) {
  return (
    <div className="relative">
      <table className="w-full text-left text-sm rounded-xl border border-separate border-spacing-0 border-[#e5e7eb]">
        <thead className="bg-[#FCFDFD]">
          <tr className="">
            {column.length > 0 &&
              column.map((colItem, colItemIndex) => (
                <th
                  className={clsx(
                    "h-10 text-[#202224] px-6 border-b border-[#e5e7eb]",
                    colItemIndex === 0 && "rounded-tl-xl",
                    column.length - 1 === colItemIndex && "rounded-tr-xl"
                  )}
                  scope="col"
                  key={`key-th-${colItemIndex}`}
                >
                  {colItem.title}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((d, dIndex) => (
              <tr className={clsx("bg-white h-14 ")} key={`key-tr-${dIndex}`}>
                {column.map((col, colIndex) => (
                  <td
                    className={clsx(
                      "text-black px-6",
                      dIndex > 0 && "border-t border-[#e5e7eb]",
                      data.length - 1 === dIndex &&
                        column.length - 1 === colIndex &&
                        "rounded-br-xl",
                      data.length - 1 === dIndex &&
                        colIndex === 0 &&
                        "rounded-bl-xl"
                    )}
                    key={`key-td-${colIndex}`}
                  >
                    {col.render ? <>{col.render(d)}</> : d[col.key]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
