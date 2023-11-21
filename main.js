
$(function () {

	// Preload banner images
	const bannerImages = [
		"./assets/banner-1.jpg", // Image Source: https://www.freepik.com/free-photo/asian-businessman-leather-wristwatch-holding-hands-with-partners-smiling-indoor-portrait-team-office-workers-having-fun-before-big-project_10484555.htm
		"./assets/banner-2.jpeg", // Image Source: https://unsplash.com/photos/business-people-working-in-office-and-brainstorming-BCeRwWOvenM
		"./assets/banner-3.jpg" // Image Source: https://unsplash.com/photos/two-person-standing-on-gray-tile-paving-TamMbr4okv4
	];
	bannerImages.forEach((img) => {
		preloadImages(img);
	});

	// Load and start the slider
	$('.bxslider').bxSlider({
		pageType: "short",
		auto: true,
		pause: 2000,
		mode: "fade"
	});

	$(".menu a.nav-link").each((anchorIndex, anchor) => {
		$(anchor).click(function (e) {
			e.preventDefault();

			$(".menu a").each((linkIndex, link) => {
				$(link).removeClass("active");
			});

			$(this).addClass("active");

			const targetId = $(this).attr("href").substring(1);
			const targetSection = $(`#${targetId}`);

			if (targetSection) {
				window.scrollTo({
					top: targetSection.offset().top,
					behavior: 'smooth',
				});
			}
		});
	});

	const modal = $("#myModal");

	const btn = $("#myBtn");

	const close = $(".close");

	if (btn) {
		btn.click(() => {
			modal.css("display", "block");
		})
	}

	if (close) {
		close.click(() => {
			modal.css("display", "none");
		})
	}
})

function closeMobileNav() {
	const modal = $("#myModal");

	modal.css("display", "none");
}

function preloadImages(src) {
	const image = new Image();

	image.src = src;
}

function resetForm(formId) {
	$(formId).trigger("reset");
}

function showPassword(
	password,
	passwordEyeOpen,
	passwordEyeClose
) {
	password.attr("type", "text");

	passwordEyeOpen.css("display", "inline");
	passwordEyeClose.css("display", "none");
}

function hidePassword(
	password,
	passwordEyeOpen,
	passwordEyeClose
) {
	console.log("hidePassword :: called :");
	password.attr("type", "password");

	passwordEyeOpen.css("display", "none");
	passwordEyeClose.css("display", "inline");
}