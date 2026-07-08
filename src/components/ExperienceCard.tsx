import type { Experience } from "../data/Experience";

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
            `${start.toLocaleDateString("en-GB", { ...opts, year: "numeric"})}
            - ${end.toLocaleDateString("en-GB", { ...opts, year: "numeric"})}`
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

const ExperienceCard = (exp: Experience) => {
    const start: Date = new Date(exp.start);
    const end:   Date = new Date(exp.end);
    const duration = end.valueOf() - start.valueOf();
    return (
        <div className="card" key={exp.key}>
            <div className="e-title">
                <h3>{exp.title}</h3>
                <span>
                    {getDisplayDates(start, end)} {" "}
                    ({displayDuration(duration)})
                </span>
            </div>
            <span><i>{exp.affiliation}</i></span>
        </div>
    )
}

export default ExperienceCard;