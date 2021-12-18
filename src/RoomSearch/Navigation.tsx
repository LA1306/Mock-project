import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Auth/AuthContext';
import { color } from '../shared/utils/styles';
import { BsSearch } from "react-icons/bs";

export default function Navigation() {
  const { user } = useAuthContext();
  return (
    <header>
      <Container>
        <form action='/search' style={{ flexGrow: 1 }}>
          <Search>
            <BsSearch />
            <Input
              name='q'
              placeholder='Tìm kiếm ll'
            />
          </Search>
        </form>
        <nav>
          <Link to='/' style={{ padding: 10 }}>Home</Link>
          <Link to='/search' style={{ padding: 10 }}>Search</Link>
          <Link to='/host' style={{ padding: 10 }}>Host</Link>
          {!user && <Link to='/login' style={{ padding: 10 }}>Login</Link>}
          {user && <span>{user.email}</span>}
        </nav>
      </Container>
      <PlaceHolder />
    </header>
  )
}

const Container = styled.div`
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;

  width: 100%;
  padding: 12px 1rem;
  border-bottom: 1px solid lightgray;
  background-color: white;
`
const Search = styled.div`
  display: flex;
  align-items: center;
  max-width: 420px;
  padding-left: 1rem;
  border: 1px solid ${color.borderLightest};
  border-radius: 5px;
`
const Input = styled.input`
  flex-grow: 1;
  margin-left: 0.5rem;
  height: 56px;
  font-size: 1rem;
  color: ${color.textDarkest};
  border: none;
  outline: none;
  &::placeholder {
    color: ${color.textDarkest};
  }
`
const PlaceHolder = styled.div`
  height: 80px;
`