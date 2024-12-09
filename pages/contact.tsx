import type { FormEvent } from 'react';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';

import Head from 'next/head';
import styled, { css } from 'styled-components';

import Accordion from '../components/Accordion';
import AnimatedText from '../components/AnimatedText';
import { Row } from '../components/Layout';
import Layout from '../components/Layout/Layout';
import MainWrapper from '../components/Layout/MainWrapper';
import { BREAKPOINTS, SEO, VALIDATION_CONSTANTS } from '../utils/constants';
import { shake } from '../utils/styled-components/snippets';

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
    <>
      <Head>
        <title>{SEO.contactPage.title}</title>
        <meta name="description" content={SEO.contactPage.description} />
      </Head>

      <Layout>
        <MainWrapper>
          <h1>Contact</h1>

          <Row rowSpacing={40}>
            <p>
              I pride myself in creating custom pieces that not only meet, but
              surpass your expectations. For commissions, I adhere to a set of
              fundamental goals. Here are my key guidelines:
            </p>

            <Row>
              <Accordion
                summary="Wearable and Usable Art"
                content={[
                  "Art is not merely a passive object to be observed - it's a dynamic expression of human creativity, meant to be lived and interacted with. I aim to weave this philosophy into my work by creating wearable and usable art.",
                  "My creations are not just pleasing to the eye, but also serve a purpose, providing a unique opportunity for art lovers to incorporate artistic expressions into their daily lives. Whether it's a one-of-a-kind hand-painted jacket, a carefully designed accessory, or an art-infused home décor item, each piece resonates with an individualistic charm, turning everyday objects into extraordinary artistic statements.",
                  'Contact me to add a touch of artistic flair to your wardrobe or living space, and experience art in its most interactive form.',
                ]}
              />
            </Row>

            <Row>
              <Accordion
                summary="Local Commissions"
                content={[
                  "Art has the power to tell stories, capture emotions, and create a profound connection with its observer. That's why I offer local commissions, providing a bespoke artistic service tailored to your vision and desires. If you have a particular story to tell, a memory to immortalize, or a vision to transform into a tangible piece of art, I'm here to bring it to life.",
                  "Collaborating with me on a local commission not only supports the thriving local art scene, but also results in a personal piece of artwork that is an authentic reflection of you or your story. Contact me to discuss your ideas, and let's co-create something beautiful and meaningful.",
                ]}
              />
            </Row>

            <Row>
              <Accordion
                summary="World Art Shows"
                content={[
                  "Art is a universal language that transcends borders, bringing people together from all walks of life. My goal is to commune with artists and art enthusiasts around the world by participating in international art shows. These events are an enriching platform for cultural exchange, creative exploration, and collective inspiration. If you're an artist seeking to collaborate, a curator looking for fresh perspectives, or an art enthusiast eager to delve into diverse artistic styles, your invitation to participate in such enriching experiences would be warmly welcomed. Reach out to me, and let's embark on a global artistic journey together.",
                ]}
              />
            </Row>
          </Row>
          <Row justify="flex-end">
            <h2>What are you looking for?</h2>
          </Row>
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
              <Textarea
                name="message"
                onChange={onChangeHandler}
                value={message}
              />
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
        </MainWrapper>
      </Layout>
    </>
  );
};

export default ContactPage;

const ErrorMessage = styled(AnimatedText)`
  color: var(--color-error);
  font-size: var(--font-size-small);
  font-weight: 900;

  /* remove parent flexbox's "gap" property */
  margin-top: calc(var(--spacing-large) * -1);
`;

const Form = styled.form`
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

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  /* containing block for positioned checkboxes */
  position: relative;
`;

const LabelText = styled.span`
  flex: 1 100%;

  @media ${BREAKPOINTS.LARGE_PHONE} {
    flex-basis: 0;
  }
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

const SubmitButton = styled.button<{ isInErrorState: boolean }>`
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
// const Checkbox = styled.input.attrs({ type: 'checkbox' })`
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
