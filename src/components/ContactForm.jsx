import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  margin: 2rem auto;
  color: #333;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-align: left;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #61dafb;
    outline: none;
  }
`;


const Textarea = styled.textarea`
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  border: 1px solid #ccc;

  font-size: 1rem;
  transition: border-color 0.3s ease;

 &:focus {
    border-color: #61dafb;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #61dafb;
  color: #282c34;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #21a1f1;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <FormWrapper>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone:</Label>
          <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required></Textarea>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </FormWrapper>
  );
}

export default ContactForm;
