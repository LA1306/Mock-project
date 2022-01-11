import styled from "styled-components"
import { MdEdit } from "react-icons/md"
import { useAppContext } from "../App/Context"
import useApi from "../shared/hooks/api";
import { ReservationType } from "../shared/types/Reservation";
import { imageUrl } from "../shared/utils/luxstay";

export default function Reservation() {
  const { user } = useAppContext();
  const response = useApi.get(`/reservation?hostId=${user?.id}`);
  const data = response.data as ReservationType[];
  if (!data) return <div>Loading</div>;

  return (
    <Container>
      <Heading>Reservation</Heading>
      <ListingTable>
        <thead>
          <Head>
            <th style={{ width: '3%' }}>
              <input type="checkbox" />
            </th>
            <th style={{ width: '12%' }}></th>
            <th style={{ width: '30%' }}>LISTING</th>
            <th style={{ width: '20%' }}>LOCATION</th>
            <th style={{ width: '10%' }}>GUEST</th>
            <th style={{ width: '10%' }}>DATE</th>
            <th style={{ width: '10%' }}>STATUS</th>
            <th style={{ width: '5%' }}>EDIT</th>
          </Head>
        </thead>
        <tbody>
          {data.map(item => (
            <Row key={item.id}>
              <td><input type="checkbox" /></td>
              <td><Image src={imageUrl(item.roomCoverImage)} /></td>
              <td>{item.roomName}</td>
              <td>{item.roomAddress}</td>
              <td>{item.clientName}<br/>{item.clientPhone}</td>
              <td>{item.dateFrom}<br/>{item.dateTo}</td>
              <td>{item.status}</td>
              <td><MdEdit /></td>
            </Row>
          ))}
        </tbody>
      </ListingTable>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  padding: 1rem;
`
const Heading = styled.h1`
  padding-bottom: 1rem;
`
const ListingTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
`
const Head = styled.tr`
  height: 2rem;
  font-size: 13px;
`
const Row = styled.tr`
  height: 4rem;
  border-top: 1px solid lightgray;
  font-size: 14px;
  vertical-align: top;
`
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 5 / 3;
`