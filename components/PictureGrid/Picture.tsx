import { useEffect, useState } from 'react';

import type { AssetFile } from 'contentful';
import type { Variants } from 'motion/react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import styled from 'styled-components';

import { BREAKPOINTS, BREAKPOINT_NUMBERS } from 'utils/constants';

type Props = {
  file: AssetFile;
  title?: string;
  description?: string;
};

const Picture = (props: Props) => {
  const { file, title, description, ...rest } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > BREAKPOINT_NUMBERS.TABLET);
    };

    // Set initial value based on the window size
    handleResize();

    // Add event listener to update state on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PictureWrapper
        whileHover={{
          filter: 'blur(2px)',
          transition: {
            type: 'spring',
          },
        }}
        {...rest}
      >
        <StyledPicture
          src={file.url}
          alt={title ?? ''}
          width={250}
          height={250}
          loading="lazy"
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+Cg==
        "
        />
      </PictureWrapper>

      {isDesktop ? (
        <AnimatePresence>
          {description && isHovered && (
            <PictureCaption
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              {description}
            </PictureCaption>
          )}
        </AnimatePresence>
      ) : (
        <PictureCaption>{description}</PictureCaption>
      )}
    </Wrapper>
  );
};

export default Picture;

const itemVariants: Variants = {
  open: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      opacity: { duration: 1.2 },
      filter: { duration: 1 },
    },
  },
  closed: { opacity: 0, filter: 'blur(20px)' },
};

const Wrapper = motion(styled.div``);

// Styled Components
const StyledPicture = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 2px;
`;

const PictureCaption = motion(styled.figcaption`
  font-size: var(--font-size-small);
  text-align: center;
  margin: auto;

  padding: var(--spacing-8);

  @media ${BREAKPOINTS.TABLET} {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.9);
    color: var(--font-tertiary);

    margin: auto;
    padding: var(--spacing-18);
  }
`);

const PictureWrapper = motion(styled.article`
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 16px;

  transition: all 250ms ease-in-out;
`);
