import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSession } from "next-auth/react";
export default function TodayProductsTable(props){
    const { data: session, status } = useSession()

   

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
            selector: row => row.carbohydrate,
            sortable: true,
            
        },
        {
            name: 'Tłuszcze',
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
            selector: row => row.carbohydrate,
            sortable: true,
            
        },
        {
            name: 'Tłuszcze',
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
        carbohydrate: 20,
        fat: 30,
    },    
    {
        id:1,
        name: "Chleb",
        brand: "Nawłoka",
        kcal: 1000,
        protein: 100,
        carbohydrate: 200,
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
        fetch(process.env.API_URL + `api/product-entries/today/`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${session.token}`,
            },
        })
        .then((res)=>{if(res.ok){return res.json();}})
        .then((json)=>{
            setTableData(json)
        })
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