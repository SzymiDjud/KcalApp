import { getSession } from "next-auth/react"
function Profile(props){
    return(
        <div className="min-w-full px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
                <h2 className="bigHeader font-bold">Twój profil</h2>
                <div className="flex gap-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="blueText mediumHeader font-bold">Informacje</h3>
                        <span>Email: <b>dupa@gmail.com</b></span>
                        <span>Wzrost: <b>269 cm</b></span>
                        <span>Waga: <b>69 kg</b></span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="blueText mediumHeader font-bold">Twoje limity</h3>
                        <span>Kcal: <b className="blueText">1000</b></span>
                        <span>Białko: <b className="blueText">10</b></span>
                        <span>Węglowodany: <b className="blueText">200</b></span>
                        <span>Tłuszcze: <b className="blueText">300</b></span>
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