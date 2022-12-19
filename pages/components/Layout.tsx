import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AppWrapper>
      <Header />
      {children}
      <Footer />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  min-height: 100%;
  max-width: min(1100px, 92vw);
  margin-left: auto;
  margin-right: auto;
`;

const NavLink = styled(Link)``;

const Spacer = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: clamp(16px, 2vw + 1rem, 48px);
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Spacer>
          <NavLink href={"/"}>
            <h1>Shelbz Citrine</h1>
          </NavLink>
        </Spacer>
        <NavLink href={"/about"}>About Me</NavLink>
        <NavLink href={"/portfolio"}>Portfolio</NavLink>
        <Spacer />
      </Nav>

      <Moon />
    </HeaderWrapper>
  );
};

const Moon = styled.div`
  position: absolute;
  top: 5px;
  right: -30px;
  z-index: 1;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
`;

const HeaderWrapper = styled.header`
  position: sticky;
  top: -50px;
  left: 0;
  padding-top: 65px;
  padding-bottom: 15px;
  background-color: gray;
  margin-bottom: 48px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright Shelbz Citrine</p>
      <p>Site by Isiah Fletcher</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer``;

export default Layout;
