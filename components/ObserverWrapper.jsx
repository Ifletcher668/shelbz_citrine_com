// components/ObserverWrapper.js
import React, { useEffect, useRef, useState } from 'react';

const ObserverWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const ref = domRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    return () => observer.unobserve(ref);
  }, []);

  return <div ref={domRef}>{isVisible && children}</div>;
};

export default ObserverWrapper;
