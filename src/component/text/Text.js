export default function Text(props) {
    const text = props.text ?? "";
    const clas = props.style ?? "";
    const _for = props.for ?? null;
    const _click = props.onClick ?? null;

    return (
        <label className={clas} htmlFor={_for} onClick={_click}>{text}</label>
    )
}