
// Student Name: Arun Varadharajalu
// Student Number: 8896434

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

	// Highlight the selected link and scroll to the related content.
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

	// Show the navbar in mobile view if clicked.
	if (btn) {
		modal.css("left", "-415px");
		btn.click(() => {
			modal.css("display", "block").animate({ "left": "0px" }, 500);
		})
	}

	// Close the navbar in mobile view if close icon is clicked.
	if (close) {
		close.click(() => {
			modal.css("display", "none");
			modal.css("left", "-415px");
		})
	}

	const serviceCards = $(".service-card");
	serviceCards.each((index, serviceCard) => {
		$(serviceCard).hover(function () {
			$(this).addClass("service-card-hover");
		}, function () {
			$(this).removeClass("service-card-hover");
		});
	});

	const teams = $(".team-style");
	teams.each((index, team) => {
		$(team).hover(function () {
			$(this).addClass("team-style-hover");
		}, function () {
			$(this).removeClass("team-style-hover");
		});
	});
})

// Close the menubar when some link is selected from the menu.
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
	password.attr("type", "password");

	passwordEyeOpen.css("display", "none");
	passwordEyeClose.css("display", "inline");
}

function highlightRequiredField(textField) {
	textField.css("border", "2px solid red");
}

function resetRequiredField(textField) {
	textField.css("border", "revert");
}