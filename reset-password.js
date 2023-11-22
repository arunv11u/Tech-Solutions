
$(function () {
	const resetPassword = $("#reset-password-btn");
	const username = $("#username");
	const otp = $("#otp");
	const newPassword = $("#new-password");
	const confirmPassword = $("#confirm-password");
	const passwordEyeOpen = $("#password-eye-open");
	const passwordEyeClose = $("#password-eye-close");

	const validOtp = "1234";

	username.focus();

	resetPassword.click(() => {
		const _isValidUsername = isValidUsername(username);
		const _isValidOtp = isValidOtp(otp);
		const _isValidNewPassword = isValidNewPassword(newPassword, confirmPassword);
		const _isValidConfirmPassword = isValidConfirmPassword(confirmPassword, newPassword);

		if (!_isValidUsername || !_isValidOtp || !_isValidNewPassword || !_isValidConfirmPassword) return;

		if (otp.val() != validOtp) {
			otp.val("");
			otp.focus();

			return alert("Invalid OTP");
		}

		alert("Password updated successfully, please login to continue");

		$(location).attr("href", "./sign-in.html")
	});

	username.on("focusout input", () => {
		isValidUsername(username);
	});

	otp.on("focusout input", () => {
		isValidOtp(otp);
	});

	newPassword.on("focusout input", () => {
		isValidNewPassword(newPassword, confirmPassword);
	});

	confirmPassword.on("focusout input", () => {
		isValidConfirmPassword(confirmPassword, newPassword);
	});

	passwordEyeClose.click((event) => {
		event.preventDefault();

		showPassword(confirmPassword, passwordEyeOpen, passwordEyeClose);
	});

	passwordEyeOpen.click((event) => {
		event.preventDefault();

		hidePassword(confirmPassword, passwordEyeOpen, passwordEyeClose);
	});
});

function isValidUsername(username) {
	const usernameErrorMessage = $("#username-error-msg-1");
	const _username = username.val();

	if (!_username) {
		usernameErrorMessage.css("display", "block");
		highlightRequiredField(username);

		return false;
	} else usernameErrorMessage.css("display", "none");

	resetRequiredField(username);

	return true;
}

function isValidOtp(otp) {
	const otpErrorMessage1 = $("#otp-error-msg-1");
	const otpErrorMessage2 = $("#otp-error-msg-2");
	const _otp = otp.val();

	const errors = $("#otp ~ .error");
	errors.css("display", "none");

	if (!_otp) {
		otpErrorMessage1.css("display", "block");
		highlightRequiredField(otp);

		return false;
	} else if (_otp.length < 4) {
		otpErrorMessage2.css("display", "block");

		return false;
	} else {
		resetRequiredField(otp);

		return true;
	} 
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
	
	const _newPassword = newPassword.val();

	const errors = $("#new-password ~ .error");
	errors.css("display", "none");

	if (!_newPassword) {
		newPasswordErrorMessage1.css("display", "block");
		highlightRequiredField(newPassword);

		return false;
	} else if (_newPassword.length < 8) {
		newPasswordErrorMessage2.css("display", "block");

		return false;
	} else if (!uppercaseCharacterRegex.test(_newPassword)) {
		newPasswordErrorMessage3.css("display", "block");

		return false;
	} else if (!lowercaseCharacterRegex.test(_newPassword)) {
		newPasswordErrorMessage4.css("display", "block");

		return false;
	} else if (!digitRegex.test(_newPassword)) {
		newPasswordErrorMessage5.css("display", "block");

		return false;
	} else if (!specialCharacterRegex.test(_newPassword)) {
		newPasswordErrorMessage6.css("display", "block");

		return false;
	} else {
		resetRequiredField(newPassword);

		if (confirmPassword.length) isValidConfirmPassword(confirmPassword, newPassword);

		return true;
	}
}

function isValidConfirmPassword(confirmPassword, newPassword) {
	const confirmPasswordErrorMessage1 = $("#confirm-password-error-msg-1");
	const confirmPasswordErrorMessage2 = $("#confirm-password-error-msg-2");

	const _confirmPassword = confirmPassword.val();
	const _newPassword = newPassword.val();

	const errors = $("#confirm-password ~ .error");
	errors.css("display", "none");

	if (!_confirmPassword) {
		confirmPasswordErrorMessage1.css("display", "block");
		highlightRequiredField(confirmPassword);

		return false;
	} else if (_newPassword != _confirmPassword) {
		confirmPasswordErrorMessage2.css("display", "block");

		return false;
	} else {
		resetRequiredField(confirmPassword);

		return true;
	} 
}