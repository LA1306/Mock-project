/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useSearchParams } from "react-router-dom"
import styled from "styled-components";

// let page = 0;   // only page refresh -> reset 0

export default function MoreButton() {
  // let page = 0;   // re-render -> reset 0
  const [searchParam, setSearchParam] = useSearchParams();
  const page = React.useRef(1);

  const handleClick = (e: any) => {
    page.current++;
    setSearchParam(`limit=${page.current * 8}`);  // trigger useLocation()
  }

  return (
    <Container>
      <button onClick={handleClick}>
        Xem thêm
      </button>
    </Container>
  )
}

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`