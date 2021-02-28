import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['100', '500', '1000',
           '2000', '5000'],
  datasets: [
    {
      label: 'Total Offered',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#393e46',
      borderColor: '#393e46',
      borderWidth: 2,
      data: [50, 75, 150, 100, 100]
    },
    {
        label: 'Redeemed',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#00adb5',
        borderColor: '#00adb5',
        borderWidth: 2,
        data: [39, 51, 75, 53, 34]
      }
  ]
}

const Linechart = () => {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Coupons Offered and Redeemed per Number of Points',
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

export default Linechart;