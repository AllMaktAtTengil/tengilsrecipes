import React, { Component } from "react";

class ContactUs extends Component {
    handleSubmit = (e) => {
        alert("Thanks for the message!");
        e.preventDefault();
    };

    render() {
        return (
            <>
                <div className="contact-container">
                    <div className="contact-box">
                        <h1>Give us a shout!</h1>
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <textarea className="contact-area" id="" cols="30" rows="10" placeholder="Send us a message"></textarea>
                            <button className="subscribe-btn" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactUs;
