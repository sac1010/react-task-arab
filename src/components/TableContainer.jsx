import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';


function TableContainer() {

  const [data, setData] = useState([])
  const getData = async () => {
    const res = await axios.get("https://react-task-arab.vercel.app/api/table");
    console.log(res.data);
    setData(res.data)
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data });

  return (
    <div className="p-2 w-full bg-white shadow-lg rounded-xl">
      <table {...getTableProps()} className="w-full border-collapse">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="p-2 border text-left">{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="p-2 border">{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;
