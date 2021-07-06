import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { ButtonContainer, Form, Hero, SuccessContainer, Wrapper } from '../styles/formStyles'
import { Button } from '../components/Elements'
import { useForm, ValidationError } from '@formspree/react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const FORM_ID = process.env.GATSBY_STATIC_FORM_ACCESS_KEY
const FORM_HEADER = 'Offerteformulier'
const FORM_SUB_HEADER = 'Vraag hier uw offerte aan!'
const NAME = 'Naam'
const PH_NAME = 'Naam'
const EMAIL = 'E-mailadres'
const PH_EMAIL = 'E-mailadres'
const PHONE = 'Telefoonnummer'
const PH_PHONE = 'Telefoonnummer'
const PROJECT_TYPE = 'Soort opdracht'
const OPTION_HEADER = 'Selecteer een optie'
const NL_EN = 'Vertaling Nederlands - Engels'
const EN_NL = 'Vertaling Engels – Nederlands'
const OFC_EN_NL = 'Beëdigde vertaling Engels – Nederlands'
const REVISION = 'Revisie'
const DESCRIPTION = 'Omschrijving'
const WORD_COUNT = 'Aantal woorden'
const DEADLINE = 'Deadline'
const SUBMIT = 'Verstuur'
const THANK_YOU =
  'Het formulier is succesvol verstuurd. Er wordt zo spoedig mogelijk contact met u opgenomen.'

const ContactForm = () => {
  const [state, handleSubmit] = useForm(FORM_ID)
  if (state.succeeded) {
    return (
      <Form>
        <SuccessContainer>
          <AiOutlineCheckCircle size={48} />
          <p className="landingpage-p" style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            {THANK_YOU}
          </p>
        </SuccessContainer>
      </Form>
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="full-name">{NAME}</label>
      <input type="text" name="naam" id="full-name" placeholder={PH_NAME} required="yes"></input>
      <label htmlFor="email">{EMAIL}</label>
      <input id="email" type="email" name="email" placeholder={PH_EMAIL} required="yes" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <label htmlFor="telephone">{PHONE}</label>
      <input type="telephone" name="telefoon" id="telephone" placeholder={PH_PHONE}></input>
      <label htmlFor="project_type">{PROJECT_TYPE}</label>
      <select name="project" id="project_type" required="yes">
        <option value="Choose" selected="" disabled="">
          {OPTION_HEADER}
        </option>
        <option value="1">{NL_EN}</option>
        <option value="3">{EN_NL}</option>
        <option value="5">{OFC_EN_NL}</option>
        <option value="7">{REVISION}</option>
      </select>
      <label htmlFor="message">{DESCRIPTION}</label>
      <textarea rows="3" id="message" name="omschrijving" required="" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <label htmlFor="word-count">{WORD_COUNT}</label>
      <input type="text" name="woorden" id="word-count" required=""></input>
      <label htmlFor="deadline">{DEADLINE}</label>
      <input type="text" name="deadline" id="deadline" required="yes"></input>
      <ButtonContainer>
        <Button type="submit" disabled={state.submitting}>
          {SUBMIT}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

const Offerte = () => {
  return (
    <Layout>
      <SEO title={FORM_HEADER} />
      <Wrapper>
        <Hero>
          <h1 className="page-title">{FORM_HEADER}</h1>
          <span className="landingpage-p">{FORM_SUB_HEADER}</span>
        </Hero>
        <ContactForm />
      </Wrapper>
    </Layout>
  )
}
export default Offerte
