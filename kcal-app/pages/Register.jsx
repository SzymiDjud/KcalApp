import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Link from 'next/link';

export default function Register(props){

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          confirmPassword: '',
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
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Hasła muszą być identyczne').required("To pole nie może być puste"),          


        }),
        onSubmit: values => {          
            fetch(process.env.API_URL + `register/`,{
                method: 'POST',
                headers: {
                    
                    
                },
                body: JSON.stringify(values),
            })
            .then((res)=>res.json()
            .then((json)=>{

            })
            )
        },
      });

    return(
        <div className="flex flex-col gap-4  px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-12  gap-4 items-center">
                <h2 className="bigHeader">Zarejestruj się</h2> 
                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
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
                            id="confirmPassword"
                            onChange={formik.handleChange("confirmPassword")}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            className=''
                            label="Powtórz hasło"
                            type="password"
                            variant="outlined"
                            error = {formik.errors.confirmPassword ? (
                                true
                            ) : null}
                            helperText={formik.errors.confirmPassword}
                        />
                        <button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Zarejestruj się</button>
                        <span>Masz już konto? <Link href="/Login"> <b>Zaloguj się</b></Link></span>
                </form>          
            </div>
        </div>
    )
}