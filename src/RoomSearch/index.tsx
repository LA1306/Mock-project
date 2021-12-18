//import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import useApi from '../shared/hooks/api';
import Wireframe from '../shared/components/Wireframe';
import Navigation from './Navigation';
import RoomList from './RoomList';
import MoreButton from './MoreButton';

export default function RoomSearch() {
  const { search } = useLocation();   // return '?abc' and trigger re-render
  const data = useApi.get(`/search?${search.substring(1)}&_limit=8`);

  if (!data) return (<div>Loading...</div>);
  if (!Object.keys(data).length) return (<div>Empty!</div>)

  return (
    <>
      <Navigation />
      <Wireframe name='Filter' height='60px' />

      <h4>Danh sách phòng tại Đà Lạt</h4>
      <RoomList data={data} />
      <MoreButton />
    </>
  )
}
