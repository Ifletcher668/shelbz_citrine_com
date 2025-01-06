import type { FormEvent } from 'react';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';

import { motion } from 'motion/react';

import { childVariants } from 'utils/animationConstants';

import AnimatedText from '../../components/AnimatedText';
import { VALIDATION_CONSTANTS } from '../../utils/constants';

import {
  Form as BaseFormComponent,
  ErrorMessage,
  Input,
  Label,
  LabelText,
  SubmitButton,
  Textarea,
} from './styled-components';

function encode(data: Record<string, string | number | boolean>) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Form = motion.create(BaseFormComponent);

const ContactForm = () => {
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
    <>
      <Form
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        data-netlify="true"
        noValidate
        variants={childVariants}
      >
        <h2>What are you looking for?</h2>

        {/* Necessary for Netlify forms to work */}
        <input type="hidden" name="form-name" value="contact" />

        <Label>
          <LabelText>Name:</LabelText>
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
          <LabelText>Email:</LabelText>{' '}
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
          <LabelText>What would you like to know?</LabelText>
          <Textarea name="message" onChange={onChangeHandler} value={message} />
        </Label>

        <ErrorMessage duration={250} isMounted={Boolean(messageError)}>
          {messageError}
        </ErrorMessage>

        <SubmitButton isInErrorState={isInErrorState} type="submit">
          Send
        </SubmitButton>

        <AnimatedText duration={250} isMounted={showSuccessMessage}>
          Thanks for your message! I'll get back to you soon.
        </AnimatedText>
      </Form>
    </>
  );
};

export default ContactForm;
