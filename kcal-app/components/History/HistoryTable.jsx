import DataTable from 'react-data-table-component';
import { useState } from 'react';
export default function HistoryTable(props){

    const columns = [
        {
            name: 'Data',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Ilośc kalorii',
            selector: row => row.kcal,
            sortable: true,
            
        },
        {
            name: 'Ilośc białka',
            selector: row => row.protein,
            sortable: true,
            
        },                      
        {
            name: 'Ilośc węglowodowanów',
            selector: row => row.carbs,
            sortable: true,
            
        },
        {
            name: 'Ilośc tłuszczów',
            selector: row => row.fat,
            sortable: true,
            
        },    
    ];
    

    const [tableData, setTableData] = useState(
[
    {
        id:0,
        date: "2023-06-11",
        kcal: 100,
        protein: 10,
        carbs: 20,
        fat: 30,
    },    
    {
        id:1,
        date: "2023-06-10",
        kcal: 1000,
        protein: 100,
        carbs: 200,
        fat: 300,
    },
]

    );
    
    
    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#005EB8',
                color: "white",
            },
        },
        table:{
            style:{
                borderRadius: "12px",
            }
        }
    
    };


    return(
        <div className='flex flex-col bg-white rounded-xl box-shadow min-w-full'>
        <DataTable
                    columns={columns}
                    data={tableData}
                    customStyles={customStyles}
                    pagination
        />
        </div>
    )
}