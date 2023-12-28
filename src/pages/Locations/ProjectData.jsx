import React from 'react'
import { Table , Row, Col, Button } from 'reactstrap'

export default function ProjectData({handleProjectTableToggle,handleProjectMapToggle}) {
  return (
    <Row>
        <Col sm={5}>
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
                                www.Cpvarabia.com
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
                                mmasry@cpvarabia.com
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
        <Col sm={7}>
            <div style={{ maxWidth: 'fit-content' }}>
                <Table  responsive  bordered>
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
                                3401 
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Col>
        <div className='mb-5'></div>
        <Col sm={12}>
            <Row>
                <div className='col-sm-6'>
                    <Button onClick={handleProjectMapToggle} color='primary' className='m-auto d-block button-100'>
                        Map
                    </Button>
                </div>
                <div className='col-sm-6'>
                    <Button onClick={handleProjectTableToggle} color='primary' className='m-auto d-block button-100'>
                        Statistics
                    </Button>
                </div>
            </Row>
        </Col>
    </Row>
  )
}
