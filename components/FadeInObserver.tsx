import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

const FadeInWrapper = styled.div`
  opacity: var(--opacity);
  transition: opacity 1s ease-out, transform 1s ease-out;
`;

const FadeInObserver = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (
      entries,
      observer,
    ) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <FadeInWrapper
      className={className}
      ref={elementRef}
      style={
        {
          '--opacity': isVisible ? 1 : 0,
          '--transform': isVisible ? 'translateY(0)' : 'translateY(20px)',
        } as CSSObject
      }
    >
      {children}
    </FadeInWrapper>
  );
};

export default FadeInObserver;
