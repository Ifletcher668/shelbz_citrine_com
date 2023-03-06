import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright Tigermoth</p>
      <p>Site by Isiah Fletcher</p>
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
