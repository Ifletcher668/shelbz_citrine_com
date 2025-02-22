import { motion } from 'motion/react';
import styled from 'styled-components';

const Home = () => {
  return (
    <FrontPageBackground
      initial={{ opacity: 0, transform: 'scale(1)' }}
      animate={{
        opacity: 1,
        transform: ['scale(1)', 'scale(1.1)', 'scale(1)'],
      }}
      transition={{
        opacity: { duration: 2, ease: 'easeOut' },
        transform: {
          duration: 2,
          ease: 'easeInOut',
        },
      }}
    />
  );
};

const StyledFrontPageBackground = styled.div`
  background-image: url('/assets/roots.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
`;

const FrontPageBackground = motion.create(StyledFrontPageBackground);

export default Home;
