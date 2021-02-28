import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Coupons',
      backgroundColor: '#00adb5',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [55, 62, 51, 45, 32, 10, 12, 14, 9, 33, 44, 58]
    },
    {
        label: 'Redeems',
        backgroundColor: '#ffa600',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [40, 22, 64, 19, 23, 14, 8, 15, 42, 11, 25, 42]
      }
  ]
}

const Barchart = () =>  {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Coupons sold per month',
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

export default Barchart;