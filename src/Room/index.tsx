import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useApi from '../shared/hooks/api';
import { RoomType } from '../shared/types/Room';

import Cover from './Cover';
import Amenities from './Amenities';
import Address from './Address';
import Booking from './Booking';

export default function Room() {
  const { id } = useParams();
  const response = useApi.get(`/rooms/${id}`);
  const data = response.data as RoomType;
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
        <RoomBooking>
          <Booking roomData={data} />
        </RoomBooking>
      </Container>
    </>
  )
}

const Container = styled.main`
  display: flex;
  margin: auto;
  max-width: 1100px;
  //color: black;
`
const RoomInfo = styled.section`
  flex-grow: 1;
  padding: 1rem;
`
const RoomBooking = styled.aside`
  //flex-basis: 360px;
  flex-shrink: 0;
  padding: 3rem 1rem;
  @media (max-width: 800px) {
    display: none;
  }
`