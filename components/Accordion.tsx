import type { MouseEvent } from 'react';
import { useRef, useState } from 'react';

import styled from 'styled-components';

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
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Content>
    </Details>
  );
};

export default Accordion;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  padding: var(--spacing-32);
  padding-top: 0;
  padding-bottom: var(--spacing-48);
`;

const Details = styled.details`
  width: 100%;

  &[open] summary::before {
    transform: rotate(90deg);
  }

  &:focus,
  &:hover {
    box-shadow: var(--shadow-elevation-low);
  }
`;

const Summary = styled.summary`
  display: block;
  padding: var(--spacing-16);
  padding-left: var(--spacing-32);

  color: var(--font-tertiary);
  font-size: var(--font-size-medium);

  position: relative;

  cursor: pointer;

  &:before {
    content: '';
    position: absolute;

    border-width: 0.4rem;
    border-style: solid;
    border-color: transparent transparent transparent var(--font-primary);

    top: 40%;
    left: 1rem;

    transform: rotate(0);
    transform-origin: 0.2rem 50%;
    transition: 0.25s transform ease;
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover {
    color: var(--font-secondary);
  }

  &::-webkit-details-marker {
    display: none;
  }
`;
