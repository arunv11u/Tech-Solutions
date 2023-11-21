$(function () {
	const login = $("#login-btn");

	login.click(() => {
		console.log("Login form submitted :", $("#username").val(), $("#password").val());
	});
});