import './Input.css';

export default function Input(props) {
    const _type = props.type ?? "text";
    const _placeholder = props.placeholder ?? null;
    const _className = props.className ?? null;
    const _id = props.id ?? null;
    const _name = props.name ?? null;
    const _changeEvent = props.onChange ?? null;
    const _keyDownEvent = props.onKeyDown ?? null;
    const _keyUpEvent = props.onKeyUp ?? null;
    const _maxLength = props.maxLength ?? null;
    const _ref = props.inputRef ?? null;
    const _msgAlert = props.msgAlert ?? "asd";

    return (
        <div className="input-container">
            <input
                type={_type}
                className={_className}
                id={_id}
                placeholder={_placeholder}
                name={_name}
                value={props.value}
                ref={_ref}
                maxLength={_maxLength}
                onKeyDown={_keyDownEvent}
                onKeyUp={_keyUpEvent}
                data-rule="required"
                onChange={_changeEvent}>
            </input>
            <div className="bubble">{_msgAlert}</div>
        </div>
    )
}