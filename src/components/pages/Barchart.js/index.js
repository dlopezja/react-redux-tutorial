import React from 'react';
import { Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

const Barchart = () => {
    return <div>
        <Bar
            data={{
                labels: ['Globes','Jeans','T-Shirts'],
                datasets:[{
                    label:'Quantity',
                    data:[3,19,12],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)'
                    ]
                }]
            }}
            height={300}
            width={300}
            options={{
                maintainAspectRatio:false,
                title:{
                    display:true,
                    text:'Products',
                    
                },
                legend:{
                    display:true,
                    position:'right',
                    labels:{
                        fontColor:'#000'
                    }
                }
            }}
        />
    </div>
}

export default Barchart;