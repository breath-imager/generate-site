import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Layout from "../components/layout"
import contactHeader from "../assets/images/contact/contact-header.jpg"

const GATEWAY_URL =
  "https://generate-sendgrid.herokuapp.com/subscribe?type=creators"
//const GATEWAY_URL = "https://arcane-thicket-82914.herokuapp.com"
//const GATEWAY_URL = "http://localhost:5000/subscribe?type=creators"
//const GATEWAY_URL = "http://ptsv2.com/t/jvyng-1608234775/post"
const required = "This field is required"

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    formState: { isSubmitting },
  } = useForm()
  


  const onSubmit = async data => {
    const formdata = new FormData()
    formdata.append("email", data["email"])
    formdata.append("promo", data["promo"].toUpperCase())

    await fetch(GATEWAY_URL, {
      method: "POST",
      body: formdata,
      redirect: "follow",
    })
      .then(response => {
        if (response.status === 200) {
          // Do whatever you want to do on success
          console.log("200")
          console.log(response)
          setSubmitted(true)
        } else if (response.status === 402) {
          console.log("402")
          console.log(response)
          setError("submit", {
            type: "manual",
            message: "Invalid Code, Try Again",
          })
        }
      })
      .catch(error => {
        console.log("other")
        setError("submit", "submitError", `${error.message}`)
      })
  }

  const showSubmitError = msg => <p className="msg-error">{msg}</p>

  const showThankYou = (
    <div className="msg-confirm">
      <p>Thank you! You will receive an email with instructions shortly.</p>
    </div>
  )

  const showForm = (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="form-inline w-100"
    >
      <div className="container">
        <input
          type="text"
          className="form-control email"
          placeholder="Enter promotional code"
          name="promo"
          id="promo"
          onChange={() => clearErrors()}
          ref={register({ required })}
        />
      </div>
      <div className="error-message">
        {errors.promo && <p>{errors.promo.message}</p>}
      </div>

      <div className="container">
        <br />
        <input
          type="text"
          className="form-control email"
          placeholder="Enter email"
          name="email"
          type="email"
          id="email"
          onChange={() => clearErrors()}
          ref={register({ required })}
          disabled={isSubmitting}
        />
        <br />
      </div>
      <div className="error-message">
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="submit-wrapper">
        <br />

        <input
          type="submit"
          value="subscribe"
          disabled={isSubmitting}
          className="btn btn-primary btn-suscribe"
        />
      </div>
    </form>
  )

  return (
    <Layout page="contact">
      <div id="contact" className="wrapper">
        <header
          className="bg-image-full generateHeader d-flex"
          style={{ backgroundImage: `url(${contactHeader})` }}
        >
          <div className="generateHeaderContent justify-content-center align-self-center mx-auto text-center"></div>
        </header>

        <footer>
          <div className="row footerTop">
            <div className="col-12 col-md-12 text-center">
              <h1>
                As part of Generate's mission we believe in extending our
                software to as many creative minds as possible.
              </h1>
              <h2>
                To redeem the codes enter them in the “Redeem Gift Card or Code”
                page in their App Store account settings. Email us at{" "}
                <a href="mailto:info@generateapp.com" target="_blank">
                  info@generateapp.com
                </a>{" "}
                if you have any questions or issues during the process.
              </h2>
              <div className="text-side">
                <div className="error-message">
                  {errors.submit && <p>{errors.submit.message}</p>}
                </div>
              </div>
              <div className="form-side">
                {submitted ? showThankYou : showForm}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  )
}
