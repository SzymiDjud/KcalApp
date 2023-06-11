import ProductsTable from "@/components/Products/ProductsTable"
import Button from "@/components/Button"
import Link from "next/link"
export default function Products(props){
    return(
        <div className="min-w-full px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
            <h2 className="bigHeader font-bold">Twoje produkty</h2>
            <ProductsTable />
            <Link href="/AddProduct"><Button style={" blueButton justify-center items-center gap-2 fixed bottom-8 right-8 text-white"}  text={"Dodaj nowy"} add={true} /></Link>
       
            </div>
         </div>
    )
}