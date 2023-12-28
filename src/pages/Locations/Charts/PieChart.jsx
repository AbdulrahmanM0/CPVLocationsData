import React, { useEffect } from "react";
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

export default function PieChartComponent() {
  useEffect(()=>{

    if(document.querySelector('.MuiChartsLegend-root')){document.querySelector('.MuiChartsLegend-root').style.display = 'none'}
  },[document.querySelector('.MuiChartsLegend-root')])
  return (
    <PieChart
      colors={['yellow', 'orange', '#74de2']}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={150}
      height={150}
    />
  );
}