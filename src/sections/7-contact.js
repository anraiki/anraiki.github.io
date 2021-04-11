import React, { Component } from 'react';

class Contact extends Component {
    render() {
	  let scale_height = this.props.scale_height || "1080px";
      let containerStyle = {minHeight: scale_height};
      return (
        <section id="contact" style={containerStyle}>
            <h2>Talk to me</h2>
            <p style={{padding: "15px 0 25px", fontSize: "1.2em"}}>Interested in my services?</p>
            <hr />
            <p style={{padding: 0}}>
			  <br/>Send me an email
			  <br/><strong id="contact" className="myEmail">anraiki@gmail.com</strong>
		   </p>
        </section>
      );
    }
  }

  export default Contact;