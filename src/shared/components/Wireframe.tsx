import styled from 'styled-components';

type Props = {
  height: string;
  name: string;
  data?: any;
}

export default function Wireframe(props: Props) {
  const { height, name, data } = props;
  return (
    <Container height={height}>
      {name + ': ' + JSON.stringify(data)}
    </Container>
  );
}

type DataProps = {
  height: string;
}

const Container = styled.section<DataProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
  padding: 1rem;
  height: ${props => props.height};
  border-radius: 10px;
  color: gray;
  background: #dadfe9;
  overflow: hidden;
`
