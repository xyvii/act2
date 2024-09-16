import React from 'react';
import Navigation from './Navigation';

const Contact = () => {
    document.title = "Contact Us";
    return (
    <div>
        <Navigation />
        <h1>Contact Us</h1>
        <form>
            <label>Name:</label><br />
            <input type="text" name="name" /><br />
            <label>Email:</label><br />
            <input type="email" name="email" /><br />
            <label>Message:</label><br />
            <textarea name="message"></textarea><br />
            <button type="button">Submit</button>
        </form>
        </div>
    );
};

export default Contact;
