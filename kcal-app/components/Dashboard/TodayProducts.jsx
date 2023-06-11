import TodayProductsTable from "./TodayProductsTable"
import Button from '../Button';
import Link from 'next/link';
export default function TodayProducts(props) {
    return(
        <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4"> 
            <h2 className="bigHeader">Twoje dzisiejsze posiłki</h2>
            <TodayProductsTable />
            <Link href="/Today"><Button style={" blueButton justify-center items-center gap-2  text-white"}  text={"Dodaj posiłek"} add={true} /></Link>
        </div>
    )
}