import styled from 'styled-components';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import VisuallyHidden from 'components/VisuallyHidden';
import { ROUTES } from 'utils/constants';

const Footer = () => {
  return (
    <Wrapper>
      <Paragraph>Copyright Shelbz Citrine</Paragraph>
      <Paragraph>Site by Isiah Fletcher</Paragraph>
      <a target="_blank" rel="noreferrer noopener" href={ROUTES.BOOK}>
        Looking for a hair cut? Check out my other site!
        <VisuallyHidden> External link</VisuallyHidden>
        <Icon id="external-link" strokeWidth={2} size={16} />
      </a>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-double-extra-small);

  /* Ensure the footer always stays at the bottom */
  margin-top: auto;
  padding: var(--spacing-double-extra-large) 0;
`;
