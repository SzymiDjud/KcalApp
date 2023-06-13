import HistoryTable from "@/components/History/HistoryTable"
import { getSession } from "next-auth/react"

 function History(props){
    return(
        <div className="min-w-full px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
                <h2 className="bigHeader font-bold">Historia</h2>
                <HistoryTable />
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

  export default History;