import './Button.css';

export function Button(props) {
    return(
        <button className='Button' disabled={props.isDisable} onClick={props.onclick}>Add</button>
    )
}

export function ButtonConfirm(props) {
    const _text = props.text ?? "";
    const _className = props.className ?? null;
    const _isDisable = props.isDisable ?? null;
    const _onclick = props.onClick ?? null;
    const _icon = props.children ?? null;

    return (
        <button
        className={_className}
        disabled={_isDisable}
        onClick={_onclick}>
            {_icon ? _icon :_text }
    </button>
    )
}