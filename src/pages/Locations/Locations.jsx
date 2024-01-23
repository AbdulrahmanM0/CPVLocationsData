import React, { useEffect, useState } from 'react'
import {Container } from 'reactstrap'
import ProjectData from './ProjectData'
import ProjectsTable from './ProjectsTable'
import ProjectsMap from './SaudiMap'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

export default function Locations() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("Tr");
  const [data , setData] = useState()
  const [totalProjects,setTotalProjects] = useState(0)
  const [linkCpv,setLinkCpv] = useState()

  useEffect(()=>{
    axios.post('https://rd0.cpvarabia.com/api/BigData/sss.php',{Token:token})
    .then(res => {
      let incData = Object.entries(res.data).filter(a=> a[0] !== 'Total' && a[0] !== 'error' && a[0] !== 'Link' && a[0] !== '')
      console.log(incData)
      setData(incData)
      setTotalProjects(res.data.Total)
      setLinkCpv(res.data.Link)
    })

    .catch(e => console.log(e))
  },[])

  return (
    <div className='content-page'>
      {/* ProjectData component */}
        <Container>
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
              Location of the CPV projects in Saudi Arabia
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom'>
              <ProjectData linkCpv={linkCpv} totalProjects={totalProjects}/>
            </div>
          </div>
        </Container>

        {/* ProjectsTable component */}
        <Container>
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            <div className='form-container shadow-lg p-4 bg-body rounded'>
              <ProjectsTable data={data}/>
            </div>
          </div>
        </Container>

        <Container>
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto'>
            <div className='form-container shadow-lg p-4 bg-body rounded overflow-auto'>
              <ProjectsMap data={data}/>
            </div>
          </div>
        </Container>
    </div>
  )
}
