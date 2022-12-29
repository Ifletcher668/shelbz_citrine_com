import React from 'react';

import * as reactFeather from 'react-feather';
import styled from 'styled-components';

const icons = {
  menu: reactFeather.Menu,
  'chevron-down': reactFeather.ChevronDown,
  'chevron-up': reactFeather.ChevronUp,
  'chevron-left': reactFeather.ChevronLeft,
  'chevron-right': reactFeather.ChevronRight,
  'external-link': reactFeather.ExternalLink,
  close: reactFeather.X,
};

type Props = {
  id: keyof typeof icons;
  color?: string;
  size?: number;
  strokeWidth?: number;
};

const Icon = (props: Props) => {
  const { id, color, size, strokeWidth, ...delegated } = props;

  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ strokeWidth?: number }>`
  button:disabled & {
    --color: var(--disabled);
    cursor: not-allowed;
  }

  & > svg {
    display: block;
    stroke-width: ${({ strokeWidth }) =>
      strokeWidth !== undefined ? strokeWidth + 'px' : undefined};
    color: var(--color);
  }

  a & {
    display: inline-block;
    vertical-align: middle;
    padding: 0 4px;
  }
`;

export default styled(Icon)``;
