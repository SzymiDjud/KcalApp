import TodaySum from "@/components/Dashboard/TodaySum"
import TodayProducts from "@/components/Dashboard/TodayProducts"

export default function Dashboard(){
    return(
        <div className="flex flex-col gap-4 min-w-full px-6 py-2">
            <TodayProducts/>
            <TodaySum/>
        </div>
    )
}