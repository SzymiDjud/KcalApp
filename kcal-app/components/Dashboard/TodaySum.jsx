
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
import { Doughnut } from 'react-chartjs-2';
export default function TodaySum() {
    const data = {
        labels: ['Oryginalne', 'Nieoryginalne'],
        datasets: [
          {
            label: 'Ilość',
            data: [10,20],
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
            data: [5, 100],
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
            data: [50, 100],
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
            data: [70, 100],
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
                    <h4 className='font-bold'>1000/2000kcal</h4>
                </div>
                <div className='flex flex-col items-center  gap-2'>
                    <h3 className='mediumHeader font-bold'>Białko</h3>
                    <Doughnut data={data2} options={options} className='max-h-[200px]'/>
                    <h4 className='font-bold'>5/100g</h4>
                </div>
                <div className='flex flex-col items-center  gap-2'>
                    <h3 className='mediumHeader font-bold'>Węglowodany</h3>
                    <Doughnut data={data3} options={options} className='max-h-[200px]'/>
                    <h4 className='font-bold'>50/100g</h4>
                </div>
                <div className='flex flex-col items-center  gap-2'>
                    <h3 className='mediumHeader font-bold'>Tłuszcze</h3>
                        <Doughnut data={data4} options={options} className='max-h-[200px]'/>
                    <h4 className='font-bold'>70/100g</h4>
                </div>
                
            </div>
        </div>
    )
}