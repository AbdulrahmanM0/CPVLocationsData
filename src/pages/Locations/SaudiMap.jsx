import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import saudi from "./mapCord";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "reactstrap";
import PieChart from "./Charts/PieChartData";

const Map = (props) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [stateName, setStateName] = useState(null);
  const chartRef = useRef(null);
  const [lay,setLay] = useState()

  const onLocationClick = (event) => {
    const svgRect = event.target.getBoundingClientRect();
    console.log(event.clientX , event.clientY)
    const clickX = event.clientX - 200;
    const clickY = event.clientY-750;
    console.log(clickX , clickY)

    setStateName(event.target.getAttribute("name"));
    setPosition({ top: clickY, left: clickX });
  };
  console.log(lay)

  useEffect(()=>{
    window.onresize = () =>  setLay(window.innerWidth)
  },[])

  return (
    <div className="container-fluid ">
      <Row className="justify-content-center">
        <Col sm={12} md={12} lg={7}>
          <div className="position-relative mb-3">
            <div onClick={onLocationClick} style={{minWidth: '448px'}}>
            <SVGMap map={saudi} />
            </div>
            {stateName && lay > 800 &&(
              <div                 
              className="position-absolute"
              style={{
                position: 'absolute',
                transform: `translate(${position.left}px, ${position.top}px)`
              }}>
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
