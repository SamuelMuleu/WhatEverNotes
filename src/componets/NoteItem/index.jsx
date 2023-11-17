import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({value, isNew, Onclick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button Onclick={Onclick} type="button"  className={ isNew ? 'button-add' : 'button-delete'} >
        {isNew ? <FiPlus /> : <FiX />  }
      </button>
    </Container>
  );
}
