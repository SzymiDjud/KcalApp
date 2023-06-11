import HistoryTable from "@/components/History/HistoryTable"


export default function History(props){
    return(
        <div className="min-w-full px-6 py-2">
            <div className="flex flex-col bg-white rounded-xl box-shadow p-4 min-w-full gap-4">
                <h2 className="bigHeader font-bold">Historia</h2>
                <HistoryTable />
            </div>

        </div>
    )
}