import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';

export default function addProducts(props){




    const addProduct = (id) =>{

    }

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
        {
            name: 'Dodaj',
            selector: row => <button onClick={()=>addProduct(row.id)} className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'>Dodaj</button>,
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


    const [nameFilter, setNameFilter] = useState("");
    const [brandFilter, setBrandFilter] = useState("");

    useEffect(()=>{

    },[nameFilter,brandFilter])


    return(
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
                Filtruj:
                <TextField
                                id="name"
                                onChange={()=>setNameFilter()}
                                value={nameFilter}
                                className='w-1/4 '
                                label="Nazwa produktu" 
                                variant="outlined"
                                size="small"
                            />                  
                <TextField
                                id="name"
                                onChange={()=>setBrandFilter()}
                                value={brandFilter}
                                className='w-1/4'
                                label="Nazwa marki" 
                                variant="outlined"
                                size="small"
                            />  
            </div>
        <div className='flex flex-col bg-white rounded-xl box-shadow min-w-full'>
        <DataTable
                    columns={columns}
                    data={tableData}
                    customStyles={customStyles}
        />
        </div>

        
        </div>
    )
}