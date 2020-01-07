import React, { useContext, useState } from 'react';
// , useState
import { animated, useTransition } from 'react-spring';
import styled from '@emotion/styled';
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";

import Hero from '../hero';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IconContext } from "react-icons";
import { bp, buttonStyles, noButtonStyles } from '../../styles/component-styles';

const ModalDiv = styled.div`
  position: absolute;
  top: 0;
  z-index: 24;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 4rem;
  background-color: var(--dark-grey);
  color: #fff;
`

const FormWrapper = styled.form`
  padding: 1rem 1rem;
  @media (min-width: ${bp.sm}){
      padding: 1rem 25vw;
    }
  .title {
    display: block;
    margin-bottom: 0.5rem;
  }
  label {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }
  input, textarea {
    width: 100%;
    min-height: 2rem;
  }
  .form-item {
    margin-bottom: 2rem;
  }
  .description {
    font-size: 0.75rem;
  }
`

const Modal = ({ animation, pointerEvents }) => {
  const dispatch = useContext(GlobalDispatchContext);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [needs, setNeeds] = useState('');
  const [promo, setPromo] = useState('');

  function handleSubmit(event) {
    let dataToSend = {
      firstname: fname,
      lastname: lname,
      company: company,
      location: location,
      email: email,
      customerType: customerType,
      needs: needs,
      promo: promo,
    };
    dataToSend = JSON.stringify(dataToSend);
    console.log(dataToSend);
    console.log(event.currentTarget);
    event.currentTarget.reset();
    event.preventDefault();
  }

  return (
    <ModalDiv className="modal" style={{ pointerEvents }}>
      <animated.div className="modal-card" style={animation}>

        <button css={noButtonStyles} style={{ position: 'absolute', top: '-16px', right: '16px' }} onClick={() => {
          dispatch({ type: "TOGGLE_MODAL" })
        }}>
          <IconContext.Provider value={{ color: "white", size: '3rem' }}>
            <IoIosCloseCircleOutline />
          </IconContext.Provider>
        </button>

        <Hero page="modal" />

        <FormWrapper autoComplete="off" name="request-demo" onSubmit={handleSubmit} >

          <div className="form-item field first-name">
            <label className="caption" htmlFor="fname">First Name <span className="required">*</span></label>
            <input
              value={fname}
              onChange={event => setFname(event.target.value)}
              required
              className="field-element field-control"
              name="fname"
              type="text" spellCheck="false" maxLength="30" data-title="First" id="fname" />
          </div>

          <div className="form-item field last-name">
            <label className="caption" htmlFor="lname">Last Name <span className="required">*</span></label>
            <input
              value={lname}
              onChange={event => setLname(event.target.value)}
              required
              className="field-element field-control"
              name="lname"
              type="text" spellCheck="false" maxLength="30" data-title="Last" id="lname" />
          </div>

          <div className="form-item field text required">
            <label className="title" htmlFor="company">Company <span className="required">*</span></label>
            <input
              value={company}
              onChange={event => setCompany(event.target.value)}
              required
              className="field-element text"
              name="company"
              type="text" id="company" />
          </div>

          <div className="form-item field text required">
            <label className="title" htmlFor="location">Location <span className="required">*</span></label>
            <input
              value={location}
              onChange={event => setLocation(event.target.value)}
              required
              className="field-element text"
              name="location"
              type="text" id="location" />
          </div>

          <div className="form-item field email required">
            <label className="title" htmlFor="email">Email Address<span className="required">*</span></label>
            <div className="description">
              Please use company email addresses where applicable.
            </div>
            <input
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
              className="field-element"
              id="email"
              name="email"
              type="email" autoComplete="email" spellCheck="false" />
          </div>

          <div className="form-item field select">
            <label className="title" htmlFor="customertype">I would most likely be a:</label>
            <div className="description">
              Please select which type of customer category you would most likely fall under so we can ensure we get you to the right person.
              </div>
            <select
              value={customerType}
              onChange={event => setCustomerType(event.target.value)}
              name="customertype"
              id="customertype">
              <option value="Enterprise Customer">Enterprise Customer</option>
              <option value="Startup Customer">Startup Customer</option>
              <option value="Agency Customer or Partner">Agency Customer or Partner</option>
              <option value="Independent Consultant or Researcher">Independent Consultant or Researcher</option>
              <option value="Venture Firm / Investor">Venture Firm / Investor</option>
              <option value="Media Partner">Media Partner</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-item field textarea">
            <label className="title" htmlFor="needs">Tell us a little bit about your research needs</label>
            <textarea
              value={needs}
              onChange={event => setNeeds(event.target.value)}
              className="field-element"
              id="needs"></textarea>
          </div>

          <div className="form-item field text">
            <label className="title" htmlFor="promo">Promo Code</label>
            <input
              value={promo}
              onChange={event => setPromo(event.target.value)}
              className="field-element text"
              type="text"
              id="promo" />
          </div>

          <button css={buttonStyles} type='submit' >Submit</button>
        </FormWrapper>
      </animated.div>
    </ModalDiv>
  );
};

const ModalWrapper = () => {
  const state = useContext(GlobalStateContext) || {};

  const transition = useTransition(state.isModalOpen, null, {
    from: { opacity: 0, transform: 'translate3d(0, -240px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -240px, 0)' }
  });
  const pointerEvents = state.isModalOpen ? 'all' : 'none';

  return (
    <>
      {/* {state.isModalOpen ? 'true' : 'false'} */}
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              key={key}
              pointerEvents={pointerEvents}
              animation={animation}
            />
          )
      )}
    </>
  );
};

export default ModalWrapper;
