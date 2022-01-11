import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import useApi from '../shared/hooks/api';
import Navigation from '../shared/components/Navigation';
import RoomList from './RoomList';
import Filter from './Filter';
import MoreButton from './MoreButton';

export default function RoomSearch() {
  const { search } = useLocation();   // return '?abc' and trigger re-render
  const response = useApi.get(`/rooms${search}`);
  if (!response.total) return <div>Loading...</div>

  return (
    <>
      <Navigation />
      <Container>
        <Heading>
          <h2>{`${response.total} phòng tại Luxstay`}</h2>
          <Filter />
        </Heading>
        <RoomList data={response.data} />
        <MoreButton />
      </Container>
    </>
  )
}

const Container = styled.main`
  max-width: 1400px;
  margin: auto;
`
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
`