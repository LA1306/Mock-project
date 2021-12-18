import styled from 'styled-components';

const ButtonRadiant = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 40px;
  border-radius: 2px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  &:hover {
    cursor: pointer;
    transition: all 0.4s ease-out;
    background: linear-gradient(
      90deg,
      rgb(39, 143, 255) 0%,
      rgb(12, 99, 250) 100%
    );
  }
`
export default ButtonRadiant;
