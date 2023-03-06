import type { FormEvent } from 'react';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import {
  AnimatedText,
  ConfettiCanvas,
  Layout,
  MainWrapper,
} from '~components/index';
import { VALIDATION_CONSTANTS } from '~utils/constants';
import { shake } from '~utils/styled-components/snippets';

function encode(data: Record<string, string | number | boolean>) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactPage = () => {
  // Form field states
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Error states
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [isInErrorState, setIsInErrorState] = useState<boolean>(false);

  // success state
  const [showSuccessMessage, setShowSendMessage] = useState<boolean>(false);

  // Eager validation
  const [shouldEagerValidate, setShouldEagerValidate] =
    useState<boolean>(false);

  const handleFormErrors = useCallback(() => {
    let hasErrors = false;

    if (name === '') {
      setNameError('Please enter your name');
      hasErrors = true;
    } else if (name.length < 2) {
      setNameError('Name must be at least 2 characters');
      hasErrors = true;
    } else if (name.length > 50) {
      setNameError('Name must be less than 50 characters');
      hasErrors = true;
    } else if (!VALIDATION_CONSTANTS.VALID_NAME_REGEX.test(name)) {
      setNameError('Name must only contain letters');
      hasErrors = true;
    } else setNameError(null);

    if (email === '') {
      setEmailError('Please enter your email');
      hasErrors = true;
    } else if (
      !VALIDATION_CONSTANTS.VALID_EMAIL_REGEX.test(email) ||
      VALIDATION_CONSTANTS.BAD_COM_REGEX.test(email) ||
      VALIDATION_CONSTANTS.BAD_CON_REGEX.test(email) ||
      VALIDATION_CONSTANTS.BAD_GMAIL_REGEX.test(email) ||
      VALIDATION_CONSTANTS.BAD_HOTMAIL_REGEX.test(email)
    ) {
      setEmailError('Please enter a valid email');
      hasErrors = true;
    } else if (email.length > 100) {
      setEmailError('Email must be less than 100 characters');
      hasErrors = true;
    } else setEmailError(null);

    if (message === '') {
      setMessageError('Please enter a message');
      hasErrors = true;
    } else if (message.length < 10) {
      setMessageError('Message must be at least 10 characters');
      hasErrors = true;
    } else if (message.length > 500) {
      setMessageError('Message must be less than 500 characters');
      hasErrors = true;
    } else setMessageError(null);

    if (hasErrors) {
      setShouldEagerValidate(true);

      // Triggers UI button animation
      if (!isInErrorState) setIsInErrorState(true);
    } else {
      setShouldEagerValidate(false);
      setIsInErrorState(false);
    }

    return hasErrors;
  }, [name, email, message, isInErrorState]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    const hasErrors = handleFormErrors();

    if (hasErrors) return;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(res => {
        if (res.status === 200) {
          setShowSendMessage(true);
          setName('');
          setEmail('');
          setMessage('');
        } else if (res.status >= 400) alert(res.text);
      })
      .catch(err => alert(err));
  };

  // reset success message and canvas UI after 5 seconds
  useEffect(() => {
    if (!showSuccessMessage) return;

    setTimeout(() => {
      setShowSendMessage(false);
    }, 5000);
  }, [showSuccessMessage]);

  // eager validate if shouldEagerValidate is true
  useEffect(() => {
    if (!shouldEagerValidate) return;

    handleFormErrors();
  }, [shouldEagerValidate, handleFormErrors]);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  return (
    <Layout>
      <MainWrapper>
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui
          suscipit commodi porro veritatis, illo similique tempore inventore
          corrupti ullam, veniam ab exercitationem quia officiis, iusto
          architecto. Quae, non!
        </p>
        <p>
          Please fill out the contact form{' '}
          <strong>for tattoo inquiries only!</strong>
        </p>

        <Form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          data-netlify="true"
          noValidate
        >
          {/* Necessary for Netlify forms to work */}
          <input type="hidden" name="form-name" value="contact" />

          <Label>
            <LabelText>Your Name:</LabelText>
            <Input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={name}
            />
          </Label>

          <ErrorMessage duration={250} isMounted={Boolean(nameError)}>
            {nameError}
          </ErrorMessage>

          <Label>
            <LabelText>Your Email:</LabelText>{' '}
            <Input
              type="email"
              name="email"
              onChange={onChangeHandler}
              value={email}
            />
          </Label>

          <ErrorMessage duration={250} isMounted={Boolean(emailError)}>
            {emailError}
          </ErrorMessage>

          <Label>
            <LabelText>Message:</LabelText>
            <Textarea
              name="message"
              onChange={onChangeHandler}
              value={message}
            />
          </Label>

          <ErrorMessage duration={250} isMounted={Boolean(messageError)}>
            {messageError}
          </ErrorMessage>

          <Label>
            <LabelText>I confirm this is for tattoo inquiries only</LabelText>
            <Checkbox name="confirm" />
          </Label>

          <SubmitButton isInErrorState={isInErrorState} type="submit">
            Send
          </SubmitButton>

          <ConfettiCanvas show={showSuccessMessage} />

          <AnimatedText duration={250} isMounted={showSuccessMessage}>
            Thanks for your message! I'll get back to you soon.
          </AnimatedText>
        </Form>
      </MainWrapper>
    </Layout>
  );
};

export default ContactPage;

const ErrorMessage = styled(AnimatedText)`
  color: var(--color-error);

  /* remove parent flexbox's "gap" property */
  margin-top: calc(var(--spacing-large) * -1);
`;

const SubmitButton = styled.button<{ isInErrorState: boolean }>`
  width: 50%;
  padding: 12px 20px;
  background: var(--color-800);
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
    background: var(--color-700);
    border: 1px solid var(--font-accent);
    scale: 0.99;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-large);

  width: clamp(
    300px,
    var(--max-width-wrapper),
    calc(var(--max-width-wrapper) / 2)
  );
  margin-left: auto;
  margin-right: auto;
  /* containing block for positioned checkboxes */
  position: relative;
`;

const Label = styled.label`
  display: flex;
  gap: 8px;

  /* containing block for positioned checkboxes */
  position: relative;
`;

const LabelText = styled.span`
  flex: 1;
`;

const Input = styled.input`
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

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;

  &::before {
    content: '';

    position: absolute;
    top: 0px;
    right: 0px;

    width: 24px;
    height: 24px;
    background-color: var(--color-800);
    border: 1px solid var(--font-accent);
    border-radius: 4px;
  }

  &:checked {
    &::before {
      background-color: var(--color-700);
    }

    // creates a 'checkmark' ::after psuedo-element
    &::after {
      content: '';

      position: absolute;
      top: 6px;
      right: 4px;

      width: 16px;
      height: 8px;
      border-left: 3px solid var(--font-accent);
      border-bottom: 3px solid var(--font-accent);
      transform: rotate(-45deg);
    }
  }

  &:hover,
  &:focus {
    &::before {
      background: var(--color-700);
      border: 1px solid var(--font-accent);
    }
  }

  /* apply focus styles to ::before element */
  &:focus {
    box-shadow: none;
    &::before {
      box-shadow: var(--focus-shadow);
    }
  }
`;

const Textarea = styled.textarea`
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
