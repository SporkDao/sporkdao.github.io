import React, { Component } from 'react';
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./styles.css";
import "./styles-custom.css";
import * as emailjs from 'emailjs-com'
import { RouteComponentProps, withRouter } from 'react-router-dom'; 


interface PropsType { [x: string]: any; name: string; }

interface UserProps extends RouteComponentProps { history: any}

const MyTextInput = ({ label, ...props }: PropsType) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }: PropsType) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;



const MySelect = ({ label, ...props }: PropsType) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
class Presale extends React.Component<UserProps>{ 

  constructor(props) { 
    super(props); 
    this.state = {history: ''}; 
  }

  submitForm (e) {
    e.preventDefault()
    this.props.history.push('/thank-you'); // <--- The page you want to redirect your user to.
  }


  render() { 
  return (
    <>
      <h1>SporkDAO Whitelist Sign-Up</h1>
      <p>If you'd like to participate in our $SPORK token Whitelist sale, please fill out the following information. Contract address will be emailed when capacity is reached. </p> 
      <Formik
        initialValues={{
          email: "", 
          telegramUsername: "",
          twitterHandle: "",
          tweetURLShares: "", 
          walletAddress: "", 
          valueBring: "", 
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          telegramUsername: Yup.string()
            .required("Required"),
          twitterHandle: Yup.string()
            .required("Required"),
          tweetURLShares: Yup.string()
            .required("Required"),
          walletAddress: Yup.string() 
            .required("Required"),
          valueBring: Yup.string() 
            .required("Required"), 
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must double check that all fields are correct. "),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          emailjs.init("user_DuLyO9KOGGv7glRypS9BV");
          emailjs.send("service_ufehmlc","template_brq977p", {
            email: values.email,
            telegramUsername: values.telegramUsername,
            twitterHandle: values.twitterHandle,
            tweetURLShares: values.tweetURLShares,
            walletAddress: values.walletAddress,
            valueBring: values.valueBring,
          }); 
          this.props.history.push("/thank-you"); 
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="Email address"
            name="email"
            type="email"
            placeholder="sporkdao@gmail.com"
          />
          <MyTextInput
            label="Telegram Username (Must join our telegram group: https://t.me/sporkdao)"
            name="telegramUsername"
            type="text"
            placeholder="sporkdao"
          />
          <MyTextInput
            label="Twitter Profile URL (Must follow us on Twitter: https://twitter.com/sporkdao)"
            name="twitterHandle"
            type="text"
            placeholder="https://twitter.com/sporkdao"
          />
          <MyTextInput
            label="Tweet URL shares about $SPORK and #SPORKDAO (Must tag 2 friends)"
            name="tweetURLShares"
            type="text"
            placeholder="url to tweet"
          />
          <MyTextInput
            label="Wallet address (Binance Smart Chain)"
            name="walletAddress"
            type="text"
            placeholder="e.g 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
          />
          <MyTextInput
            label="What value can you bring to SporkDao?"
            name="valueBring"
            type="text"
            placeholder="e.g help with spreading awareness, onboarding partners, etc"
          />
          <MyCheckbox name="acceptedTerms">
            I have double checked that all fields are correct. 
          </MyCheckbox>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );

  }
};

export default withRouter(Presale); 