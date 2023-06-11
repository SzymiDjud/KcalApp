
export default function Profile(props){
    return(
        <div className="min-w-full px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
                <h2 className="bigHeader">Twój profil</h2>
                <div className="flex flex-col gap-4">
                    <h3 className="blueText mediumHeader">Informacje</h3>
                    <span>Email: <b>dupa@gmail.com</b></span>
                    <span>Wzrost: <b>269 cm</b></span>
                    <span>Waga: <b>69 kg</b></span>
                </div>

            </div>
            
        </div>
    )
}