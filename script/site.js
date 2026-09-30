// Shared behaviour for every page: phone menu, active nav tab, hidden email links.

// Mark the current page in the top bar and the phone menu.
// Pages set it with <body data-page="projects|reel|about|home">.
function siteNav() {
	var page = document.body.getAttribute("data-page") || "home";
	var labels = { projects: "Projects", reel: "Demo Reel", about: "About" };
	$('[data-nav="' + page + '"]').addClass("active").attr("aria-current", "page");
	$(".bar-here").text(labels[page] || "");
}

function openMenu() {
	$("#siteMenu").addClass("open").attr("aria-hidden", "false");
	$("body").addClass("menu-open");
	$("#siteMenu .menu-close").trigger("focus");
}

function closeMenu() {
	$("#siteMenu").removeClass("open").attr("aria-hidden", "true");
	$("body").removeClass("menu-open");
}

$(document)
	.off(".site")
	.on("click.site", ".js-menu-open", function (e) { e.preventDefault(); openMenu(); })
	.on("click.site", ".js-menu-close", function (e) { e.preventDefault(); closeMenu(); })
	.on("click.site", "#siteMenu .menu-nav a", function () { closeMenu(); })
	.on("keydown.site", function (e) { if (e.key === "Escape") closeMenu(); })
	// The email address is stored reversed and only assembled on click,
	// so it never appears as readable text for spam scrapers.
	.on("click.site", ".js-email", function (e) {
		e.preventDefault();
		var addr = String($(this).data("e")).split("").reverse().join("");
		window.location.href = "mailto:" + addr;
	});

// ---------- Lightbox: one gallery per project + a bottom bar with big buttons ----------
$(function () {
	if (window.lightbox && lightbox.option) {
		lightbox.option({ wrapAround: true, albumLabel: "%1 / %2", fadeDuration: 200, imageFadeDuration: 200, resizeDuration: 300 });
	}
});

function lightboxBar(group) {
	var $data = $("#lightbox .lb-dataContainer");
	if (!$data.length) return false;
	if (!$data.find(".lb-bar").length) {
		$data.append(
			'<div class="lb-bar">' +
				'<button type="button" class="lb-bar-btn lb-bar-prev" aria-label="Previous image">&#8249; Prev</button>' +
				'<button type="button" class="lb-bar-btn lb-bar-close" aria-label="Close gallery">Close</button>' +
				'<button type="button" class="lb-bar-btn lb-bar-next" aria-label="Next image">Next &#8250;</button>' +
			'</div>');
	}
	var many = $('a[data-lightbox="' + group + '"]').length > 1;
	$data.find(".lb-bar-prev, .lb-bar-next").toggle(many);
	return true;
}

// Lightbox stops the click from bubbling, so listen in the capture phase.
document.addEventListener("click", function (e) {
	var link = e.target.closest ? e.target.closest("a[data-lightbox]") : null;
	if (!link) return;
	var group = link.getAttribute("data-lightbox");
	// Lightbox builds its markup on first use, so retry briefly until it exists
	var tries = 0;
	(function add() { if (!lightboxBar(group) && tries++ < 20) setTimeout(add, 50); })();
}, true);

$(document)
	.on("click.site", ".lb-bar-prev", function () { $("#lightbox .lb-prev").trigger("click"); })
	.on("click.site", ".lb-bar-next", function () { $("#lightbox .lb-next").trigger("click"); })
	.on("click.site", ".lb-bar-close", function () { $("#lightbox .lb-close").trigger("click"); });

// Project popup: "Watch trailer" in the banner scrolls down to the videos
$(document).on("click.site", ".pp-watch", function (e) {
	e.preventDefault();
	var v = $(this).closest(".pp").find(".pp-videos")[0];
	if (v) v.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ---------- Experience and Skills (content lives in data/experience.js and data/skills.js) ----------
function xpText(s) {
	return String(s || "")
		.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
		.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}
function xpEsc(s) {
	return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderExperience() {
	var jobs = window.EXPERIENCE || [];
	document.querySelectorAll("[data-experience]").forEach(function (box) {
		var full = box.getAttribute("data-experience") === "full";
		box.innerHTML = jobs.map(function (r) {
			var body = full
				? '<ul class="xp-bullets">' + (r.bullets || []).map(function (b) { return "<li>" + xpText(b) + "</li>"; }).join("") + "</ul>"
				: '<p class="xp-desc">' + xpText(r.description) + "</p>";
			return '<li class="xp">' + (r.logo ? '<img class="xp-logo" src="' + xpEsc(r.logo) + '" alt="' + xpEsc(r.company) + ' logo" loading="lazy">' : "") +
				'<div class="xp-body"><div class="xp-top"><div class="xp-head"><strong>' + xpEsc(r.title) + '</strong><span class="xp-co">' + xpEsc(r.company) + "</span></div>" +
				'<div class="xp-when"><span>' + xpEsc(r.period) + '</span><span class="xp-loc">' + xpEsc(r.location) + "</span></div></div>" + body + "</div></li>";
		}).join("");
	});
	var panels = window.SKILLS || [];
	document.querySelectorAll("[data-skills]").forEach(function (box) {
		box.innerHTML = panels.map(function (groups) {
			return '<div class="skill-panel">' + groups.map(function (g) {
				return '<div class="skill-group"><h3>' + xpEsc(g.name) + "</h3><ul>" + (g.items || []).map(function (x) { return "<li>" + xpEsc(x) + "</li>"; }).join("") + "</ul></div>";
			}).join("") + "</div>";
		}).join("");
	});
}

document.addEventListener("DOMContentLoaded", renderExperience);

// ---------- Artwork grid (content lives in data/artwork.js) ----------
function renderArtwork() {
	var art = window.ARTWORK || [];
	document.querySelectorAll("[data-artwork]").forEach(function (box) {
		box.innerHTML = art.map(function (a) {
			return '<a href="' + xpEsc(a.link) + '" target="_blank" rel="noopener" title="' + xpEsc(a.title) + '"><img src="' + xpEsc(a.image) +
				'" loading="lazy" alt="' + xpEsc(a.title) + '"></a>';
		}).join("");
	});
}

document.addEventListener("DOMContentLoaded", renderArtwork);

// ---------- About Me intro and Education (content lives in data/about.js) ----------
function renderAbout() {
	var a = window.ABOUT;
	if (!a) return;
	document.querySelectorAll("[data-about]").forEach(function (box) {
		var part = box.getAttribute("data-about");
		if (part === "heading") box.textContent = a.heading || "About Me";
		if (part === "paragraphs") box.innerHTML = (a.paragraphs || []).map(function (p) { return "<p>" + xpText(p) + "</p>"; }).join("");
		if (part === "portrait") {
			var pt = a.portrait || {};
			box.style.display = pt.image ? "" : "none";
			box.innerHTML = pt.image ? '<img src="' + xpEsc(pt.image) + '" alt="' + xpEsc(pt.alt || "") + '">' + (pt.credit ? "<figcaption>" + xpText(pt.credit) + "</figcaption>" : "") : "";
		}
		if (part === "education") box.innerHTML = (a.education || []).map(function (e) {
			return '<div class="edu-row"><div><strong>' + xpEsc(e.school) + "</strong><span>" + xpEsc(e.degree) + "</span></div>" +
				(e.honor ? '<span class="edu-tag">' + xpEsc(e.honor) + "</span>" : "") + "</div>";
		}).join("");
	});
}

document.addEventListener("DOMContentLoaded", renderAbout);
