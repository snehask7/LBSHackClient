import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Apparel', 'Beauty', 'Books', 'Merchandise', 'Productivity'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#00adb5',
        '#0db894',
        '#68be60',
        '#b2b922',
        '#ffa600'
      ],
      hoverBackgroundColor: [
        '#008c93',
        '#0b9577',
        '#5eab56',
        '#9fa71f',
        '#e69500'
      ],
      data: [105, 59, 80, 22, 40]
    }
  ]
}

const Doughnutchart = () => {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Number of Coupons Redeemed per Tag',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }

export default Doughnutchart;