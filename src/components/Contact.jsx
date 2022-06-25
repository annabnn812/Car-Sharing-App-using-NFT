import React, { useState } from "react";
import './Login/Login.css';

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }
 
  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      
     
     
      <div className="container">
      <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://avatars.mds.yandex.net/i?id=d6c2a91a88f4f82a4d6a4dc934d0a950-5329555-images-thumbs&ref=rim&n=33&w=419&h=188"
              alt=""
            />
          </div>
      <div className="col-lg-5">
          
      <div className="mb-3 pt-10">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-100 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="login">
        <button
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
      </div>
      </div>
      
      </div>
      
      &nbsp;
      <p className="text-center"><a href="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"><img className="nav-social" src="/icons/linkedin.png" alt="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"/></a>
            <a href="http://annabnn.com/"><img className="nav-social" src="/icons/internet.png" alt="http://annabnn.com/"/></a>
            <a href="https://github.com/annabnn812"><img className="nav-social" src="/icons/GitHub.png" alt="https://github.com/annabnn812"/></a>
            <a href="https://twitter.com/_AnnaBNN"><img className="nav-social" src="/icons/twitter.png" alt="https://twitter.com/_AnnaBNN"/></a>
			</p>
      &nbsp;
          <p className="m-0 text-center text-white">
            Copyright &copy;  Car Sharing Service Team  2022
          </p>
          <br />
      &nbsp;
       
      
    </form>
    
  );
};

export default Contact;