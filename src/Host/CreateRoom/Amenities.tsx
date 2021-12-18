import styled from "styled-components";
import Checkbox from "../../shared/components/Checkbox";
import { AmenitiesList } from "../../shared/constants/amenities";

export default function Amenities({ handleChange }: any) {
  return (
    <div>
      <h3>Amenities</h3>
      <Grid>
        {AmenitiesList.map(item =>
          <Checkbox
            key={item.id}
            name='amenities'
            value={item.id}
            label={item.name}
            handleChange={handleChange}
          />
        )}
      </Grid>
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.25rem;
`

/* Amenities group by category
const AmenitiesGroup = Category.map(category => {
  const categoryList = AmenitiesList.filter(item => item.categoryId === category.id);
  return (
    <div>
      <h4>{category.name}</h4>
      <GridCont>
        {categoryList.map(item =>
          <Checkbox
            key={item.id}
            name='amenities'
            value={item.id}
            label={item.name}
            handleChange={handleChange}
          />
        )}
      </GridCont>
    </div>
  );
});
*/