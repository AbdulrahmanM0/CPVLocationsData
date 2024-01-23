import React, { useEffect, useState } from 'react'
import { Button, Container } from 'reactstrap'
import ProjectData from './ProjectData'
import ProjectsTable from './ProjectsTable'
import ProjectsMap2 from './SaudiMap'
import axios from 'axios'

export default function Locations() {
  const [data , setData] = useState()
  const [totalProjects,setTotalProjects] = useState(0)

  useEffect(()=>{
    axios.post('https://rd0.cpvarabia.com/api/BigData/sss.php')
    .then(res => {
      let incData = Object.entries(res.data).filter(a=> a[0] !== 'Total' && a[0] !== 'error' && a[0] !== '')
      setData(incData)
      setTotalProjects(res.data.Total)
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
              <ProjectData totalProjects={totalProjects}/>
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
              <ProjectsMap2 data={data}/>
            </div>
          </div>
        </Container>
    </div>
  )
}
