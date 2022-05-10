import './styles/Contact.css';

const Contact = () => {
    function handleSubmit (e) {
        e.preventDefault();
        document.getElementById('feedback-form').reset();
        const submitted = document.querySelector('.submitted-text');
        submitted.textContent = 'Thank you! Your query has been submitted. We will try our best to reply in 5 working days.';
    }

    return (
        <main className="contact-contents">
            <h1>Contact</h1>
            <p>We would be delighted to hear from you. Please leave a phone number or an email if you wish for us to get back to you.</p>
            <form onSubmit={handleSubmit} id='feedback-form'>
                <div className='contact-details'>
                    <label htmlFor='name-input' className='contact-label'>Name</label>
                    <input type='text' id='name-input' />
                    <label htmlFor='tel-number-input' className='contact-label'>Phone Number </label> 
                    <input type ='tel' id='tel-number-input' />
                    <label htmlFor='email-input' className='contact-label'>E-mail</label>
                    <input type='email' id='email-input' />
                </div>
                <div className='feedback-input'>
                    <label>What would you like us to know?</label>
                    <textarea className='feedback-text' required/>
                    <button className='submit-button'>Send</button>
                </div>
            </form>
            <div className='submitted-text'></div>
        </main>
    );
};

export default Contact;