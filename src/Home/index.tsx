import styled from 'styled-components';
import Navigation from '../shared/components/Navigation';
import LocationList from './LocationList';
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 600 })
  return (
    <>
      <Navigation />
      <Container>
        <section>
          {isMobile && <Banner src="/image/banner-crop.png" alt="banner"/>}
          {!isMobile && <Banner src="/image/banner.png" alt="banner"/>}
        </section>
        <section>
          <h1>Địa điểm nổi bật</h1>
          <p>Đặt khách sạn, homestay, trải nghiệm và nhiều hơn</p>
          <LocationList />
        </section>
      </Container>
    </>
  )
}

const Container = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
`
const Banner = styled.img`
  width: 100%;
  margin: 2rem 0 1rem;
  border-radius: 10px;
  @media (max-width: 600px) {
    margin: 0;
  }
`