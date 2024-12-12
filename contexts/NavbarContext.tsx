import { createContext, ReactNode, useContext } from 'react';
import { NavbarPathProps } from 'utils/getNavbarPathProps';

const defaultNavbarContext = {
  navbarPathProps: [],
} as NavbarPathProps;

const NavbarContext = createContext(defaultNavbarContext);

// Next.js requires getStaticProps to fetch data on each page.
// To mitigate the headache, the data is passed into this provider
// And used directly in the Navbar to avoid drilling props
const NavbarProvider = ({
  children,
  data,
}: {
  children: ReactNode;
  data: NavbarPathProps;
}) => {
  return (
    <NavbarContext.Provider value={data}>{children}</NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);

export default NavbarProvider;
