import type { MouseEvent } from 'react';
import { useRef, useState } from 'react';

import styled from 'styled-components';

import { BREAKPOINTS } from 'utils/constants';

import Paragraph from './Paragraph';

type Props = {
  content: string[];
  summary: string;
};

const Accordion = (props: Props) => {
  const { summary, content } = props;

  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animation = useRef<InstanceType<typeof Animation> | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  function onClick(e: MouseEvent) {
    e.preventDefault();
    if (!detailsRef.current) return;

    // Add an overflow on the <details> to avoid content overflowing
    detailsRef.current.style.overflow = 'hidden';
    // Check if the element is being closed or is already closed
    if (isClosing || !detailsRef.current.open) {
      open();
      // Check if the element is being opened or is already open
    } else if (isExpanding || detailsRef.current.open) {
      shrink();
    }
  }

  function shrink() {
    if (!detailsRef.current) return;
    if (!summaryRef.current) return;
    // Set the element as "being closed"
    setIsClosing(true);

    // Store the current height of the element
    const startHeight = `${detailsRef.current.offsetHeight}px`;
    // Calculate the height of the summary
    const endHeight = `${summaryRef.current.offsetHeight}px`;

    // If there is already an animation running
    if (animation.current) {
      // Cancel the current animation
      animation.current.cancel();
    }

    // Start a WAAPI animation
    animation.current = detailsRef.current.animate(
      {
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: 'ease-out',
      },
    );

    // When the animation is complete, call onAnimationFinish()
    animation.current.onfinish = () => onAnimationFinish(false);
    // If the animation is cancelled, isClosing variable is set to false
    animation.current.oncancel = () => setIsClosing(false);
  }

  function open() {
    if (!detailsRef.current) return;
    // Apply a fixed height on the element
    detailsRef.current.style.height = `${detailsRef.current.offsetHeight}px`;
    // Force the [open] attribute on the details element
    detailsRef.current.open = true;
    // Wait for the next frame to call the expand function
    window.requestAnimationFrame(() => expand());
  }

  function expand() {
    // Set the element as "being expanding"
    setIsExpanding(true);
    if (!detailsRef.current) return;
    if (!summaryRef.current) return;
    if (!contentRef.current) return;

    // Get the current fixed height of the element
    const startHeight = `${detailsRef.current.offsetHeight}px`;
    // Calculate the open height of the element (summary height + content height)
    const endHeight = `${
      summaryRef.current.offsetHeight + contentRef.current.offsetHeight
    }px`;

    // If there is already an animation running
    if (animation.current) {
      // Cancel the current animation
      animation.current.cancel();
    }

    // Start a WAAPI animation
    animation.current = detailsRef.current.animate(
      {
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: 'ease-out',
      },
    );
    // When the animation is complete, call onAnimationFinish()
    animation.current.onfinish = () => onAnimationFinish(true);
    // If the animation is cancelled, isExpanding variable is set to false
    animation.current.oncancel = () => setIsExpanding(false);
  }

  function onAnimationFinish(open: boolean) {
    if (!detailsRef.current) return;
    // Set the open attribute based on the parameter
    detailsRef.current.open = open;
    // Clear the stored animation
    animation.current = null;
    // Reset isClosing & isExpanding
    setIsClosing(false);
    setIsExpanding(false);
    // Remove the overflow hidden and the fixed height
    detailsRef.current.style.height = detailsRef.current.style.overflow = '';
  }

  return (
    <Details ref={detailsRef}>
      <Summary onClick={onClick} ref={summaryRef}>
        {summary}
      </Summary>

      <Content ref={contentRef} className="content">
        {content.map(paragraph => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
      </Content>
    </Details>
  );
};

export default Accordion;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-medium);
  padding: var(--spacing-extra-small);
`;

const Details = styled.details`
  width: 100%;
  background: var(--color-600);
  box-shadow: 0 0.1rem 1rem -0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  overflow: hidden;

  &[open] summary::before {
    transform: rotate(90deg);
  }

  @media ${BREAKPOINTS.TABLET} {
    width: 75%;
  }

  &:hover,
  &:focus-within {
    outline: 2px solid var(--font-accent);
  }
`;

const Summary = styled.summary`
  padding: 1rem;
  display: block;
  background: var(--color-500);
  padding-left: var(--spacing-large);
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    border-width: 0.4rem;
    border-style: solid;
    border-color: transparent transparent transparent var(--font-primary);
    position: absolute;
    top: 1.3rem;
    left: 1rem;
    transform: rotate(0);
    transform-origin: 0.2rem 50%;
    transition: 0.25s transform ease;
  }

  &::-webkit-details-marker {
    display: none;
  }
`;
