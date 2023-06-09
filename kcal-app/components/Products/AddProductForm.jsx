import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { useSession } from "next-auth/react";
export default function AddProductForm(props){

    const { data: session, status } = useSession()

    const formik = useFormik({
        initialValues: {
          name: '',
          brand: '',
          basic_amount_gram: 0,
          kcal: 0,
          protein: 0,
          carbohydrate: 0,
          fat: 0,
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .required('Required'),
            brand: Yup.string()
            .required('Required'),            
            basic_amount_gram: Yup.string()
            .required('Required'),            
            kcal: Yup.string()
            .required('Required'),            
            protein: Yup.string()
            .required('Required'),            
            carbohydrate: Yup.string()
            .required('Required'),            
            fat: Yup.string()
            .required('Required'),

        }),
        onSubmit: values => {          
            fetch(process.env.API_URL + `api/products/`,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `Bearer ${session.token}`,
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
        <div className='flex flex-col bg-white  min-w-full'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
                        <TextField
                            id="name"
                            onChange={formik.handleChange("name")}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className='w-1/4'
                            label="Nazwa produktu" 
                            variant="outlined"
                            error = {formik.errors.name ? (
                                true
                            ) : null}
                            helperText={formik.errors.name}
                        />                         
                        <TextField
                            id="brand"
                            onChange={formik.handleChange("brand")}
                            onBlur={formik.handleBlur}
                            value={formik.values.brand}
                            className='w-1/4'
                            label="Marka" 
                            variant="outlined"
                            error = {formik.errors.brand ? (
                                true
                            ) : null}
                            helperText={formik.errors.brand}
                        />                                
                        <TextField
                            id="basic_amount_gram"
                            onChange={formik.handleChange("basic_amount_gram")}
                            onBlur={formik.handleBlur}
                            value={formik.values.basic_amount_gram}
                            className='w-1/4'
                            label="Waga produktu" 
                            variant="outlined"
                            error = {formik.errors.basic_amount_gram ? (
                                true
                            ) : null}
                            helperText={formik.errors.basic_amount_gram}
                        />         
                        <TextField
                            id="kcal"
                            onChange={formik.handleChange("kcal")}
                            onBlur={formik.handleBlur}
                            value={formik.values.kcal}
                            className='w-1/4'
                            label="Ilość kalorii" 
                            variant="outlined"
                            error = {formik.errors.kcal ? (
                                true
                            ) : null}
                            helperText={formik.errors.kcal}
                        />                          
                        <TextField
                            id="protein"
                            onChange={formik.handleChange("protein")}
                            onBlur={formik.handleBlur}
                            value={formik.values.protein}
                            className='w-1/4'
                            label="Ilość białka" 
                            variant="outlined"
                            error = {formik.errors.protein ? (
                                true
                            ) : null}
                            helperText={formik.errors.protein}
                        />                          
                        <TextField
                            id="carbohydrate"
                            onChange={formik.handleChange("carbohydrate")}
                            onBlur={formik.handleBlur}
                            value={formik.values.carbohydrate}
                            className='w-1/4'
                            label="Ilość węglowodanów" 
                            variant="outlined"
                            error = {formik.errors.carbohydrate ? (
                                true
                            ) : null}
                            helperText={formik.errors.carbohydrate}
                        />                              
                        <TextField
                            id="fat"
                            onChange={formik.handleChange("fat")}
                            onBlur={formik.handleBlur}
                            value={formik.values.fat}
                            className='w-1/4'
                            label="Ilość tłuszczy" 
                            variant="outlined"
                            error = {formik.errors.fat ? (
                                true
                            ) : null}
                            helperText={formik.errors.fat}
                        />         

                        <button type="submit" className="blueButton text-white max-w-[250px] p-2">Dodaj produkt</button>
                    </form>
        </div>
    )
}