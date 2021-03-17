import { useEffect, useState } from 'react';
import validator from 'validator';
// Styles
import { FormContainer } from '../App.styles';

type Props = {
  setFormIsValid: any;
};

const Form: React.FC<Props> = ({ setFormIsValid }) => {
  const [name, setName] = useState<string | null>(null);
  const [nameWarning, setNameWarning] = useState<string | null>(null);

  const [address, setAddress] = useState<string | null>(null);
  const [addressWarning, setAddressWarning] = useState<string | null>(null);

  const [phone, setPhone] = useState<string | null>(null);
  const [phoneWarning, setPhoneWarning] = useState<string | null>(null);

  const [email, setEmail] = useState<string | null>(null);
  const [emailWarning, setEmailWarning] = useState<string | null>(null);

  useEffect(() => {
    if (
      nameWarning !== null &&
      nameWarning.length === 0 &&
      addressWarning !== null &&
      addressWarning.length === 0 &&
      phoneWarning !== null &&
      phoneWarning.length === 0 &&
      emailWarning !== null &&
      emailWarning.length === 0
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameWarning, addressWarning, phoneWarning, emailWarning, setFormIsValid]);

  useEffect(() => {
    if (name !== null) {
      if (name.length <= 2) {
        setNameWarning('The provided name is too short');
      } else {
        setNameWarning('');
      }
    }
  }, [name]);

  useEffect(() => {
    if (address !== null) {
      if (address.length <= 5) {
        setAddressWarning('Please provide a valid address');
      } else {
        setAddressWarning('');
      }
    }
  }, [address]);

  useEffect(() => {
    if (phone !== null) {
      if (phone.length !== 9 || phone.match(/^[0-9]+$/) == null) {
        setPhoneWarning('Invalid phone');
      } else {
        setPhoneWarning('');
      }
    }
  }, [phone]);

  useEffect(() => {
    if (email !== null) {
      if (
        !validator.isEmail(email) ||
        email.split('@')[0].match(/^[\w.]*$/) == null
      ) {
        setEmailWarning('Invalid email');
      } else {
        setEmailWarning('');
      }
    }
  }, [email]);

  return (
    <FormContainer className="flex_column">
      <label htmlFor="name">
        Name <sup>*</sup>
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name..."
        onChange={(e: any) => setName(e.target.value)}
      />
      <p className="warning">{nameWarning}</p>
      <label htmlFor="address">
        Address <sup>*</sup>
      </label>
      <input
        id="address"
        name="address"
        type="text"
        placeholder="Your address..."
        onChange={(e: any) => setAddress(e.target.value)}
      />
      <p className="warning">{addressWarning}</p>
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="+48"
        onChange={(e: any) => setPhone(e.target.value)}
      />
      <p className="warning">{phoneWarning}</p>
      <label htmlFor="email">
        Email <sup>*</sup>
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your email..."
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <p className="warning">{emailWarning}</p>
    </FormContainer>
  );
};

export default Form;
