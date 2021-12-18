import styled from 'styled-components';

type Props = {
  label?: string;
  name: string;
  value: string | number;  // id
  handleChange: any;
  className?: any;
}

export default function Checkbox(props: Props) {
  return (
    <Container className={props.className}>
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
      <label style={{ paddingLeft: '0.5rem' }}>{props.label}</label>
    </Container>
  )
}

const Container = styled.div`
  padding: 0.25rem;
`