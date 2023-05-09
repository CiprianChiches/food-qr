import "./Nutriscore.css";

export default function Nutriscore({grade}){
    if(grade === undefined) return (<div><br/></div>);
    return(
        <p>
            <span className={`badge rounded-pill badge-${grade.toUpperCase()}`}>
                {grade.toUpperCase()}
            </span>
        </p>
    )
}