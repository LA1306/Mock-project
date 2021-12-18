import styled from 'styled-components';
import { color } from '../utils/styles';

const Button = styled.button`
  padding: 8px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  color: #fff;
  background: ${color.primary};
  &:hover {
    cursor: pointer;
    opacity: 80%;
    //transition: all 0.4s ease-out;
  }
`
export default Button;