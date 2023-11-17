import { Container } from "./styles";

export function ButtonText({title,$iactive = false,...rest}){
return(
    <Container type="button"
    $iactive={$iactive.toString()}
    {...rest}>
       {title}
    </Container>
);
};


