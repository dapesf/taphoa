import './Button.css';

export function Button(props) {
    return(
        <button className='Button' disabled={props.isDisable} onClick={props.onclick}>Add</button>
    )
}

export function ButtonConfirm(props) {
    const _text = props.text ?? "";
    const _className = props.className ?? "";
    const _isDisable = props.isDisable ?? "";
    const _onclick = props.onclick ?? null;

    return (
        <button
        className={_className}
        disabled={_isDisable}
        onClick={_onclick}>
        {_text}
    </button>
    )
}