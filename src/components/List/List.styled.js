import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`;
export const Item = styled.li`
  width: 200px;
  margin: 15px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;
export const Title = styled.p`
  color: #09625e;
  margin: 0;
  padding: 0;
`;

export const Poster = styled.img`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;
