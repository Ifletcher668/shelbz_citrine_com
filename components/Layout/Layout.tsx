import Link from "next/link";
import { CSSProperties, ReactNode, useState } from "react";
import styled from "styled-components";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

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
  max-width: var(--max-width-wrapper);
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 80px;
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

const SubNavWrapper = styled(UnstyledButton)`
  position: relative;
  color: var(---link-primary);
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background: none;
  padding: 0;
  border-radius: 0;
  width: fit-content;
  background-image: linear-gradient(
      transparent calc(100% - 1px),
      var(--link-accent) 1px
    ),
    linear-gradient(transparent calc(100% - 1px), #8398a3 1px);
  background-size: 0% 6px, 100% 6px;
  background-repeat: no-repeat;
  background-position: 0 bottom, 0 bottom;
  transition-property: all;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;

  &:hover {
    text-decoration: none;
    color: var(---link-primary);
    cursor: pointer;
    background-size: 100% 6px, 100% 6px;
  }
`;

const SubNavMenu = styled.nav`
  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  display: var(--display, "flex");
  flex-direction: column;
  gap: clamp(16px, 2vw + 1rem, 48px);
  background-color: var(--header-background);
  animation: slideIn 500ms ease-in-out;

  position: absolute;
  top: 45px;
  left: 0;
  min-width: 100%;
  padding: 1rem;
`;

// TODO: fix any type
const SubNav = (props: any) => {
  const { display, items } = props;
  const [showSubmenu, setShowSubmenu] = useState(false);

  // TODO: hide submenu on click outside
  return (
    <SubNavWrapper onClick={() => setShowSubmenu(!showSubmenu)}>
      <VisuallyHidden>
        {showSubmenu ? "Hide" : "Show"} Sub menu for:
      </VisuallyHidden>{" "}
      {display}
      {/* TODO: find permanent solution here: https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript */}
      <SubNavMenu
        style={{ "--display": showSubmenu ? "flex" : "none" } as CSSProperties}
      >
        {items.map((item: any) => (
          <NavLink key={item.display} href={item.href}>
            {item.display}
          </NavLink>
        ))}
      </SubNavMenu>
    </SubNavWrapper>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Spacer>
          <NavLink href={"/"}>
            <SiteTitle>Shelbz Citrine</SiteTitle>
          </NavLink>
        </Spacer>

        <NavLink href={"/about"}>About Me</NavLink>
        {/* TODO: find actual booking link */}
        <NavLink href={"/book"}>Book</NavLink>
        <SubNav
          display="portfolio"
          items={[
            { display: "art", href: "/portfolio/art" },
            { display: "hair", href: "/portfolio/barber" },
          ]}
        />
        <Spacer />
      </Nav>

      <Moon />
    </HeaderWrapper>
  );
};

const SiteTitle = styled.span`
  font-size: 2rem;
`;

const Moon = styled.div`
  position: absolute;
  top: 5px;
  right: -30px;
  z-index: 1;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: var(--accent);
`;

const HeaderWrapper = styled.header`
  position: sticky;
  top: -25px;
  left: 0;
  padding-top: 40px;
  padding-bottom: 15px;
  background-color: var(--header-background);
  opacity: 0.9;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright Shelbz Citrine</p>
      <p>Site by Isiah Fletcher</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  margin-top: auto;
`;

export default Layout;
