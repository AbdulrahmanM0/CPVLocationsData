import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

export default function ProjectsTable({ data }) {
  const [total, setTotal] = useState(0);
  const [totalZ0, setTotalZ0] = useState(0);
  console.log(data)

  useEffect(() => {
    if (data) {
      const newTotal = data.reduce((acc, item) => acc + item[1].Totalprojects, 0);
      setTotal(newTotal);
    }
  }, [data]);

  useEffect(() => {
    let z0Count = 0;

    if (data) {
      data.forEach((dataItem) => {
        Object.entries(dataItem[1].Zones).forEach((z) => {
          z0Count++;
        });
      });
    }

    setTotalZ0(z0Count);
  }, [data]);

  function chunkArray(array, size) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }

  const groupedZones = {}; // To store ReferenceNo values grouped by region and Totalprojectsatzone

  return (
    <div>
      <Table responsive bordered borderless hover size="sm" className='text-center'>
        <thead>
          <tr className='table-secondary'>
            <th scope="row" className='pb-3'>
              Region
            </th>
            <th style={{ maxWidth: '60px' }} className='pb-3'>
              Total projects
            </th>
            <th className='pb-3'>Zone</th>
            <th style={{ maxWidth: '60px' }} className='pb-3'>
              Total projects at zone
            </th>
            <th colSpan="10" scope="row" className='pb-3'>
              project no
            </th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((dataItem, key) => {
              let i = 0;
              return (
                <>
                  <tr>
                    <td style={{ backgroundColor: '#e5eef7' }}>{dataItem[0]}</td>
                    <td style={{ backgroundColor: '#e5eef7' }}>{dataItem[1].Totalprojects}</td>
                  </tr>
                  {Object.entries(dataItem[1].Zones).map((z) => {
                    if (!groupedZones[dataItem[0]]) {
                      groupedZones[dataItem[0]] = {};
                    }

                    if (!groupedZones[dataItem[0]][z[1].Totalprojectsatzone]) {
                      groupedZones[dataItem[0]][z[1].Totalprojectsatzone] = [];
                    }

                    groupedZones[dataItem[0]][z[1].Totalprojectsatzone] = groupedZones[dataItem[0]][
                      z[1].Totalprojectsatzone
                    ].concat(z[1].ReferenceNo);

                    const referenceChunks = chunkArray(z[1].ReferenceNo, 8); // Replace with the number of references per row you want

                    return referenceChunks.map((chunk, chunkIndex) => (
                      <tr key={`${key}-${z[0]}-${chunkIndex}`}>
                        {chunkIndex === 0 && (
                          <>
                            <td></td>
                            <td></td>
                            <td>{z[0]}</td>
                            {/* <td>{z[1].Totalprojectsatzone}</td> */}
                            <td>{z[1].Totalprojectsatzone}</td>
                            {/* <td>{z[1].ReferenceNo.length}</td> */}
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
                        {chunk.map((r) => (
                          <td key={r}>{r}</td>
                        ))}
                      </tr>
                    ));
                  })}
                </>
              );
            })
          ) : (
            <tr>
              <td colSpan="8" className='p-3 text-center fw-bold'>No data yet</td>
            </tr>
          )}

          <tr style={{ borderTop: '2px solid gray' }}>
            <th>Total</th>
            <th>{total ? total : 0}</th>
            <th>{totalZ0 ? totalZ0 : 0}</th>
          </tr>
        </tbody>
      </Table>

      {/* Output the grouped zones
      {Object.entries(groupedZones).map(([region, zones]) => (
        <div key={region}>
          {`Region: ${region}`}
          {Object.entries(zones).map(([totalProjectsAtZone, referenceNos]) => (
            <div key={totalProjectsAtZone}>
                {console.log(referenceNos)}
              {`Total Projects at Zone: ${totalProjectsAtZone}, ReferenceNo: [${referenceNos.join(', ')}]`}
            </div>
          ))}
        </div>
      ))} */}
    </div>
  );
}
