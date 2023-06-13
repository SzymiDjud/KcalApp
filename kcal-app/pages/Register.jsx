import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useSession, getSession } from 'next-auth/react';
function Register(props){

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          password2: '',
          weight: 0,
          height: 0,
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email("Podaj poprawny adres email")
            .required("Email jest wymagany"),
            password: Yup.string()
            .min(8, "Podane hasło jest za krótkie")
            .max(50, "Podane hasło jest za długie")
            .matches(// eslint-disable-next-line
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "Hasło musi posiadać 8 znaków, w tym małą i wielką literę, cyfrę i znak specjalny."
            )
            .required("To pole nie może być puste"),           
            password2: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Hasła muszą być identyczne').required("To pole nie może być puste"),      
            weight: Yup.number()
            .required("To pole nie może być puste"),             
            height: Yup.number()
            .required("To pole nie może być puste"),    


        }),
        onSubmit: values => {     
            
            fetch(process.env.API_URL + `api/auth/register/`,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    "email": values.email,
                    "password": values.password,
                    "password2": values.password2,
                    "weight": parseFloat(values.weight),
                    "height": parseFloat(values.height),
                  }),
            })
            .then((res)=>res.json()
            .then((json)=>{
                window.location.href = "/Login";
            })
            )
        },
      });

    return(
        <div className="flex flex-col gap-4  px-6 py-2 ">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-12  gap-4 items-center ">
                <h2 className="bigHeader">Zarejestruj się</h2> 
                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6 min-w-[584px]'>
                        <TextField
                            id="email"
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className=''
                            label="Email" 
                            variant="outlined"
                            error = {formik.errors.email ? (
                                true
                            ) : null}
                            helperText={formik.errors.email}
                        />                        
                        <TextField
                            id="password"
                            onChange={formik.handleChange("password")}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className=''
                            label="Hasło"
                            type="password"
                            variant="outlined"
                            error = {formik.errors.password ? (
                                true
                            ) : null}
                            helperText={formik.errors.password}
                        />                        
                        <TextField
                            id="password2"
                            onChange={formik.handleChange("password2")}
                            onBlur={formik.handleBlur}
                            value={formik.values.password2}
                            className=''
                            label="Powtórz hasło"
                            type="password"
                            variant="outlined"
                            error = {formik.errors.password2 ? (
                                true
                            ) : null}
                            helperText={formik.errors.password2}
                        />                        
                        <TextField
                            id="weight"
                            onChange={formik.handleChange("weight")}
                            onBlur={formik.handleBlur}
                            value={formik.values.weight}
                            className=''
                            label="Podaj swoją wagę w kilogramach"
                            variant="outlined"
                            error = {formik.errors.weight ? (
                                true
                            ) : null}
                            helperText={formik.errors.weight}
                        />                        
                        <TextField
                            id="height"
                            onChange={formik.handleChange("height")}
                            onBlur={formik.handleBlur}
                            value={formik.values.height}
                            className=''
                            label="Podaj swój wzrost"
                            variant="outlined"
                            error = {formik.errors.height ? (
                                true
                            ) : null}
                            helperText={formik.errors.height}
                        />
                        <button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Zarejestruj się</button>
                        <span>Masz już konto? <Link href="/Login"> <b>Zaloguj się</b></Link></span>
                </form>          
            </div>
        </div>
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

  export default Register;