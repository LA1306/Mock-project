import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ADDRESS } from '../shared/constants/address';

export default function LocationList() {
  return (
    <HorizontalList>
      <Location imgSrc='/image/hochiminh.png'
        query={`${ADDRESS.HOCHIMINH.TYPE}=${ADDRESS.HOCHIMINH.ID}`}
      > <h1>TP. Hồ Chí Minh</h1>
      </Location>

      <Location imgSrc='/image/hanoi.png'
        query={`${ADDRESS.HANOI.TYPE}=${ADDRESS.HANOI.ID}`}
      > <h1>Hà Nội</h1>
      </Location>

      <Location imgSrc='/image/danang.png'
        query={`${ADDRESS.DANANG.TYPE}=${ADDRESS.DANANG.ID}`}
      > <h1>Đà Nẳng</h1>
      </Location>

      <Location imgSrc='/image/vungtau.png'
        query={`${ADDRESS.VUNGTAU.TYPE}=${ADDRESS.VUNGTAU.ID}`}
      > <h1>Vũng Tàu</h1>
      </Location>

      <Location imgSrc='/image/dalat.png'
        query={`${ADDRESS.DALAT.TYPE}=${ADDRESS.DALAT.ID}`}
      > <h1>Đà Lạt</h1>
      </Location>
    </HorizontalList>
  )
}

const Location = (props: any) => (
  <Link to={`/search?${props.query}`}>
    <LocationImage imgSrc={props.imgSrc}>
      {props.children}
    </LocationImage>
  </Link>
);

const HorizontalList = styled.div`
  display: flex;
  padding: 1rem 0;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`
const LocationImage = styled.div<{ imgSrc: string }>`
  min-width: 240px;
  height: 300px;
  margin-right: 1rem;
  padding: 240px 0.75rem 1rem;
  color: white;
  border-radius: 5px;
  background-image: url(${p => p.imgSrc});
`