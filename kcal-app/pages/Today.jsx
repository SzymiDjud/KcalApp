import TodayProductsTable from "@/components/Dashboard/TodayProductsTable"
import AddProducts from "@/components/Dashboard/AddProducts"
import { useState } from "react"
export default function Today(props){

    const [refresh, setRefresh] = useState(false)

    return(
        <div className="flex flex-col gap-4 min-w-full px-6 py-2">
                <h2 className="bigHeader">Zarządzaj posiłkami</h2>
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
                <TodayProductsTable edit={true}/>
                
            </div>            
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
                <AddProducts />
            </div>
            
        </div>
    )
}