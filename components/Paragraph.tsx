import { type ReactNode } from 'react';

import { motion } from 'motion/react';

import { childVariants } from 'utils/animationConstants';

type Props = {
  children: ReactNode;
  alignment?: 'left' | 'center' | 'right';
};

const Paragraph = (props: Props) => {
  const { children, alignment = 'left' } = props;

  return (
    <motion.p style={{ textAlign: alignment }} variants={childVariants}>
      {children}
    </motion.p>
  );
};

export default Paragraph;
