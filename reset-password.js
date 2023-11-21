
$(function () {
	const resetPassword = $("#reset-password-btn");
	const username = $("#username");
	const otp = $("#otp");
	const newPassword = $("#new-password");
	const confirmPassword = $("#confirm-password");

	username.focus();

	resetPassword.click(() => {
		const _isValidUsername = isValidUsername(username.val());
		const _isValidOtp = isValidOtp(otp.val());
		const _isValidNewPassword = isValidNewPassword(newPassword.val(), confirmPassword.val());
		const _isValidConfirmPassword = isValidConfirmPassword(confirmPassword.val(), newPassword.val());

		if (!_isValidUsername || !_isValidOtp || !_isValidNewPassword || !_isValidConfirmPassword) return;
	});

	username.on("focusout input", () => {
		isValidUsername(username.val());
	});

	otp.on("focusout input", () => {
		isValidOtp(otp.val());
	});

	newPassword.on("focusout input", () => {
		isValidNewPassword(newPassword.val(), confirmPassword.val());
	});

	confirmPassword.on("focusout input", () => {
		isValidConfirmPassword(confirmPassword.val(), newPassword.val());
	});
});

function isValidUsername(username) {
	const usernameErrorMessage = $("#username-error-msg-1");

	if (!username) {
		usernameErrorMessage.css("display", "block");
		return false;
	} else usernameErrorMessage.css("display", "none");

	return true;
}

function isValidOtp(otp) {
	const otpErrorMessage1 = $("#otp-error-msg-1");
	const otpErrorMessage2 = $("#otp-error-msg-2");

	const errors = $("#otp ~ .error");
	errors.css("display", "none");

	if (!otp) {
		otpErrorMessage1.css("display", "block");

		return false;
	} else if (otp.length < 4) {
		otpErrorMessage2.css("display", "block");

		return false;
	} else return true;
}

function isValidNewPassword(newPassword, confirmPassword) {
	const newPasswordErrorMessage1 = $("#new-password-error-msg-1");
	const newPasswordErrorMessage2 = $("#new-password-error-msg-2");
	const newPasswordErrorMessage3 = $("#new-password-error-msg-3");
	const newPasswordErrorMessage4 = $("#new-password-error-msg-4");
	const newPasswordErrorMessage5 = $("#new-password-error-msg-5");
	const newPasswordErrorMessage6 = $("#new-password-error-msg-6");

	const uppercaseCharacterRegex = /[A-Z]/;
	const lowercaseCharacterRegex = /[a-z]/;
	const digitRegex = /\d/;
	const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>;\/]/;

	const errors = $("#new-password ~ .error");
	errors.css("display", "none");

	if (!newPassword) {
		newPasswordErrorMessage1.css("display", "block");

		return false;
	} else if (newPassword.length < 8) {
		newPasswordErrorMessage2.css("display", "block");

		return false;
	} else if (!uppercaseCharacterRegex.test(newPassword)) {
		newPasswordErrorMessage3.css("display", "block");

		return false;
	} else if (!lowercaseCharacterRegex.test(newPassword)) {
		newPasswordErrorMessage4.css("display", "block");

		return false;
	} else if (!digitRegex.test(newPassword)) {
		newPasswordErrorMessage5.css("display", "block");

		return false;
	} else if (!specialCharacterRegex.test(newPassword)) {
		newPasswordErrorMessage6.css("display", "block");

		return false;
	} else {
		if (confirmPassword.length) isValidConfirmPassword(confirmPassword, newPassword);

		return true;
	}
}

function isValidConfirmPassword(confirmPassword, newPassword) {
	const confirmPasswordErrorMessage1 = $("#confirm-password-error-msg-1");
	const confirmPasswordErrorMessage2 = $("#confirm-password-error-msg-2");

	const errors = $("#confirm-password ~ .error");
	errors.css("display", "none");

	if (!confirmPassword) {
		confirmPasswordErrorMessage1.css("display", "block");

		return false;
	} else if (newPassword != confirmPassword) {
		confirmPasswordErrorMessage2.css("display", "block");

		return false;
	} else return true;
}