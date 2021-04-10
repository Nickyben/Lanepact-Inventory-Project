import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, useParams, useRouteMatch, useLocation, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AuthNavBar from '../components/AuthNavBar';
import Form from '../components/UI/Form';

const forgotPasswordInputItems = [
	{
		id: 'loginEmail',
		label: 'Password Retrieve Email',
		placeholder: 'email address',
		type: 'email',
		required: true,
		className: 'form-control',
		icon: {
			iconName: 'person',
		},
		email: true,
		errorMsg: 'Please provide a valid email address',
	},
];
const ForgotPassword = () => {
	const [redirectToReferrer, setRedirectToReferrer] = useState(false);

	const { state } = useLocation();
	const [formActionDone, setFormActionDone] = useState(false);

	const authHandler = (inputValues, location, history) => {
		//alert(Object.values(inputValues));

		setFormActionDone(true);
		setTimeout(() => setFormActionDone(false), 5000);
		//console.log(inputValues);
		// const to = '/home';
		// if (location.pathname !== to) {
		// 	history.push(to);
		// }
	};

	if (redirectToReferrer === true) {
		return <Redirect to={state?.from || '/'} />;
	}

	return (
		<Route
			render={({ location, history }) => (
				<div className="page-wrapper">
					<AuthNavBar />
					<div className="auth-wrapper">
						<div className="auth-inner">
							<Form
								id={'forgotPasswordForm'}
								title={'Forgot Password?'}
								items={forgotPasswordInputItems}
								submitTitle={'Send Email'}
								formErrorMsg={'Please provide valid credentials!'}
								doNotClearInputs
								formAction={(inputValues) => authHandler(inputValues, location, history)}></Form>
						
						</div>
					</div>
				</div>
			)}
		/>
	);


		
};

export default ForgotPassword;
