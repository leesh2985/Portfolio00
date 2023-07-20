import fakeData from './MOCK_DATA.json';
import { Column, useTable } from 'react-table';
import React from 'react';
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
      <TextContainer>
        <TextArea>대회</TextArea>
      </TextContainer>
      <ContestContainer>
        <Container>
          <ContestTable {...getTableProps()}>
            <ContestThead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </ContestThead>
            <ContestTbody {...getTableBodyProps()}>
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
            </ContestTbody>
          </ContestTable>
        </Container>
      </ContestContainer>
    </>
  );
}

const TextContainer = styled.div`
  max-width: 1380px;
  height: auto;
  margin: 0 auto;
`;

const TextArea = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #1e8ec7;
  text-align: left;
  margin: 50px 0px;
`;

const ContestContainer = styled.div`
  max-width: 1380px;
  height: auto;
  margin: 0 auto;
`;

const Container = styled.div`
  max-height: 600px;
  overflow-y: scroll;
`;

const ContestTable = styled.table`
  width: 100%;
  height: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const ContestThead = styled.thead`
  th {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    text-align: left;
    background-color: #55608f;
  }
`;
const ContestTbody = styled.tbody`
  tr:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  td {
    position: relative;
    color: #242424;
  }

  td:hover:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -9999px;
    bottom: -9999px;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: -1;
  }
`;
