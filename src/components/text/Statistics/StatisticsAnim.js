import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animStatistics = (percents, setPercents, percent, media, ref) => {
    function calcStat() {
        const intervalId = setInterval(() => {
            setPercents((prevPercents) => {
                if (percent && prevPercents < percent) {
                    return prevPercents + 1;
                } else {
                    clearInterval(intervalId);
                    return prevPercents;
                }
            });
        }, 120);
    }


    if (percent && parseInt(percent) > 0) {
        calcStat();
    }
}
