import styled from 'styled-components';
import { color, font } from '../utils/styles';

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
  error?: string;
  handleChange: any;
  className?: any;
}

export default function OuterInput(props: Props) {
  return (
    <Container className={props.className}>
      {props.label && <Label>{props.label}</Label>}
      <Input 
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </Container>
  )
}

const Container = styled.div`
  padding: 1rem;
  border: 1px solid ${color.borderLightest};
  border-radius: 5px;
`
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 13px;
  color: ${color.textMedium};
  ${font.medium};
`
const Input = styled.input`
  height: 40px;
  width: 100%;
  color: ${color.textDarkest};
  border: none;
  outline: none;
`