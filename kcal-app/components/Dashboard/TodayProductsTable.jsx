import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TodayProductsTable(props){

    const columns = [
        {
            name: 'Nazwa produktu',
            selector: row => row.name,
            sortable: true,
        },        
        {
            name: 'Marka produktu',
            selector: row => row.brand,
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

    const editColumns = [
        {
            name: 'Nazwa produktu',
            selector: row => row.name,
            sortable: true,
        },        
        {
            name: 'Marka produktu',
            selector: row => row.brand,
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
        {
            name: 'Usuń',
            selector: row => <button onClick={()=>props.deleteProduct(row.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Usuń</button>,
            sortable: true,
            
        },    
    ];
    

    const [tableData, setTableData] = useState(
[
    {
        id:0,
        name: "Praówki",
        brand: "Berlinki",
        kcal: 100,
        protein: 10,
        carbs: 20,
        fat: 30,
    },    
    {
        id:1,
        name: "Chleb",
        brand: "Nawłoka",
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

    useEffect(()=>{

    },[props.refresh])


    return(
        <div className='flex flex-col bg-white rounded-xl box-shadow min-w-full'>
        <DataTable
                    columns={props.edit ? editColumns : columns}
                    data={tableData}
                    customStyles={customStyles}
        />
        
        </div>
    )
}