export default function Text(props) {
    const text = props.text ?? "";
    return (
        <span>{text}</span>
    )
}