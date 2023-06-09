import TodayProductsTable from "@/components/Dashboard/TodayProductsTable"
import AddProducts from "@/components/Dashboard/AddProducts"
import { useState } from "react"
import { getSession, useSession } from "next-auth/react"
import Link from "next/link"
import Button from "@/components/Button"
function Today(props){

    const [refresh, setRefresh] = useState(false)
    const { data: session, status } = useSession()
    const deleteProduct = (id) => {
      fetch(process.env.API_URL + `api/product-entries/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer ${session.token}`,
        },
    })
    .then((res)=>{if(res.ok){setRefresh(element => !element)}})

    }    
    const addProduct = (id,amount) => {

      let payload = {
        productId: id,
        amount: amount,
      }

      fetch(process.env.API_URL + `api/product-entries/`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify(payload),
    })
    .then((res)=>{if(res.ok){setRefresh(element => !element)}})
    }

    return(
        <div className="flex flex-col gap-4 min-w-full px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
            <h2 className="bigHeader font-bold">Zarządzaj posiłkami</h2>
                <TodayProductsTable edit={true} deleteProduct={deleteProduct} addProduct={addProduct} refresh={refresh}/>
                <h4 className="blueText font-bold">Podsumowanie:</h4>
                <div className="flex gap-8">
                    <p>Kalorie: <b className="blueText">100</b></p>
                    <p>Białko: <b className="blueText">200</b></p>
                    <p>Węglowodany: <b className="blueText">400</b></p>
                    <p>Tłuszcze: <b className="blueText">800</b></p>
                </div>
            </div>            
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
            <h2 className="bigHeader">Dodaj posiłki</h2>
                <AddProducts  addProduct={addProduct}/>
                <Link href="/AddProduct"><Button style={" blueButton justify-center items-center gap-2  text-white"}  text={"Dodaj produkt"} add={true} /></Link>
            </div>
                
            
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
  
    if (!session) {
      return {
        redirect: {
          destination: '/Login',
          permanent: false,
        },
      };
    }
  
    return {
      props: { session },
    };
  }

  export default Today;