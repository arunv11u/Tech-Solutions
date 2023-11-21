
$(function () {
	const resetPassword = $("#reset-password-btn");
	const username = $("#username");
	const otp = $("#otp");
	const newPassword = $("#new-password");
	const confirmPassword = $("#confirm-password");

	username.focus();

	resetPassword.click(() => {

		isValidUsername(username.val());
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