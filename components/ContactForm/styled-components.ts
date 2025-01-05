import styled, { css } from 'styled-components';

import AnimatedText from 'components/AnimatedText';
import { BREAKPOINTS } from 'utils/constants';
import { shake } from 'utils/styled-components/snippets';

export const ErrorMessage = styled(AnimatedText)`
  color: var(--color-error);
  font-size: var(--font-size-small);
  font-weight: 900;

  /* remove parent flexbox's "gap" property */
  margin-top: calc(var(--spacing-32) * -1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-32);
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
  font-size: var(--font-size-medium);
  color: var(--font-tertiary);

  @media ${BREAKPOINTS.LARGE_PHONE} {
    flex-basis: 0;
  }
`;

const INPUT_STYLES = css`
  padding: 12px 20px;
  background: var(--background-tertiary);
  border: 1px solid var(--font-secondary-accent);
  border-radius: 2px;
  color: var(--font-tertiary);

  &:hover,
  &:focus {
    background: var(--background);
    border: 1px solid var(--font-secondary-accent);
  }
`;

export const Input = styled.input`
  flex: 4;
  height: 3rem;

  ${INPUT_STYLES};
`;

export const SubmitButton = styled.button<{ isInErrorState: boolean }>`
  background: var(--background-tertiary);
  color: var(--font-tertiary);
  border: 1px solid var(--font-secondary-accent);
  border-radius: 2px;

  font-size: var(--font-size-medium);
  font-weight: 700;

  padding: 12px 20px;
  width: fit-content;
  min-width: 250px;
  align-self: flex-end;

  cursor: pointer;

  transition: all 200ms ease-in-out;

  ${({ isInErrorState }) =>
    isInErrorState &&
    css`
      animation ${shake} 300ms ease;
      `}

  &:hover,
  &:focus {
    background: var(--background);
    border: 1px solid var(--font-secondary-accent);
    scale: 0.99;
    color: var(--font-secondary-accent);
  }
`;

export const Textarea = styled.textarea`
  flex: 4;
  height: 6rem;

  ${INPUT_STYLES};

  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
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
//     background-color: var(--color-dark-gray);
//     border: 1px solid var(--font-secondary-accent);
//     border-radius: 4px;
//   }

//   &:checked {
//     &::before {
//       background-color: var(--color-light-gray);
//     }

//     // creates a 'checkmark' ::after psuedo-element
//     &::after {
//       content: '';

//       position: absolute;
//       top: 6px;
//       right: 4px;

//       width: 16px;
//       height: 8px;
//       border-left: 3px solid var(--font-secondary-accent);
//       border-bottom: 3px solid var(--font-secondary-accent);
//       transform: rotate(-45deg);
//     }
//   }

//   &:hover,
//   &:focus {
//     &::before {
//       background: var(--color-light-gray);
//       border: 1px solid var(--font-secondary-accent);
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
