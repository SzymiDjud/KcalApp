import TodayProductsTable from "@/components/Dashboard/TodayProductsTable"
import AddProducts from "@/components/Dashboard/AddProducts"
import { useState } from "react"
export default function Today(props){

    const [refresh, setRefresh] = useState(false)

    return(
        <div className="flex flex-col gap-4 min-w-full px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
            <h2 className="bigHeader">Zarządzaj posiłkami</h2>
                <TodayProductsTable edit={true}/>
                <h4 className="blueText">Podsumowanie:</h4>
                <div className="flex gap-8">
                    <p>Kalorie: <b className="blueText">100</b></p>
                    <p>Białko: <b className="blueText">200</b></p>
                    <p>Węglowodany: <b className="blueText">400</b></p>
                    <p>Tłuszcze: <b className="blueText">800</b></p>
                </div>
            </div>            
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
            <h2 className="bigHeader">Dodaj posiłki</h2>
                <AddProducts />
            </div>
                
            
        </div>
    )
}