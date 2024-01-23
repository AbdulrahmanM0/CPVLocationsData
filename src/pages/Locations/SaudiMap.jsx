import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import saudi from "./mapCord";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "reactstrap";
import PieChart from "./Charts/PieChartData";

const Map = (props) => {
  const [position, setPosition] = useState({ top: 0, left: 0,right: 0,bottom: 0 });
  const [stateName, setStateName] = useState(null);

  const onLocationClick = (e) => {
    const container = document.getElementById('contentContainer');
    const rect = container.getBoundingClientRect();

    const xPosition = e.clientX - rect.left - 25; // Adjust for image width/2
    const yPosition = e.clientY - rect.top - 25; // Adjust for image height/2

    setPosition({ left: xPosition, top: yPosition });
    setStateName(event.target.getAttribute("name"));
  };


  return (
    <div className="container-fluid ">
      <Row className="justify-content-center">
        <Col sm={12} md={12} lg={7} className="mb-3">
          <div className="position-relative mb-3" id="contentContainer"         
            style={{
              width: '400px',
              height: '350px',
              cursor: 'pointer',
            }}>
            <div onClick={onLocationClick} style={{width: '448px'}}>
              <SVGMap map={saudi} />
            </div>
            {stateName && (
            <div
                style={{
                  width:'50px',
                  height:'50px',
                  position: 'absolute',
                  left: `${position.left}px`,
                  top: `${position.top}px`,
                  transition: 'left .5s cubic-bezier(.42,-0.3,.78,1.25), top .5s cubic-bezier(.42,-0.3,.78,1.25)',
                }}
              >
                    <PieChart
                      stateName={stateName}
                      props={props.data}
                      h={50}
                      w={50}
                      showLabel={false}
                      legen={false}
                    />
              </div>
            )}
          </div>
          
        </Col>
                {stateName ? (
          <Col sm={12} md={12} lg={5}>
            <h5 className="text-center mb-4 p-2" style={{ backgroundColor: '#e5eef7' }}>{stateName}</h5>
            <PieChart legen={true}  showLabel={true} h={100} w={200} stateName={stateName} props={props.data} />
          </Col>
        ):
          <Col sm={12} md={5} lg={5}>
            <h5 className="text-center mb-4 p-2" style={{ backgroundColor: '#e5eef7' }}>Chose Region</h5>
          </Col>
        }
      </Row>
    </div>
  );
};

export default Map;
