import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

export default function ProjectsTable({ data }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data) {
      const newTotal = data.reduce((acc, item) => acc + item[1].Totalprojects, 0);
      setTotal(newTotal);
    }
  }, [data]);

  function chunkArray(array, size) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }

  return (
    <div>
      <Table
        responsive
        bordered
        borderless
        hover
        size="sm"
        className='text-center'
      >
        <thead>
          <tr className='table-secondary'>
            <th scope="row" className='pb-3'>Region</th>
            <th style={{maxWidth:'60px'}} className='pb-3'>Total projects</th>
            <th className='pb-3'>Zone</th>
            <th style={{maxWidth:'60px'}} className='pb-3'>Total projects at zone</th>
            <th colSpan="10" scope="row" className='pb-3'>project no</th>
          </tr>
        </thead>
        <tbody>
          {data ? data.map((dataItem, key) => {
            let i = 0; 
            return (
              <>
                <tr>
                  <td style={{backgroundColor:'#e5eef7'}}>{dataItem[0]}</td>
                  <td style={{backgroundColor:'#e5eef7'}}>{dataItem[1].Totalprojects}</td>
                </tr>
                {Object.entries(dataItem[1].Zones).map(z => {
                  const referenceChunks = chunkArray(z[1].ReferenceNo, 5); // Replace '2' with the number of references per row you want
                  return referenceChunks.map((chunk, chunkIndex) => (
                    <tr key={`${key}-${chunkIndex}`}>
                      {chunkIndex === 0 && (
                        <>
                          <td></td>
                          <td></td>
                          <td>{z[1].Totalprojectsatzone}</td>
                          <td>{z[1].ReferenceNo.length}</td>
                        </>
                      )}
                      {chunkIndex > 0 && (
                        <>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </>
                      )}
                      {chunk.map(r => (
                        <td key={r}>
                           {r}
                        </td>
                      ))}
                    </tr>
                  ));
                })}
              </>
            );
          }) : 'no data'}
          <tr style={{ borderTop: '2px solid gray' }}>
            <th>Total</th>
            <th>{total}</th>
            <th>4</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}