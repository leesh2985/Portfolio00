import fakeData from './MOCK_DATA.json';
import { Column, useTable } from 'react-table';
import React from 'react';
import Header from '../../header/Header';
import Footer from '../../Footer';
import { styled } from 'styled-components';

type FakeData = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  university: string;
};

export default function Contest() {
  const data: FakeData[] = React.useMemo(() => fakeData, []);
  const columns: Column<FakeData>[] = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'University',
        accessor: 'university',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <>
      <Header
        toggleTheme={function (): void {
          throw new Error('Function not implemented.');
        }}
        theme={''}
      />
      <ContestContainer>
        <Container>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      </ContestContainer>
      <Footer />
    </>
  );
}

const ContestContainer = styled.div`
  max-width: 1920px;
  height: 560px;
  margin: 0 auto;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 600px;
  overflow-y: scroll;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

/*table {
  width: 800px;
  height: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
th,
td {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}
th {
  text-align: left;
}
thead th {
  background-color: #55608f;
}
tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
tbody td {
  position: relative;
}
tbody td:hover:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -9999px;
  bottom: -9999px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}*/
