import { getSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react";

function Profile(props){

    const [userData, setUserData] = useState()
    const { data: session, status } = useSession()
  
    useEffect(()=>{
      fetch(process.env.API_URL + `api/profile/`,{
          method: 'GET',
          headers: {
              'Content-Type' : 'application/json',
              Authorization: `Bearer ${session.token}`,
          },
      })
      .then((res)=>{if(res.ok){return res.json();}})
      .then((json)=>{
          setUserData(json)
      })
    },[])


    return(
        <div className="min-w-full px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
                <h2 className="bigHeader font-bold">Twój profil</h2>
                <div className="flex gap-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="blueText mediumHeader font-bold">Informacje</h3>
                        <span>Email: <b>{userData && userData.email}</b></span>
                        <span>Wzrost: <b>{userData && userData.height} cm</b></span>
                        <span>Waga: <b>{userData && userData.weight} kg</b></span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="blueText mediumHeader font-bold">Twoje limity</h3>
                        <span>Kcal: <b className="blueText">{userData && userData.kcalLimit}</b></span>
                        <span>Białko: <b className="blueText">{userData && userData.proteinLimit}</b></span>
                        <span>Węglowodany: <b className="blueText">{userData && userData.carbohydrateLimit}</b></span>
                        <span>Tłuszcze: <b className="blueText">{userData && userData.fatLimit}</b></span>
                    </div>
                </div>
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

  export default Profile;