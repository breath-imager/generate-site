import React, { useState} from "react"
import { useForm } from "react-hook-form"
import Layout from "../components/layout"
import contactHeader from "../assets/images/contact/contact-header.jpg"

const GATEWAY_URL = "https://generate-sendgrid.herokuapp.com/subscribe" 
//const GATEWAY_URL = "http://ptsv2.com/t/ew/post"
const required = "This field is required";

export default function Home() {
    
    const [submitted, setSubmitted] = useState(false)
    const {
      register,
      handleSubmit,
      setError,
      errors,
      formState: { isSubmitting }
    } = useForm()



    const onSubmit = (data) => {
      const formdata = new FormData()
      formdata.append("email", data['email'])
      fetch(GATEWAY_URL, {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      })
        .then((response) => {
          if (response.status === 200) {
            // Do whatever you want to do on success
            setSubmitted(true)
          } else if (response.status === 402) {
            setError("submit", "submitError", `Oops! There seems to be an issue!`);
          }
        })
        .catch((error) => {
          setError("submit", "submitError", `${error.message}`);
        });
    };

    const showSubmitError = msg => <p className="msg-error">{msg}</p>;

    const showThankYou = (
        <div className="msg-confirm">
          <p>Email added to our newsletter!</p>
          
        </div>
      );

    const showForm = (
    <form method="post" onSubmit={handleSubmit(onSubmit)} className="form-inline w-100"> 
        <label htmlFor="email">
            <input 
                type="text" 
                className="form-control email" 
                placeholder="Enter email" 
                name="email" 
                type="email" 
                id="email" 
                ref={register({ required })}
                disabled={isSubmitting}
            />
            {errors.email && (
          <div className="msg-error">{errors.email.message}</div>
        )}
        </label>
        <div className="submit-wrapper">
        <input type="submit" value="subscribe"  disabled={isSubmitting} className="btn btn-primary btn-suscribe"/>
        </div>        
    </form>

);  

  return (
    <Layout page='contact'>
        
        <div id="contact" className="wrapper">
   
            <header 
                className="bg-image-full generateHeader d-flex" 
                style={{backgroundImage: `url(${contactHeader})`}}
    
            >
                <div className="generateHeaderContent justify-content-center align-self-center mx-auto text-center">
                </div>
            </header>


            <section className="contactContent">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-md">
                    <h1>About</h1>
                    <p>Generate is a powerful mobile photo and video editing app for unique thinkers. We have one goal: free today’s creators to stand out. You’re custom. We’re customizable. It’s a match made in digital heaven.</p>
                </div>
                <div className="col-12 col-md">
                    <h1>Contact</h1>
                    <p></p>
                    <a href="mailto:info@generateapp.com" target="_blank" className="btn">Contact Us</a>
                </div>

                </div>
            </div>
            </section>
            <footer>           
               <div className="row footerTop">
                <div className="col-12 col-md-12 text-center">
                    <h1>Get Generate in your inbox</h1>
                    <h2>No spam, good vibes only</h2>
                    <div className="text-side">
                    {errors && errors.submit && showSubmitError(errors.submit.message)}
                    </div>
                    <div className="form-side">{submitted ? showThankYou : showForm}</div>
                </div>
            </div>
            </footer>

        </div>
       
    </Layout>
  )
}
