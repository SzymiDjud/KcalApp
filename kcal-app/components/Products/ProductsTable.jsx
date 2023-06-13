import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";

export default function ProductsTable(props){

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
        fetch(process.env.API_URL + `api/products/`,{
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
    },[])


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