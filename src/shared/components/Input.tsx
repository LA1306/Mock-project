import styled from 'styled-components';
import { color, font } from '../utils/styles';

type Props = {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  error?: string;
  handleChange: any;
}

export default function Input(props: Props) {
  return (
    <Container>
      {props.label && <Label>{props.label}</Label>}
      <StyledInput 
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
      {props.error && <Error>{props.error}</Error>}
    </Container>
  )
}

const Container = styled.div`
  padding-top: 1rem;
`
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 0.75rem;
  color: ${color.textMedium};
  ${font.medium};
`
const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  padding-left: 0.5rem;
  border: 1px solid ${color.borderLightest};
  border-radius: 5px;
  color: ${color.textDarkest};
  outline: none;
  &:focus {
    border: 1px solid #4c9aff;
    //box-shadow: 0 0 0 1px #4c9aff;
  }
  /* &::placeholder {
    font-size: 12px;
  } */
`
const Error = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #f00e0e;
`