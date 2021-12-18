import styled from "styled-components";
import { AmenitiesList } from "../shared/constants/amenities";

export default function Amenities() {
  return (
    <div>
      <h3>Tiện nghi</h3>
      <Grid>
        {AmenitiesList.map(item =>
          <div key={item.id}>{'* ' + item.name}</div>
        )}
      </Grid>
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.25rem;
`