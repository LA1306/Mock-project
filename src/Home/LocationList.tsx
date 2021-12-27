import styled from 'styled-components';

export default function LocationList() {
  return (
    <HorizontalList>
      <Location url='/image/hochiminh.png'>
        <h1>TP. Hồ Chí Minh</h1>
      </Location>
      <Location url='/image/hanoi.png'>
        <h1>Hà Nội</h1>
      </Location>
      <Location url='/image/dalat.png'>
        <h1>Đà Lạt</h1>
      </Location>
      <Location url='/image/vungtau.png'>
        <h1>Vũng Tàu</h1>
      </Location>
      <Location url='/image/danang.png'>
        <h1>Đà Nẳng</h1>
      </Location>
    </HorizontalList>
  )
}

const HorizontalList = styled.div`
  display: flex;
  padding: 1rem 0;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Location = styled.div<{ url: string }>`
  min-width: 240px;
  height: 300px;
  margin-right: 1rem;
  padding: 240px 0.75rem 1rem;
  color: white;
  border-radius: 5px;
  background-image: url(${p => p.url});
`