import type { Experience } from "../data/Experience";
import { Tag } from "../components/Tag"

const getDisplayDates = (start: Date, end: Date): String => {
    const opts: Intl.DateTimeFormatOptions = {
        month: "short"
    };

    if (end.getUTCFullYear() == start.getFullYear()) {
        return (
            `${start.toLocaleString("en-GB", opts)}
            - ${end.toLocaleString("en-GB", opts)} 
            ${start.getFullYear()}`
    )
    } else {
        return ( 
            `${start.toLocaleDateString(
                "en-GB", { ...opts, year: "numeric"})}
            - ${end.toLocaleDateString(
                "en-GB", { ...opts, year: "numeric"})}`
        );
    }
}

const addSifPlural = (n: number): String => {
    return n > 1 ? "s" : ""; 
}

const displayDuration = (duration: number): String => {
    const asDate = new Date(duration);
    const numYears  = asDate.getFullYear() - 1970;
    const numMonths = asDate.getMonth(); 
    let toReturn: String = "";
    if (numYears > 0) {
        toReturn = `${numYears} year${addSifPlural(numYears)}`
    }
    if (numMonths > 0) {
        toReturn += `${numMonths} month${addSifPlural(numMonths)}`
    }
    return toReturn;
}

const ExperienceCard = (props: {exp: Experience}) => {
    const exp: Experience = props.exp;
    const start: Date = new Date(exp.start);
    const end:   Date = new Date(exp.end);
    const duration = end.valueOf() - start.valueOf();
    return (
        <div className="card" key={exp.key}>
            <div className="e-title">
                <span className="e-head">
                    <h3>{exp.title}</h3>
                    <span className="dates">
                        {getDisplayDates(start, end)} {" "}
                        ({displayDuration(duration)})
                    </span>
                </span>
                <span className="affiliation">
                        <i>{exp.affiliation}</i>
                </span>
            </div>
            <div className="tags">
                { 
                exp.tags.map((x, i) => 
                    <Tag key={i.toString()} text={x}/>
                )
                }
            </div>
        </div>
    )
}

export default ExperienceCard;