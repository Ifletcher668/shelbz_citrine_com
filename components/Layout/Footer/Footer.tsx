import Link from 'next/link';
import styled from 'styled-components';

import { ROUTES } from 'utils/constants';

const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright Shelbz Citrine</p>
      <p>Site by Isiah Fletcher</p>
      <small>
        Curious about the background? It's a project by Isiah using HTML5's
        canvas Api. An early attempt of his to write generative code. You can
        see the whole thing <Link href={ROUTES.CANVAS}>here</Link>.
      </small>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-8);

  background: var(--background-secondary);

  border-radius: 5px;

  /* Ensure the footer always stays at the bottom */
  margin-top: auto;
  padding: var(--spacing-48);
`;
