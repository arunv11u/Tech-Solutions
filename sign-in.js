
// Student Name: Arun Varadharajalu
// Student Number: 8896434

$(function () {
	const login = $("#login-btn");
	const username = $("#username");
	const password = $("#password");
	const passwordEyeOpen = $("#password-eye-open");
	const passwordEyeClose = $("#password-eye-close");

	username.focus();

	login.click(() => {
		const validCredentials = {
			username: "arun",
			password: "Arun@123"
		};

		const _isValidUsername = isValidUsername(username);
		const _isValidPassword = isValidPassword(password);

		if (!_isValidUsername || !_isValidPassword) return;

		if (username.val() != validCredentials.username || password.val() != validCredentials.password) {
			resetForm("#signin-form");
			hidePassword(password, passwordEyeOpen, passwordEyeClose);

			return setTimeout(() => alert("Invalid Credentials"));
		}

		resetForm("#signin-form");
		hidePassword(password, passwordEyeOpen, passwordEyeClose);

		return alert("Successful login");
	});

	username.on("focusout input", () => {
		isValidUsername(username);
	});

	password.on("focusout input", () => {
		isValidPassword(password);
	});

	passwordEyeClose.click((event) => {
		event.preventDefault();

		showPassword(password, passwordEyeOpen, passwordEyeClose);
	});

	passwordEyeOpen.click((event) => {
		event.preventDefault();

		hidePassword(password, passwordEyeOpen, passwordEyeClose);
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

function isValidPassword(password) {
	const passwordErrorMessage = $("#password-error-msg-1");
	const _password = password.val();

	if (!_password) {
		passwordErrorMessage.css("display", "block");
		highlightRequiredField(password);

		return false;
	} else passwordErrorMessage.css("display", "none");

	resetRequiredField(password);

	return true;
}