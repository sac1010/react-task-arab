import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

function TableContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL || "http://localhost:3001"}/api/table`
    );
    console.log(res.data);
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Price",
        accessor: "price",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data });

  return (
    <div className="p-2 w-full min-h-64 flex items-center justify-center bg-white shadow-lg rounded-xl">
      {!loading ? (
        <table {...getTableProps()} className="w-full border-collapse">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-2 border text-left"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="p-2 border">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-8 h-8 bg-[#171c42] animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default TableContainer;
