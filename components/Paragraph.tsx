import { type ReactNode, useRef } from 'react';

import { motion, useInView } from 'motion/react';

type Props = {
  children: ReactNode;
  alignment?: 'left' | 'center' | 'right';
};

const Paragraph = (props: Props) => {
  const { children, alignment = 'left' } = props;

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <motion.p
      style={{ textAlign: alignment }}
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        ease: 'easeOut',
        duration: 2,
      }}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
