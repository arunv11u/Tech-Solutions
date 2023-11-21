
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

		const _isValidUsername = isValidUsername(username.val());
		const _isValidPassword = isValidPassword(password.val());

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
		isValidUsername(username.val());
	});

	password.on("focusout input", () => {
		isValidPassword(password.val());
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

	if (!username) {
		usernameErrorMessage.css("display", "block");
		return false;
	} else usernameErrorMessage.css("display", "none");

	return true;
}

function isValidPassword(password) {
	const passwordErrorMessage = $("#password-error-msg-1");

	if (!password) {
		passwordErrorMessage.css("display", "block");
		return false;
	} else passwordErrorMessage.css("display", "none");

	return true;
}