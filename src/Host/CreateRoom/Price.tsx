import styled from 'styled-components';
import OuterInput from '../../shared/components/OuterInput';

export default function Price({ handleChange }: any) {
  return (
    <>
      <h3>Price</h3>
      <Grid>
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
      </Grid>
    </>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`