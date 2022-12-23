import { useState } from 'react';

import styled from 'styled-components';

import { Layout, MainWrapper } from '../components';

const ContactPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  // TODO: success message and errors
  // const [showSuccessMessage, setShowSendMessage] = useState<boolean>(false)
  // const [successMessage, setSuccessMessage] = useState<string>(
  //     'Excellent! I appreciate you wanting to connect. I will get back with you shortly!',
  // )

  function encode(data: any) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    }).catch(err => alert(err));

    setName('');
    setEmail('');
    setMessage('');
    // setShowSendMessage(true)
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
        >
          {/* Necessary for Netlify forms to work */}
          <input type="hidden" name="form-name" value="contact" />

          <Label>
            <LabelText>Your Name:</LabelText>
            <Input
              type="text"
              name="name"
              onChange={e => setName(e.target.value)}
            />
          </Label>

          <Label>
            <LabelText>Your Email:</LabelText>{' '}
            <Input
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </Label>

          <Label>
            <LabelText>Message:</LabelText>
            <Textarea
              name="message"
              onChange={e => setMessage(e.target.value)}
            ></Textarea>
          </Label>

          <Label>
            <LabelText>I confirm this is for tattoo inquiries only</LabelText>
            <Checkbox name="confirm" />
          </Label>

          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </MainWrapper>
    </Layout>
  );
};

export default ContactPage;

const SubmitButton = styled.button`
  width: 50%;
  padding: 12px 20px;
  background: var(--blue-800);
  border: 1px solid var(--blue-200);
  border-radius: 6px;
  color: var(--blue-100);
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 2x00ms ease-in-out;

  &:hover,
  &:focus {
    background: var(--blue-700);
    border: 1px solid var(--blue-300);
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

  background: var(--blue-800);
  border: 1px solid var(--blue-200);
  border-radius: 6px;
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
    background-color: var(--blue-800);
    border: 1px solid var(--blue-200);
    border-radius: 4px;
  }

  &:checked {
    &::before {
      background-color: var(--blue-700);
    }

    // creates a 'checkmark' ::after psuedo-element
    &::after {
      content: '';

      position: absolute;
      top: 6px;
      right: 4px;

      width: 16px;
      height: 8px;
      border-left: 3px solid var(--blue-100);
      border-bottom: 3px solid var(--blue-200);
      transform: rotate(-45deg);
    }
  }

  &:hover,
  &:focus {
    &::before {
      background: var(--blue-700);
      border: 1px solid var(--blue-300);
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

  background: var(--blue-800);
  border: 1px solid var(--blue-200);
  border-radius: 6px;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
`;
