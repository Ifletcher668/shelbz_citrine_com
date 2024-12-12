import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type HeaderContextProps = {
  isAtTop: boolean;
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
  isSubmenuOpen: boolean;
  setIsSubmenuOpen: (isSubmenuOpen: boolean) => void;
};

const defaultHeaderContext: HeaderContextProps = {
  isAtTop: true,
  showSidebar: false,
  setShowSidebar: () => {},
  isSubmenuOpen: false,
  setIsSubmenuOpen: () => {},
};

const HeaderContext = createContext(defaultHeaderContext);

const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  // Gallery submenu
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsAtTop(y < 100 ? true : false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const data = useMemo(() => {
    return {
      isAtTop,
      showSidebar,
      setShowSidebar,
      isSubmenuOpen,
      setIsSubmenuOpen,
    };
  }, [isAtTop, showSidebar, setShowSidebar, isSubmenuOpen, setIsSubmenuOpen]);

  return (
    <HeaderContext.Provider value={data}>{children}</HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderContext);

export default HeaderProvider;
