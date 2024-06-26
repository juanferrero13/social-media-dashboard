import data from "../../data/data.json"
import { OverviewCard, OverviewTodayCard } from "./OverviewCard"

const dataJson = data.overview
const dataJsonToday = data["overview-today"]

const convertNumberToK = (number) => {
    if (number >= 10000) {
        number /= 1000
        return `${number}k`
    }
    return number
}

export const OverviewContainer = () => {

    return (
        <section className="max-w-[1200px] mx-auto absolute top-[191px] left-0 right-0 sm:flex sm:flex-wrap sm:gap-5">
            {
                dataJson.map(item =>
                    <OverviewCard
                        key={item.id}
                        user={item.user}
                        audienceType={item.audienceType}
                        audience={convertNumberToK(item.audience)}
                        network={item.network}
                        isUp={item.isUp}
                        today={item.today}
                    />
                )
            }
        </section>
    )
}

export const OverviewTodayContainer = () => {
    return (
        <section className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-bold text-Dark-Grayish-Blue dark:text-white ml-4 mb-[27px]">Overview - Today</h2>
            <div className="sm:flex flex-wrap">
                {dataJsonToday.map(item => <OverviewTodayCard
                    key={item.id}
                    network={item.network}
                    statsType={item.statsType}
                    stats={convertNumberToK(item.stats)}
                    porcentage={item.porcentage}
                    isUp={item.isUp}
                />
                )}
            </div>
        </section>
    )
}
