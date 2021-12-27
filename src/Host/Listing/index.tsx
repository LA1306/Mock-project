import styled from "styled-components"
import { MdEdit } from "react-icons/md"

export default function Listing() {
  return (
    <Container>
      <Heading>Listings</Heading>
      <ListingTable>
        <Head>
          <th style={{ width: 40 }}>
            <input type="checkbox" />
          </th>
          <th>LISTING</th>
          <th>LOCATION</th>
          <th>CREATED AT</th>
          <th>LAST MODIFIED</th>
          <th>STATUS</th>
          <th>UPDATE</th>
        </Head>
        <Row>
          <td><input type="checkbox" /></td>
          <td>Mayli Homestay Đà Lạt - Phòng đôi Garden view</td>
          <td>Phường 1, Đà Lạt</td>
          <td>20/12/2021</td>
          <td>20/12/2021</td>
          <td>Public</td>
          <td><MdEdit /></td>
        </Row>
        <Row>
          <td><input type="checkbox" /></td>
          <td>Mayli Homestay Đà Lạt - Phòng đôi Garden view</td>
          <td>Phường 1, Đà Lạt</td>
          <td>20/12/2021</td>
          <td>20/12/2021</td>
          <td>Public</td>
          <td><MdEdit /></td>
        </Row>
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
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`
const Head = styled.tr`
  height: 2rem;
  font-size: 13px;
`
const Row = styled.tr`
  height: 4rem;
  padding: 0 0.5px;
  border-top: 1px solid lightgray;
  font-size: 14px;
`