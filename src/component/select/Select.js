export default function Select(props) {
    const _className = props.className ?? null;
    const _id = props.id ?? null;
    const _changeEvent = props.onChange ?? null;
    const _ref = props.inputRef ?? null;
    const _option = props.option ?? [];

    return (
        <select
            className={_className}
            id={_id}
            ref={_ref}
            onChange={_changeEvent}>
            {
                _option.map((item, id) => {
                    return <option value={id}>{item}</option>
                })
            }
        </select>
    )
}