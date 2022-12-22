import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright Shelbz Citrine</p>
      <p>Site by Isiah Fletcher</p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  /* Ensure the footer always stays at the bottom */
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-double-extra-small);
`;
