import React from 'react'
import { Table } from 'reactstrap'

export default function ProjectsTable() {
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
                    <th scope="row">
                        Region
                    </th>
                    <th>
                        Total projects
                    </th>
                    <th>
                        Zone
                    </th>
                    <th>
                        Total projects at zone
                    </th>
                    <th colSpan="10" scope="row">
                        project no
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        Riyadh
                    </th>
                    <td>
                        3498
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        405
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                      Jeddah
                    </th>
                    <td>
                     
                    </td>
                    <td>
                   
                    </td>
                    <td>
                   
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        Mecca
                    </th>
                    <td>
                       
                    </td>
                    <td>
                    
                    </td>
                    <td>
                 
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                    <td>
                        100100
                    </td>
                </tr>
                <tr style={{borderTop:'2px solid gray'}}>
                    <th>
                        Total
                    </th>
                    <th>
                        3498
                    </th>
                    <th>
                        4
                    </th>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}
