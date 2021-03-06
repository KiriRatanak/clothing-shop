import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import googleIcon from '../../assets/google-icon.png'

import './sign-in.style.scss'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.setState({email: '', password: ''})
	}

	handleChange = (event) => {
		const {value, name} = event.target
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password`</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						label="Email"
						type="email" 
						name="email" 
						value={this.state.email} 
						handleChange={this.handleChange}
						required />
					<FormInput 
						label="Password"
						type="password" 
						name="password" 
						value={this.state.password} 
						required 
						handleChange={this.handleChange} />
					<div className="button">
						<CustomButton type="submit">Sign in</CustomButton>
						{/* <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
							{' '}Sign in with google{' '}
						</CustomButton> */}
						<span> or </span>
						<img onClick={ signInWithGoogle } src={googleIcon} alt="google-icon" className="google-icon" />
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn