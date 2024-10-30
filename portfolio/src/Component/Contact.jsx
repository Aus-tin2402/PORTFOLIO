import React from 'react'
import './CSS/contact.css'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c8a6d25d-4a95-44a3-b75a-27ca39c830be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      window.alert(result)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      window.alert(result)
    }
  };

  return (
    <>
      <header className="contact" id="contact">
        <div className="contact-container">
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="input-feild-group">
              <label htmlFor="name">Enter Your User Name:</label>
              <input
                type={`text`}
                placeholder='Enter Your User Name:'
                id='name'
                name='name'
                required

              />
            </div>
            <div className="input-feild-group">
            <label htmlFor="email">Enter Your Email:</label>
              <input
                type={`email`}
                placeholder='Enter Your User Email:'
                id='email'
                name='email'
                required

              />
            </div>
            <div className="input-feild-group">
              <label htmlFor="message">Enter Your Message:</label>
              <textarea name="message" id="message" placeholder='Enter Your Message'></textarea>
            </div>
            <article className="button">
              <button type={`submit`} > Submit</button>
            </article>
          </form>
        </div>
      </header>
    </>
  )
}

export default Contact