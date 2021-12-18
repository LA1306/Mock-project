import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RoomType } from '../shared/types/Room';

type Props = { data: RoomType[] }

export default function RoomList({ data }: Props) {
  return (
    <GridList>
      {data.map(room => (
        <RoomCard key={room.id}>
          <Link to={`/room/${room.id}`}>
            <Image src={'https://cdn.luxstay.com/' + room.cover_image} />
            <Title>{room.name}</Title>
            <Price>{room.price.weekday}</Price>
          </Link>
        </RoomCard>
      ))}
    </GridList>
  )
}

const GridList = styled.section`
  max-width: 1400px;
  margin: auto;
  display: grid;
  //grid-gap: 0.75rem;  // gap ko co xung quanh Card
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`
const RoomCard = styled.div`
  margin: 0.5rem;
  max-width: 420px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 100ms ease-in;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 3 / 2;
`
const Title = styled.h3`
  margin: 0.5rem 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Price = styled.h3`
  margin: 0.5rem 0.75rem;
`