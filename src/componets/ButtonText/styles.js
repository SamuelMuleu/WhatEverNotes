import styled from "styled-components";


export const Container = styled.button`

border:none;
background: none;

color:${({ theme,$iactive }) => $iactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

width: 100px;

font-size: 16px;

`;