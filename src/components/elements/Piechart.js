import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['< 18', '18-25', '26-40',
           '40-60', '>80'],
  datasets: [
    {
      label: 'Age Group',
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
      data: [25, 59, 80, 81, 42]
    }
  ]
}

const Piechart = () => {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Number of Coupons Redeemed per Age Group',
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

export default Piechart;