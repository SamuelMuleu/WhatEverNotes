import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({isnew = false, value, onClick,...rest}) {
  return (
    <Container isNew={isnew}>
      <input type="text" value={value} readOnly={!isnew} {...rest} />
      <button onClick={onClick} type="button"  className={ isnew ? 'button-add' : 'button-delete'} >
        {isnew ? <FiPlus /> : <FiX />  }
      </button>
    </Container>
  );
}
