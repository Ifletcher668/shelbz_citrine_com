import { motion } from 'motion/react';
import styled from 'styled-components';

const Home = () => {
  return (
    <FrontPageBackground
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0, 1],
      }}
      transition={{
        scale: {
          duration: 2,
          ease: 'linear',
        },
        opacity: { duration: 2, ease: 'easeOut' },
      }}
    />
  );
};

export default Home;

const StyledFrontPageBackground = styled.div`
  background-image: url('/assets/roots.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  height: 100vh;
  z-index: -1;
`;

const FrontPageBackground = motion.create(StyledFrontPageBackground);
