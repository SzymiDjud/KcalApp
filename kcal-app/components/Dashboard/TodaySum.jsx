
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
export default function TodaySum() {

  const { data: session, status } = useSession()

  const [chartsData, setChartsData] = useState();

  /*useEffect(()=>{
    fetch(process.env.API_URL + `api/daily-summary/`,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer ${session.token}`,
        },
    })
    .then((res)=>{if(res.ok){return res.json();}})
    .then((json)=>{
        setChartsData(json)
    })
    },[props.refresh]) */

    const data = {
        labels: ['Kalorie',],
        datasets: [
          {
            label: 'Ilość',
            data: chartsData && chartsData.kcal,
            backgroundColor: [
              '#005EB8',
              '#157DE1',
            ],
            borderWidth: 0,
          },
        ],
      };
      
      const data2 ={
        labels: ['Białko'],
        datasets: [
          {
            label: 'Ilość',
            data: chartsData && chartsData.protein,
            backgroundColor: [
              '#005EB8',
              '#157DE1',
            ],
            borderWidth: 0,
          },
        ],
      }      
      const data3 ={
        labels: ['Węglowodany'],
        datasets: [
          {
            label: 'Ilość',
            data: chartsData && chartsData.carbohydrate,
            backgroundColor: [
              '#005EB8',
              '#157DE1',
            ],
            borderWidth: 0,
          },
        ],
      }      
      const data4 ={
        labels: ['Tłuszcze'],
        datasets: [
          {
            label: 'Ilość',
            data: chartsData && chartsData.fat,
            backgroundColor: [
              '#005EB8',
              '#157DE1',
            ],
            borderWidth: 0,
          },
        ],
      }

      const options = {
        responsive:true,
        maintainAspectRatio: true,
        cutout: 75,
        plugins: {
          legend: {
            display: false,
          },
        },
      };

    return(
        <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full">
            <h2 className="bigHeader font-bold">Dzisiejsze podsumowanie</h2>
            <div className="grid grid-cols-4 gap-4 min-w-full">
                <div className='flex flex-col items-center  gap-2'>
                    <h3 className='mediumHeader font-bold'>Kalorie</h3>
                    <Doughnut data={data} options={options} className='max-h-[200px]'/>
                    <h4 className='font-bold'>{chartsData && chartsData.kcal}/{chartsData && chartsData.kcal_limit}kcal</h4>
                </div>
                <div className='flex flex-col items-center  gap-2'>
                    <h3 className='mediumHeader font-bold'>Białko</h3>
                    <Doughnut data={data2} options={options} className='max-h-[200px]'/>
                    <h4 className='font-bold'>{chartsData && chartsData.protein}/{chartsData && chartsData.protein_limit}g</h4>
                </div>
                <div className='flex flex-col items-center  gap-2'>
                    <h3 className='mediumHeader font-bold'>Węglowodany</h3>
                    <Doughnut data={data3} options={options} className='max-h-[200px]'/>
                    <h4 className='font-bold'>{chartsData && chartsData.carbohydrate}/{chartsData && chartsData.carbohydrate_limit}g</h4>
                </div>
                <div className='flex flex-col items-center  gap-2'>
                    <h3 className='mediumHeader font-bold'>Tłuszcze</h3>
                        <Doughnut data={data4} options={options} className='max-h-[200px]'/>
                    <h4 className='font-bold'>{chartsData && chartsData.fat}/{chartsData && chartsData.fat_limit}g</h4>
                </div>
                
            </div>
        </div>
    )
}