import styled from "styled-components";
import Button from "../../shared/components/Button";

export default function Heading() {
  return (
    <Container>
      <h2 style={{ flexGrow: 1 }}>
        Room details
      </h2>
      <Button type='submit'>Create</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`