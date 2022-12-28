import { useEffect, useRef } from 'react';

import ConfettiGenerator from 'confetti-js';
import styled from 'styled-components';

type Props = {
  show: boolean;
};

const ConfettiCanvas = (props: Props) => {
  const { show } = props;
  const confettiCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!show) return;

    const canvas = confettiCanvas.current;

    if (!canvas) return;

    // TODO: Turn into props to allow for customization
    const confetti = new ConfettiGenerator({
      target: canvas,
      max: 100,
      size: 1,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
      ],
      clock: 25,
      rotate: true,
      width: 1000,
      height: 1000,
    });

    confetti.render();

    return () => {
      confetti.clear();
    };
  }, [show]);

  return <Canvas ref={confettiCanvas} />;
};

export default ConfettiCanvas;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
