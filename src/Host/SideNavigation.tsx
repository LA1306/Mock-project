import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SideNavigation() {
  return (
    <SideNav>
      <StyledLink to='/host'>
        Listing
      </StyledLink>
      <StyledLink to='/host/reservation'>
        Reservation
      </StyledLink>
      <StyledLink to='/host/create'>
        Create listing
      </StyledLink>
    </SideNav>
  )
}

const SideNav = styled.aside`
  position: fixed;
  top: 70px;
  bottom: 0;
  width: 240px;
  padding-top: 2rem;  
  border-right: 1px solid lightgray;
  @media (max-width: 900px) {
    display: none;
  }
`
const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem 1.5rem;
`