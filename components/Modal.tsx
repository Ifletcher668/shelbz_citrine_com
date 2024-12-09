import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import { BREAKPOINTS } from 'utils/constants';

import VisuallyHidden from './VisuallyHidden';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement | null;
};

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props;
  const modalRef = useRef<HTMLButtonElement>(null);

  // when modal opens, focus on the close button
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  // close modal when Esc key is pressed
  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscapePress);
    return () => window.removeEventListener('keydown', handleEscapePress);
  }, [onClose]);

  return (
    <ModalWrapper isOpen={isOpen} onClick={onClose}>
      <ModalContentWrapper onClick={event => event.stopPropagation()}>
        <CloseButton ref={modalRef} onClick={onClose} type="button">
          <VisuallyHidden>Close</VisuallyHidden>
        </CloseButton>
        {children}
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

const ModalContentWrapper = styled.div`
  width: 666px;
`;

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000000;

  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Apply the transition to the div container */
  & > ${ModalContentWrapper} {
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transform: ${props => (props.isOpen ? 'scale(1)' : 'scale(0)')};
    transition: opacity 0.5s ease, transform 0.15s ease;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 14px;
    top: 0;
    content: ' ';
    height: 32px;
    width: 2px;
    background-color: var(--font-primary);
  }

  @media ${BREAKPOINTS.LAPTOP} {
    right: -35px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export default Modal;
