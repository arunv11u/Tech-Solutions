$(function () {
	const login = $("#login-btn");

	login.click(() => {
		const validCredentials = {
			username: "arun",
			password: "Arun@123"
		};
		const username = $("#username").val();
		const password = $("#password").val();

		if(username != validCredentials.username || password != validCredentials.password)
			return alert("Invalid Credentials");

		return alert("Successful login");
	});
});