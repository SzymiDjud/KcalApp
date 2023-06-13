import TodaySum from "@/components/Dashboard/TodaySum"
import TodayProducts from "@/components/Dashboard/TodayProducts"
import { getSession } from "next-auth/react"

function Dashboard(){
    return(
        <div className="flex flex-col gap-4 min-w-full px-6 py-2">
            <TodayProducts/>
            <TodaySum/>
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

  export default Dashboard;