import { Button } from '@mui/material'
import React from 'react'
import { Table , Row, Col, Spinner } from 'reactstrap'
import DownloadIcon from '@mui/icons-material/Download';


export default function ProjectData({totalProjects,linkCpv}) {
  return (
    <Row>
        <Col sm={8} md={12} lg={7}>
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
        <Col sm={4} md={5} lg={5}>
            <div style={{ maxWidth: 'fit-content' }}>
                <Table className='text-center' responsive  bordered>
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
                                {totalProjects ? totalProjects : <Spinner />} 
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Col>
        <Col sm={12} className='mt-2'>
                <Button variant="outlined" color="primary" endIcon={<DownloadIcon />} href={linkCpv} download>Download Maps</Button>
        </Col>
        <div className='mb-3'></div>
    </Row>
  )
}
