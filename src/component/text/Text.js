export default function Text(props) {
    const text = props.text ?? "";
    const clas = props.style ?? "";

    return (
        <span className={clas}>{text}</span>
    )
}