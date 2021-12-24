import React from "react";

class Form extends React.Component {
  state = {
	email: '',
	isAgreeWithTerms: false,
  }

  handleEmail = (event) => {
	this.setState({email: event.target.value});
  };

  handleCheckBox = (event) => {
		this.setState({isAgreeWithTerms: event.target.checked});
  };

  handleSubmit = () => {
	const isValidEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.state.email);
	const isVlidCheckbox = this.state.isAgreeWithTerms;
	if(!isValidEmail) {
		alert('Your email is not valid');
		return;
	}
	if(!isVlidCheckbox) {
		alert('You should accept all terms and conditions');
		return;
	}
	this.setState({email: '', isAgreeWithTerms: false});
		alert('Thank you for subscription!');
  };


	render() {
		const {email,isAgreeWithTerms} = this.state;
		return (
			<div>
				<input
					type="email"
					name='email'
					placeholder="email"
					value={email}
					onChange={this.handleEmail}
				/>
				<br />
				<label>
				<input
					type="checkbox"
					name="isAgreeWithTerms"
					checked={isAgreeWithTerms}
					onChange={this.handleCheckBox}
				/>
					I agree with terms conditions
				</label>
				<br />
				<button onClick={this.handleSubmit}>Send</button>
		</div>
		);
	}

}

export {Form};