import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Navigation from '../shared/components/Navigation'
import SideNavigation from './SideNavigation'

export default function Host() {
  return (
    <>
      <Navigation />
      <SideNavigation />
      <Board>
        <Outlet />
      </Board>
    </>
  )
}

const Board = styled.main`
  @media (min-width: 900px) {
    padding-left: 240px;
  }
`