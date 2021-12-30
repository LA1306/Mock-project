import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import useApi from '../shared/hooks/api';
import Navigation from '../shared/components/Navigation';
import RoomList from './RoomList';
import Filter from './Filter';
import MoreButton from './MoreButton';

export default function RoomSearch() {
  const { search } = useLocation();   // return '?abc' and trigger re-render
  const data = useApi.get(`/rooms?${search.substring(1)}`);

  if (!data) return (<div>Loading...</div>);
  if (!data.totalResults) return (<div>Empty!</div>)

  return (
    <>
      <Navigation />
      <Contaniner>
        <Heading>
          <h2>{`${data.totalResults} phòng tại Luxstay`}</h2>
          <Filter />
        </Heading>
        <RoomList data={data.results} />
        <MoreButton />
      </Contaniner>
    </>
  )
}

const Contaniner = styled.main`
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