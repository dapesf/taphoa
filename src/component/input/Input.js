import './Input.css';

export default function Input(props) {
    const _type = props.type ?? "text";
    const _placeholder = props.placeholder ?? "";
    const _className = props.className ?? "";
    const _changeEvent = props.onChange ?? null;
    const _keyDownEvent = props.onKeyDown ?? null;
    const _keyUpEvent = props.onKeyUp ?? null;
    const _maxLength = props.maxLength ?? null;
    const _ref = props.inputRef ?? null;

    return (
        <input
            type={_type}
            className={_className}
            placeholder={_placeholder}
            value={props.value}
            ref={_ref}
            maxLength={_maxLength}
            onKeyDown={_keyDownEvent}
            onKeyUp={_keyUpEvent}
            onChange={_changeEvent}>
        </input>
    )
}