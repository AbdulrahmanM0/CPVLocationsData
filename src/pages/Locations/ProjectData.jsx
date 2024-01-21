import React from 'react'
import { Table , Row, Col, Button } from 'reactstrap'

export default function ProjectData({totalProjects}) {
  return (
    <Row>
        <Col sm={8} md={5} lg={5}>
            <div className='projectData'>
                <Table  responsive bordered>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="table-primary ps-3">
                                Address: 
                            </th>
                            <td>
                                Riyadh / KSA
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-primary ps-3">
                                Website:
                            </th>
                            <td>
                                <a href='https://www.cpvarabia.com'>www.Cpvarabia.com</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-primary ps-3">
                                Prepared By:
                            </th>
                            <td>
                              Eng. Mahmoud Elmasry
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-primary ps-3">
                                Email:
                            </th>
                            <td>
                                <a href='mailto:mmasry@cpvarabia.com'>mmasry@cpvarabia.com</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-primary ps-3">
                                Phone:
                            </th>
                            <td>
                                966553304612
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-primary ps-3">
                                Position:
                            </th>
                            <td>
                                Design Review Department Manager
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Col>
        <Col sm={4} md={7} lg={7}>
            <div style={{ maxWidth: 'fit-content' }}>
                <Table className='text-center'  responsive  bordered>
                    <thead>
                        <tr className="table-primary ps-3">
                            <th colSpan={2}>
                                Total Project's
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=" ps-3">
                                {totalProjects} 
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Col>
        <div className='mb-5'></div>
    </Row>
  )
}
