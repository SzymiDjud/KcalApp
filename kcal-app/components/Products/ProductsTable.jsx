import DataTable from 'react-data-table-component';
import { useState } from 'react';
export default function ProductsTable(props){

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
            name: 'Kalorie',
            selector: row => row.kcal,
            sortable: true,
            
        },
        {
            name: 'Białko',
            selector: row => row.protein,
            sortable: true,
            
        },                      
        {
            name: 'Węglowodany',
            selector: row => row.carbs,
            sortable: true,
            
        },
        {
            name: 'Tłuszcze',
            selector: row => row.fat,
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