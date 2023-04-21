import React from 'react';
import "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';

interface TotalSalesGraphProps {
  labelsProp: string[];
  dataProp: string[];
}

const TotalSalesGraph = ({labelsProp, dataProp} : TotalSalesGraphProps) => {
    const state = {
        labels: labelsProp,
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: dataProp
          }
        ]
      }
      
    return (
        <div style={{ width: '500px', height: '500px' }}>
            <Doughnut
                data={state}
        />
        </div>
    );
};

export default TotalSalesGraph;