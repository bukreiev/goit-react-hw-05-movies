import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.p`
  margin: 0;
`;

export const LogoText = styled.p`
  font-weight: 700;
  margin: 0;
  margin-left: 10px;
  font-size: 36px;
  color: #10a8a0;
  text-shadow: 1px 2px 1px rgba(62, 121, 118, 1);
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  :hover {
    color: #10a8a0;
  }

  &.active {
    color: white;
    background-color: #10a8a0;
  }
`;
