import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginForm(props) {


    const [error, setError] = useState(null);

    const handleLogin = async (values) => {
        try {
          const callbackUrl = "/Dashboard"
          const result = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
            callbackUrl,
          })
          console.log(result)
          if(result.status === 200){
            window.location.href = "/Dashboard"
          }
          else{
            setError("Błędne dane logowania")
          }
        } catch (error) {
         console.log(error)
        }
      }


    
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email("Podaj poprawny adres email")
            .required("Email jest wymagany"),
            password: Yup.string()

            .required("To pole nie może być puste"),           
        }),
        onSubmit: values => {          
           handleLogin(values)

            
        },
      });




    return(
        <div className="flex flex-col gap-4 px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-12  gap-4 items-center">
                <h2 className="bigHeader">Zaloguj się</h2> 
                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
                        <TextField
                            id="email"
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className=''
                            label="email" 
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
                       { error && <p className='text-red-600'>{error}</p>}
                        <button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Zaloguj się</button>
                        <span>Nie masz konta? <Link href="/Register"> <b>Zarejestruj się</b></Link></span>
                </form>          
            </div>
        </div>
    )
}