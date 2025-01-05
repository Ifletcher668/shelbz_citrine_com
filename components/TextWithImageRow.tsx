import { useRef } from 'react';

import { motion, useInView } from 'motion/react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import styled from 'styled-components';

import { BREAKPOINTS } from 'utils/constants';

type Props = {
  image: StaticImageData;
  text: string;
  imageSide: 'left' | 'right';
};

const TextWithImageRow = (props: Props) => {
  const { image, text, imageSide } = props;

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <Wrapper
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : imageSide === 'left' ? -50 : 50,
      }}
      transition={{
        type: 'spring',
        ease: 'easeOut',
        duration: 2,
      }}
      direction={imageSide === 'left' ? 'row' : 'row-reverse'}
    >
      <Image
        src={image}
        alt={''}
        width={250}
        height={250}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
      />

      <h3>{text}</h3>
    </Wrapper>
  );
};

const StyledWrapper = styled.div<{ direction: 'row' | 'row-reverse' }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${BREAKPOINTS.TABLET} {
    flex-direction: ${({ direction }) => direction};
    gap: calc(var(--spacing-48) * 2);

    h3 {
      width: 600px;
    }
  }
`;

const Wrapper = motion(StyledWrapper);

export default TextWithImageRow;
