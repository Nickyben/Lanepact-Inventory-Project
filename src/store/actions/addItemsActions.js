export const ADD_WAREHOUSE = 'ADD_WAREHOUSE';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addItem = (itemDataObj, actionType) => {
	//console.warn(userEmail, userPassword);
	return async (dispatch) => {
		//this fetch request creates an new user and returns info about the new account
		if (true) {
			//change
			let response;
			try {
        //edit the api url based on the action type
				response = await fetch(
					`https://rn-firebase-expo-project.firebaseio.com/myProducts.json?auth=${idToken}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(itemDataObj),
					}
				);
			} catch (err) {
				if (err.message.toLowerCase().includes('network'))
					throw new Error(
						'Hmm...Something is wrong with your Network Connection. Please check your connection!'
					);
			}

			if (!response.ok) {//edit this according to the api docs
				const responseErrorData = await response.json();
				const respErrMsg = responseErrorData.error.message;
				let errMsg;

        //EDIT THIS BASED ON THE DOCUMENTATION
				switch (respErrMsg) {
					case 'EMAIL_NOT_FOUND': {
						errMsg = `There is no account with email ${userEmail}, please create an account!`;
						break;
					}

					case 'INVALID_PASSWORD': {
						errMsg = `The password you entered is incorrect`;
						break;
					}

					case 'USER_DISABLED': {
						errMsg = `We are so sorry but, this account has been disabled!`;
						break;
					}
					default:
						errMsg = 'Hmm...Something went wrong!';
				}

				//make sure to handle all errors, example: network error
				//console.warn(errMsg);
				throw new Error(errMsg);
			}

			const responseData = await response.json(); //waits form the response before continuing the exe

			//console.log(responseData);//to see the response of the POST

			//dispatch
			dispatch({
				type: actionType,
				itemData: itemDataObj,
			});
		} else {
			//console.log('EMPTY FIELDS');
			throw new Error('PLEASE FILL IN ALL FIELDS!');
		}
	};
};
