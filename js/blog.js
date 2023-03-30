window.onscroll = function() {
			var circle = document.getElementById("myCircle");
			if (window.pageYOffset > 100) {
				circle.classList.add("convex");
			} else {
				circle.classList.remove("convex");
			}
		}