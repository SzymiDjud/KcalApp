export default function Button(props){
    return(
    <button className={props.style + " flex items-center px-8 py-3 rounded"} onClick={props.onClick} >
        {props.add && <img src="/add.svg" className="" alt="add"/>}
        {props.text}    
        </button>
    )
}