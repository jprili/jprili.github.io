const Tag = (props: { 
    key:  string,
    text: string
}) => {
    return (
        <span 
            key={props.key}
            className="tag"
        >
        {props.text}
        </span>
    )
}

export { Tag };