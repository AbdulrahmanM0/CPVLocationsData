import React, { useState } from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { Chart } from "react-google-charts";

const sizing = {
  margin: { right: 5 },
  // legend: { hidden: true },
};

export default function PieChartM({ props, h, w,legen , stateName }) {
  console.log(props);
  const data = [
    { value: 10, label: 'series A' },
    { value: 15, label: 'series B' },
    { value: 20, label: 'series C' },
  ];
  return (
    <>
      {props &&
        props.map((a) =>
          a[0] === stateName && (
            <>
              <style>
                {`
                  .recharts-legend {
                    display: none !important;
                  }
                `}
              </style>
              {!legen ?
              <PieChart
                series={[
                  {
                    data: [
                      {
                        value: a[1].Totalprojects,
                        label: 'Total projects : ',
                        position: 'bottom',
                      },
                    ],
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, arcLabelRadius: 100, color: 'gray' },
                  },
                ]}
                legend= {{ hidden: true }}
                {...sizing}
                height={h}
                width={w}
              />
              :
              // <div>
              //   <ul className="style-list">
              //     <li className="d-flex"><div>Total projects : </div><div className="ms-3">{a[1].Totalprojects}</div></li>
              //   </ul>
              // </div>
              
              
              // <PieChart
              //   series={[
              //     {
              //       data: [
              //         {
              //           value: a[1].Totalprojects,
              //           label: 'Total projects : ' + a[1].Totalprojects,
              //           position: 'bottom',
              //         },
              //       ],
              //     },
              //   ]}
              //   width={400}
              //   height={100}
              // />
              <SecondChart totalpro={a[1].Totalprojects}/>
}
            </>
          )
        )}
    </>
  );
}



export function SecondChart({totalpro}) {
  const [chartData, setChartData] = useState([
    ["Task", "Hours per Day"],
    ["Total projects", totalpro],
    // ['any',4]
  ]);

  const options = {
    title: "Projects Data",
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

