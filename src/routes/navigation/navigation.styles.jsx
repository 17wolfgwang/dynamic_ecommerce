import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 50px;
  width: 50px;
`;

export const LogoSetContainer = styled.div`
  height:100%;
  width: 170px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;    
`

export const LogoNameContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  background: linear-gradient(to left, #000000, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const LogoImage = styled.img`
  margin-left: 15px;
  width: 80px;
  height: 80px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
`;

export const StyledText = styled.span`
  padding: 10px 20px;
`;

const typingAnimation = keyframes`
  from {
    width: 0;
    text-align: right;

  }
  to {
    width: 100%;
  text-align: right;
  }
`;

export const Title = styled.div`
  font-size : 9vw;
  font-weight: bold;
  /* text-align: right; */
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingAnimation} 8s steps(1000);
  animation-iteration-count: infinite;
`

export const SubTitle = styled.div`
  font-size: 1.8vw;
  text-align: right;
  font-style: italic;
`