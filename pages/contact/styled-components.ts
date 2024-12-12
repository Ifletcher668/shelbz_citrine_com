import styled, { css } from 'styled-components';

import AnimatedText from 'components/AnimatedText';
import { BREAKPOINTS } from 'utils/constants';
import { shake } from 'utils/styled-components/snippets';

export const ErrorMessage = styled(AnimatedText)`
  color: var(--color-error);
  font-size: var(--font-size-small);
  font-weight: 900;

  /* remove parent flexbox's "gap" property */
  margin-top: calc(var(--spacing-large) * -1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-large);
  /* containing block for positioned checkboxes */
  position: relative;

  @media ${BREAKPOINTS.TABLET} {
    align-self: flex-end;
    width: clamp(
      300px,
      var(--max-width-wrapper),
      calc(var(--max-width-wrapper) / 2)
    );
  }
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  /* containing block for positioned checkboxes */
  position: relative;
`;

export const LabelText = styled.span`
  flex: 1 100%;

  @media ${BREAKPOINTS.LARGE_PHONE} {
    flex-basis: 0;
  }
`;

export const Input = styled.input`
  flex: 4;
  height: 3rem;
  padding: 12px 20px;

  background: var(--color-800);
  border: 1px solid var(--font-accent);
  border-radius: 6px;

  &:hover,
  &:focus {
    background: var(--color-700);
    border: 1px solid var(--font-accent);
  }
`;

export const SubmitButton = styled.button<{ isInErrorState: boolean }>`
  padding: 12px 20px;
  background: var(--color-500);
  border: 1px solid var(--font-accent);
  border-radius: 6px;
  color: var(--font-accent);
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  ${({ isInErrorState }) =>
    isInErrorState &&
    css`
      animation ${shake} 300ms ease;
      `}

  &:hover,
  &:focus {
    background: var(--color-800);
    border: 1px solid var(--font-accent);
    scale: 0.99;
    color: var(--font-primary);
  }
`;

// TODO: Might need to add this soon
// export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   cursor: pointer;

//   &::before {
//     content: '';

//     position: absolute;
//     top: 0px;
//     right: 0px;

//     width: 24px;
//     height: 24px;
//     background-color: var(--color-800);
//     border: 1px solid var(--font-accent);
//     border-radius: 4px;
//   }

//   &:checked {
//     &::before {
//       background-color: var(--color-700);
//     }

//     // creates a 'checkmark' ::after psuedo-element
//     &::after {
//       content: '';

//       position: absolute;
//       top: 6px;
//       right: 4px;

//       width: 16px;
//       height: 8px;
//       border-left: 3px solid var(--font-accent);
//       border-bottom: 3px solid var(--font-accent);
//       transform: rotate(-45deg);
//     }
//   }

//   &:hover,
//   &:focus {
//     &::before {
//       background: var(--color-700);
//       border: 1px solid var(--font-accent);
//     }
//   }

//   /* apply focus styles to ::before element */
//   &:focus {
//     box-shadow: none;
//     &::before {
//       box-shadow: var(--focus-shadow);
//     }
//   }
// `;

export const Textarea = styled.textarea`
  flex: 4;
  height: 6rem;
  padding: 12px 20px;

  background: var(--color-800);
  border: 1px solid var(--font-accent);
  border-radius: 6px;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;

  &:hover,
  &:focus {
    background: var(--color-700);
    border: 1px solid var(--font-accent);
  }
`;
