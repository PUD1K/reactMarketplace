import React from 'react';
import "chart.js/auto";
import {Line} from 'react-chartjs-2';

interface TotalSalesGraphProps {
  labelsProp: string[];
  dataProp: string[];
}

const SalesPerMonthGraph = ({labelsProp, dataProp} : TotalSalesGraphProps) => {
    const state = {
        labels: labelsProp,
        datasets: [
          {
            label: 'Количество продаж',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: dataProp
          }
        ],
      }
    
    return (
        <div style={{ width: '1000px', height: '1000px' }}>
             <Line
                data={state}
                />
        </div>
    );
};

export default SalesPerMonthGraph;