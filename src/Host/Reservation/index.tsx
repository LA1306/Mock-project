import styled from "styled-components"
import { MdEdit } from "react-icons/md"

export default function Reservation() {
  return (
    <Container>
      <Heading>Reservation</Heading>
      <ListingTable>
        <tr>
          <th style={{ width: 40, padding: '0.5rem' }}>
            <input type="checkbox"/>
          </th>
          <th>LISTING</th>
          <th>LOCATION</th>
          <th>GUEST</th>
          <th>PHONE</th>
          <th>DATE</th>
          <th>STATUS</th>
        </tr>
        <tr>
          <Cell><input type="checkbox"/></Cell>
          <Cell>Mayli Homestay Đà Lạt - Phòng đôi Garden view</Cell>
          <Cell>Phường 1, Đà Lạt</Cell>
          <Cell>Hoa Pham</Cell>
          <Cell>20/12/2021</Cell>
          <Cell>20/12/2021</Cell>
          <Cell><MdEdit /></Cell>
        </tr>
        <tr>
          <Cell><input type="checkbox"/></Cell>
          <Cell>Mayli Homestay Đà Lạt - Phòng đôi Garden view</Cell>
          <Cell>Phường 1, Đà Lạt</Cell>
          <Cell>Hoa Pham</Cell>
          <Cell>20/12/2021</Cell>
          <Cell>20/12/2021</Cell>
          <Cell><MdEdit /></Cell>
        </tr>
      </ListingTable>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
`
const Heading = styled.h1`
  padding-bottom: 1rem;
`
const ListingTable = styled.table`
  width: 100%;
  text-align: center;
  font-size: 13px;
`
const Cell = styled.td`
  padding: 1.25rem;
  border-top: 1px solid lightgray;
  font-size: 14px;
`