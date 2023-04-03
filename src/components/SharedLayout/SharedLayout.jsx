import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  LogoContainer,
  Logo,
  LogoText,
  Link,
} from './SharedLayout.styled';
import { RiMovie2Fill } from 'react-icons/ri';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo>
            <RiMovie2Fill size={50} color="#02b6ad" />
          </Logo>
          <LogoText>MoviesLibrary</LogoText>
        </LogoContainer>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
