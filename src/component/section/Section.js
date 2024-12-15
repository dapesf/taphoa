import './Section.css';
import { Text } from '../UIComponents';

export default function Section(props) {
    let name = props.name;
    let quantity = props.quantity;
    let unit = props.unit;

    return (
        <div className="section-container">
            <div className='section-name'>
                <Text text={name} />
            </div>
            <div className='section-prince'>
                <Text text={quantity} />/
                <Text text={unit} />
            </div>
        </div>
    )
}
