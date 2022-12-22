import styled from 'styled-components';

export default styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  /* When UnstyledButton is a sibling of an anchor tag, style like an anchor */
  a ~ & {
    background-image: linear-gradient(
        transparent calc(100% - 1px),
        var(--link-accent) 1px
      ),
      linear-gradient(transparent calc(100% - 1px), #8398a3 1px);
    background-size: 0% 6px, 100% 6px;
    background-repeat: no-repeat;
    background-position: 0 bottom, 0 bottom;
    transition-property: all;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;

    &:hover {
      text-decoration: none;
      color: var(---link-primary);
      cursor: pointer;
      background-size: 100% 6px, 100% 6px;
    }
  }
`;
