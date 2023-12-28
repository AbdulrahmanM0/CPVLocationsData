import React, { useState } from 'react'
import { Button, Container } from 'reactstrap'
import ProjectData from './ProjectData'
import ProjectsTable from './ProjectsTable'
import ProjectsMap from './Map'
import ProjectsMap2 from './ProjectsMap'

export default function Locations() {
  const [projectTableToggle , setProjectTableToggle] = useState(false)
  const [projectMapToggle , setProjectMapToggle] = useState(false)
  const handleProjectTableToggle = () => {
    setProjectTableToggle(!projectTableToggle)
  }
  const handleProjectMapToggle = () => {
    setProjectMapToggle(!projectMapToggle)
  }

  return (
    <div className='content-page'>
      {/* ProjectData component */}
        <Container>
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
              Location of the CPV projects in Saudi Arabia
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom'>
              <ProjectData handleProjectTableToggle={handleProjectTableToggle} handleProjectMapToggle={handleProjectMapToggle}/>
            </div>
          </div>
        </Container>

        {/* ProjectsTable component */}
        {projectTableToggle &&
        <Container>
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            <div className='form-container shadow-lg p-4 bg-body rounded'>
              <ProjectsTable />
            </div>
          </div>
        </Container>
        }
        {projectMapToggle &&
        <Container>
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto'>
            <div className='form-container shadow-lg p-4 bg-body rounded overflow-auto'>
              <ProjectsMap />
            </div>
          </div>
        </Container>
        }
        {projectMapToggle &&
        <Container>
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto'>
            <div className='form-container shadow-lg p-4 bg-body rounded overflow-auto'>
              <ProjectsMap2 />
            </div>
          </div>
        </Container>
        }
    </div>
  )
}
