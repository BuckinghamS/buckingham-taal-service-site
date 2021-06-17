import React, { useState } from 'react'
import Layout from './../components/layout'

const FORM_HEADER = 'Offerteformulier'
const FORM_SUB_HEADER = 'Vraag hier uw offerte aan!'
const NAME = 'Naam'
const PH_NAME = 'Naam'
const EMAIL = 'E-mailadres'
const PH_EMAIL = 'E-mailadres'
const PHONE = 'Telefoonnummer'
const PH_PHONE = 'Telefoonnummer'
const PROJECT_TYPE = 'Soort opdracht:'
const DESCRIPTION = 'Omschrijving'
const WORD_COUNT = 'Aantal woorden'
const DEADLINE = 'Deadline'

const SUCCESS_MESSAGE = 'Thank you for reaching out to us.'
const ERROR_MESSAGE = 'An error occured while submitting the form'

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Offerte-formulier - Buckingham Vertaalservice',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: process.env.GATSBY_STATIC_FORM_ACCESS_KEY, // get your access key from https://www.staticforms.xyz
  })

  const [response, setResponse] = useState({
    type: '',
    message: '',
  })

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await res.json()

      if (json.success) {
        setResponse({
          type: 'success',
          message: SUCCESS_MESSAGE,
        })
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        })
      }
    } catch (e) {
      console.log('An error occurred', e)
      setResponse({
        type: 'error',
        message: ERROR_MESSAGE,
      })
    }
  }
  return (
    <Layout>
      <div>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column" />
              <div className="column  is-two-thirds">
                <div
                  className={
                    response.type === 'success'
                      ? 'tile box notification is-primary'
                      : 'is-hidden'
                  }
                >
                  <p>{response.message}</p>
                </div>
                <div
                  className={
                    response.type === 'error'
                      ? 'tile box notification is-danger'
                      : 'is-hidden'
                  }
                >
                  <p>{response.message}</p>
                </div>
                <div
                  className={response.message !== '' ? 'is-hidden' : 'columns'}
                >
                  <div className="column content">
                    <h2>{FORM_HEADER}</h2>
                    <p>{FORM_SUB_HEADER}</p>
                    <form
                      action="https://api.staticforms.xyz/submit"
                      method="post"
                      onSubmit={handleSubmit}
                    >
                      <div className="field">
                        <label className="label">{NAME}</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder={PH_NAME}
                            name="name"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">{EMAIL}</label>
                        <div className="control">
                          <input
                            className="input"
                            type="email"
                            placeholder={PH_EMAIL}
                            name="email"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">{PHONE}</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder={PH_PHONE}
                            name="phone"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="field" style={{ display: 'none' }}>
                        <label className="label">Title</label>
                        <div className="control">
                          <input
                            type="text"
                            name="honeypot"
                            style={{
                              display: 'none',
                            }}
                            onChange={handleChange}
                          />
                          <input
                            type="hidden"
                            name="subject"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">{PROJECT_TYPE}</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder={PROJECT_TYPE}
                            name="project_type"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      {/* <div className="field">
                                                <label className="label">{DESCRIPTION}</label>
                                                <div className="control">
                                                    <textarea
                                                        className="textarea"
                                                        placeholder={DESCRIPTION}
                                                        name="message"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div> */}
                      {/* <div className="field">
                                                <label className="label">{WORD_COUNT}</label>
                                                <div className="control">
                                                    <input
                                                        className="input"
                                                        type="text"
                                                        placeholder={WORD_COUNT}
                                                        name="word_count"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div> */}
                      {/* <div className="field">
                                                <label className="label">{DEADLINE}</label>
                                                <div className="control">
                                                    <input
                                                        className="input"
                                                        type="text"
                                                        placeholder={DEADLINE}
                                                        name="deadline"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div> */}
                      <div className="field is-grouped">
                        <div className="control">
                          <button className="button is-primary" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="column" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
