import styled from 'styled-components';
import { color, font } from '../utils/styles';

type Props = {
  label?: string;
  name: string;
  handleChange: any;
  className?: any
}

export default function OuterTextarea(props: Props) {
  return (
    <Container className={props.className}>
      {props.label && <Label>{props.label}</Label>}
      <TextArea 
        name={props.name}
        onChange={props.handleChange}
        spellCheck={false}
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
const TextArea = styled.textarea`
  height: 200px;
  min-width: 100%;
  max-width: 100%;
  color: ${color.textDarkest};
  border: none;
  outline: none;
`