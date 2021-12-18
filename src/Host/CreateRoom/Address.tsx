import styled from 'styled-components';
import OuterInput from '../../shared/components/OuterInput';

export default function Address({ handleChange }: any) {
  return (
    <Container>
      <h3>Address</h3>
      <GridCont>
        <OuterInput
          name='province'
          label='Province'
          handleChange={handleChange}
        />
        <OuterInput
          name='district'
          label='District'
          handleChange={handleChange}
        />
        <OuterInput
          name='ward'
          label='Ward'
          handleChange={handleChange}
        />
        <OuterInput
          name='detail'
          label='Detail'
          handleChange={handleChange}
        />
      </GridCont>
    </Container>
  )
}

const Container = styled.div`
  //padding-top: 1.5rem;
`

const GridCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`