import styled from 'styled-components';
import OuterInput from '../../shared/components/OuterInput';

export default function Price({ handleChange }: any) {
  return (
    <Container>
      <h3>Price</h3>
      <GridCont>
        <OuterInput
          name='priceWeekday'
          label='Weekday'
          handleChange={handleChange}
        />
        <OuterInput
          name='priceWeekend'
          label='Weekend'
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