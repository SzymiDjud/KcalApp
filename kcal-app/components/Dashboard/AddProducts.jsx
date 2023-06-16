import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useSession } from "next-auth/react";
export default function addProducts(props){

    const { data: session, status } = useSession()


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
            name: 'Dodaj',
            selector: row => <button onClick={()=>props.addProduct(row.id,1)} className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'>Dodaj</button>,
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

    const handleNameFilterChange = (e) => {
        setNameFilter(e.target.value.toLowerCase())
    }


    const [nameFilter, setNameFilter] = useState("");
    const [brandFilter, setBrandFilter] = useState("");

 

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
    },[props.refresh])

    const filteredItems = tableData.filter(
		item => item.name && item.name.toLowerCase().includes(nameFilter),
	);



    return(
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
                Filtruj:
                <TextField
                                id="name"
                                onChange={(e)=>handleNameFilterChange(e)}
                                value={nameFilter}
                                className='w-1/4 '
                                label="Nazwa produktu" 
                                variant="outlined"
                                size="small"
                            />                  
                {/*<TextField
                                id="name"
                                onChange={()=>setBrandFilter()}
                                value={brandFilter}
                                className='w-1/4'
                                label="Nazwa marki" 
                                variant="outlined"
                                size="small"
    />  */}
            </div>
        <div className='flex flex-col bg-white rounded-xl box-shadow min-w-full'>
        <DataTable
                    columns={columns}
                    data={filteredItems}
                    customStyles={customStyles}
        />
        </div>

        
        </div>
    )
}


