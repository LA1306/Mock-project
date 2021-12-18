import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useApi from '../shared/hooks/api';
import { RoomType } from '../shared/types/Room';
import Wireframe from '../shared/components/Wireframe';

import Cover from './Cover';
import Amenities from './Amenities';
import Address from './Address';

export default function Room() {
  const { id } = useParams();
  const data: RoomType = useApi.get(`/search/${id}`);
  if (!data) return (<div>Loading...</div>)

  return (
    <>
      <Cover images={data.images} />
      <Container>
        <RoomInfo>
          <h2>{data.name}</h2>
          <div dangerouslySetInnerHTML={{__html: data.description}} />
          <Amenities />
          <Address data={data.address} />
        </RoomInfo>
        <BookNow>
          <Wireframe name='Order' height='280px' data={data.price.weekday} />
        </BookNow>
      </Container>
    </>
  )
}

const Container = styled.main`
  display: flex;
  margin: auto;
  padding: 1rem;
  max-width: 1100px;
  color: black;
`
const RoomInfo = styled.section`
  flex-grow: 1;
`
const BookNow = styled.aside`
  flex-basis: 300px;
  flex-shrink: 0;
  @media (max-width: 800px) {
    display: none;
  }
`