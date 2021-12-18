import styled from 'styled-components';

type Props = {
  images: {
    id: number,
    url: string,
  }[];
}

export default function Cover({ images }: Props) {
  return (
    <CoverImageList>
      {images.map(image => (
        <CoverImage src={'https://cdn.luxstay.com' + image.url} alt='cover' />
      ))}
    </CoverImageList>
  )
}

const CoverImageList = styled.header`
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`
const CoverImage = styled.img`
  height: 320px;
  padding-right: 5px;
  background: black;
`