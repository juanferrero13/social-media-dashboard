import Facebook from "../assets/images/icon-facebook.svg"
import Twitter from "../assets/images/icon-twitter.svg"
import Instagram from "../assets/images/icon-instagram.svg"
import Youtube from "../assets/images/icon-youtube.svg"
import iconUp from "../assets/images/icon-up.svg"
import iconDown from "../assets/images/icon-down.svg"

const networkLogos = {
    Facebook: Facebook,
    Twitter: Twitter,
    Instagram: Instagram,
    YouTube: Youtube
}

const networkColors = {
    Facebook: "bg-Facebook",
    Twitter: "bg-Twitter",
    Instagram: "bg-Instagram-Gradient",
    YouTube: "bg-YouTube"
}

export const OverviewCard = ({ user, audienceType, audience, network, isUp, today }) => {
    return (
        <article className="bg-Light-Grayish-Blue w-[320px] h-[216px] mb-6 rounded-[5px] mx-auto text-center overflow-hidden dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125 sm:w-[270px]">
            <div className={`${networkColors[network]} h-[4px] mb-8`}></div>
            <div className="flex items-center place-content-center gap-2">
                <img src={networkLogos[network]} alt={`Logo ${network}`} />
                <h3 className="text-xs text-Dark-Grayish-Blue font-bold">{user}</h3>
            </div>
            <p className="text-[56px] font-bold text-Very-Dark-Blue dark:text-white">{audience}</p>
            <p className="uppercase tracking-[5px] text-Dark-Grayish-Blue text-[14px] mb-6">{audienceType}</p>
            <div className="flex items-center place-content-center gap-1">
                <img src={isUp ? iconUp : iconDown} alt="Icon Arrow" />
                <p className={`text-xs font-bold ${isUp ? "text-Lime-Green" : "text-Bright-Red"}`}>{today} Today</p>
            </div>
        </article>
    )
}


export const OverviewTodayCard = ({ network, statsType, stats, porcentage, isUp }) => {
    return (
        <article className="bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer dark:bg-Dark-Desaturated-Blue hover:brightness-95 hover:dark:brightness-125 sm:w-[270px]">
            <div className="flex justify-between items-center">
                <p className="text-Dark-Grayish-Blue font-bold">{statsType}</p>
                <img src={networkLogos[network]} alt={`Logo ${network}`} />
            </div>
            <div className="flex justify-between items-center">
                <p className="text-[42px] font-bold text-Very-Dark-Blue dark:text-white">{stats}</p>
                <div className="flex items-center place-content-center gap-1">
                    <img src={isUp ? iconUp : iconDown} alt="Icon Arrow" />
                    <p className={`text-xs font-bold ${isUp ? "text-Lime-Green" : "text-Bright-Red"}`}>{porcentage}%</p>
                </div>
            </div>
        </article>
    )
}

