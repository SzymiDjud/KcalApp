import AddProductForm from "../components/Products/AddProductForm";


export default function AddProduct(props){
    return(
        <div className="min-w-full px-6 py-2">
            <h2 className="bigHeader">Dodaj produkt</h2>
            <AddProductForm />
        </div>
    )
}