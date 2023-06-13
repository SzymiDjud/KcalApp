import LoginForm from "@/components/Auth/LoginForm"
import { useSession, getSession } from 'next-auth/react';


function Login(props) {
    return(
        <LoginForm/>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
  
    if (session) {
      return {
        redirect: {
          destination: '/Dashboard',
          permanent: false,
        },
      };
    }
  
    return {
      props: { session },
    };
  }

export default Login;