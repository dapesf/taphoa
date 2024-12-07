import './Card.css';
import { Text } from '../UIComponents';

export default function Card(props) {
  let id = props.id;
  let value = props.value;

  return (
    <div className="card-container">
      <Text text={id} style={"card-content"}/>
      <Text text={value} style={"card-content"}/>
    </div>
  )
}
