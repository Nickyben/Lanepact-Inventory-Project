export const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitForm = (formId, formData) => {
	alert([formId,...Object.values(formData)])
	return {
		type: SUBMIT_FORM,
		id: formId,
		inputValues: formData,
	};
};
