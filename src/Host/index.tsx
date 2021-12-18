import styled from 'styled-components';
/* import { useParams } from 'react-router-dom';
import useApi from '../shared/hooks/api';
import { RoomType } from '../shared/types/Room'; */
import CreateRoom from './CreateRoom';
import Wireframe from '../shared/components/Wireframe';
import Navigation from '../RoomSearch/Navigation';

export default function Host() {
  /* const { id } = useParams();
  const data: RoomType = useApi.get(`/search/${id}`);
  if (!data) return (<div>Loading...</div>) */

  return (
    <Container>
      <SideNav>
        <Wireframe name='Side nav' height='100vh' />
      </SideNav>
      <Board>
        <Navigation />
        <BoardCont>
          <CreateRoom />
        </BoardCont>
      </Board>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`
const Board = styled.div`
  flex-grow: 1;
`
const BoardCont = styled.main`
  margin: auto;
  max-width: 640px;
`
const SideNav = styled.aside`
  flex-basis: 240px;
  flex-shrink: 0;
  @media (max-width: 800px) {
    display: none;
  }
`