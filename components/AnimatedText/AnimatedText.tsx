import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import { useDelayedUnmount } from '~utils/hooks';
import { fadeIn, fadeOut } from '~utils/styled-components/snippets';

type Props = {
  isMounted: boolean;
  duration: number;
  children: ReactNode;
};

const AnimatedText = (props: Props) => {
  const { isMounted, duration, children, ...rest } = props;
  const styleProps = { isMounted, duration };
  const shouldRender = useDelayedUnmount(isMounted, duration);

  // Store a copy of the children in state so we can unmount it after the animation has completed
  const [copy, clone] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (children && children !== copy && children !== null) {
      clone(children);
    }
  }, [children, copy]);

  return shouldRender ? (
    <Text {...styleProps} {...rest}>
      {copy}
    </Text>
  ) : (
    <></>
  );
};

export default styled(AnimatedText)``;

type AnimationProps = {
  isMounted: boolean;
  duration: number;
};

const Text = styled.p<AnimationProps>`
  /* Using Javascript interpolation here because keyframes cannot be a part of a simple string */
  ${({ isMounted, duration }) => css`
    animation: ${isMounted ? fadeIn : fadeOut} ${duration}ms ease-in-out;
  `}
`;
