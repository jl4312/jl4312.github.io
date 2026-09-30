// Project popups. The content lives in data/projects.js;
// this file only turns that content into the popup and opens / closes it.

var modal = document.getElementById("myModal");
var projectName = document.getElementById("projectName");
var tmp;

function setup() {
	projectName = document.getElementById("projectName");
	modal = document.getElementById("myModal");
}

function projectList() { return window.PROJECT_DATA || []; }

function findProject(id) {
	var list = projectList();
	for (var i = 0; i < list.length; i++) { if (list[i].id === id) return list[i]; }
	return null;
}

// ---------- Building the popups from data/projects.js ----------

function esc(s) {
	return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// **bold** and [text](url); anything else is used as written (HTML allowed)
function richText(s) {
	return String(s || "")
		.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
		.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function videoHtml(v) {
	var title = esc(v.title || "Video");
	var frame = function (src, allow) {
		return '<div class="pp-embed"><iframe referrerpolicy="strict-origin-when-cross-origin" data-src="' + esc(src) + '" title="' + title +
			'" frameborder="0" allow="' + allow + '" allowfullscreen></iframe></div>';
	};
	var ytAllow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
	if (v.youtube) return frame("https://www.youtube.com/embed/" + v.youtube + "?rel=0" + (v.muted ? "&mute=1" : ""), ytAllow);
	if (v.sketchfab) return frame("https://sketchfab.com/models/" + v.sketchfab + "/embed?autostart=1&preload=1", "autoplay; fullscreen; xr-spatial-tracking");
	if (v.clip) return '<video class="pp-clip" muted loop playsinline preload="none"' + (v.poster ? ' poster="' + esc(v.poster) + '"' : "") +
		' aria-label="' + title + '"><source src="' + esc(v.clip) + '" type="video/mp4"></video>';
	if (v.embed) return frame(v.embed, ytAllow);
	return "";
}

function projectHtml(p) {
	var group = "project" + p.id;
	var tags = [p.role, p.dates, p.team, p.platform].filter(Boolean).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
	var videos = p.videos || [];
	var watch = videos.length ? '<a class="pp-watch" href="#">&#9654; Watch trailer</a>' : "";

	var left = "<h3>Summary</h3>" + (p.summary || []).map(function (s) { return "<p>" + richText(s) + "</p>"; }).join("");
	if (p.backstory) left += '<h3>Backstory</h3><p class="pp-story">' + richText(p.backstory) + "</p>";
	var right = "<h3>Responsibilities</h3><ul>" + (p.responsibilities || []).map(function (r) { return "<li>" + richText(r) + "</li>"; }).join("") + "</ul>";

	var icons = window.SOFTWARE_ICONS || {};
	var tools = (p.software || []).length ? '<h3>Software used</h3><ul class="pp-tools">' + p.software.map(function (t) {
		return "<li>" + (icons[t] ? '<img src="' + esc(icons[t]) + '" alt="" width="40" height="40">' : "") + "<span>" + esc(t) + "</span></li>";
	}).join("") + "</ul>" : "";
	var awards = (p.awards || []).length ? '<h3>Awards</h3><div class="pp-awards">' + p.awards.map(function (a) {
		var img = '<img loading="lazy" src="' + esc(a.image) + '" alt="' + esc(a.alt || "Award") + '">';
		return a.link ? '<a href="' + esc(a.link) + '" target="_blank" rel="noopener">' + img + "</a>" : img;
	}).join("") + "</div>" : "";

	var vidSection = videos.length ? '<section class="pp-videos' + (videos.length === 1 ? " pp-one" : "") + '"><h3>Videos</h3><div class="pp-vgrid">' +
		videos.map(videoHtml).join("") + "</div></section>" : "";

	var gallery = p.gallery || [];
	var galSection = gallery.length ? '<section class="pp-gallery"><div class="pp-ghead"><h3>Gallery</h3><span class="pp-note">' + gallery.length +
		' images &middot; click to enlarge</span></div><div class="pp-gal">' + gallery.map(function (g) {
			if (typeof g === "string") g = { image: g };
			return '<a href="' + esc(g.full || g.image) + '" data-lightbox="' + group + '" data-title="' + esc(g.caption || "") + '"><img loading="lazy" src="' +
				esc(g.image) + '" alt="' + esc(g.caption || "") + '"></a>';
		}).join("") + "</div></section>" : "";

	return '<div id="' + p.id + '" class="modal-body pp" style="display:none">' +
		'<div class="pp-hero">' + (p.banner ? '<img src="' + esc(p.banner) + '" alt="">' : "") +
		'<div class="pp-hero-text"><h2 class="pp-title">' + esc(p.title) + '</h2><div class="pp-tags">' + tags + watch + "</div></div></div>" +
		'<div class="pp-main">' +
		'<div class="pp-cols"><div class="pp-text">' + left + '</div><div class="pp-text">' + right + "</div></div>" +
		'<div class="pp-cols pp-meta"><div>' + tools + "</div><div>" + awards + "</div></div>" +
		vidSection + galSection +
		"</div></div>";
}

function buildProjectPopups() {
	var box = document.getElementById("projectPopups");
	if (!box) return;
	box.innerHTML = projectList().map(projectHtml).join("");
}

// ---------- Previous / Next bar ----------

function renderMore(current) {
	var box = document.getElementById("moreProjects");
	var list = projectList();
	if (!box || !list.length) return;
	var i = 0;
	for (var k = 0; k < list.length; k++) { if (list[k].id === current) i = k; }
	var prev = list[(i + list.length - 1) % list.length];
	var next = list[(i + 1) % list.length];
	box.innerHTML =
		'<a class="pnav pnav-prev" href="#" onclick="test(' + prev.id + '); return false;"><span>&larr; Previous</span><strong>' + esc(prev.title) + '</strong></a>' +
		'<a class="pnav-all" href="projects.html">All projects</a>' +
		'<a class="pnav pnav-next" href="#" onclick="test(' + next.id + '); return false;"><span>Next &rarr;</span><strong>' + esc(next.title) + '</strong></a>';
}

// ---------- Open / close ----------

function test(parameter) {
	reset();
	modal = document.getElementById("myModal");
	projectName = document.getElementById("projectName");
	var p = findProject(parameter);
	tmp = document.getElementById(parameter);
	if (!modal || !p || !tmp) return;
	modal.style.display = "block";
	// Only the popup scrolls while it is open; the page behind stays put
	document.documentElement.classList.add("popup-open");
	document.body.classList.add("popup-open");
	if (projectName) projectName.textContent = p.title;
	tmp.style.display = "block";
	// Load this project's embedded videos / 3D viewers only now that it is open
	tmp.querySelectorAll("iframe[data-src]").forEach(function (f) { if (f.getAttribute("src") !== f.getAttribute("data-src")) f.setAttribute("src", f.getAttribute("data-src")); });
	// Start this project's gameplay clips (they only download once the popup is opened)
	tmp.querySelectorAll("video").forEach(function (v) { v.muted = true; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); });
	renderMore(parameter);
	modal.scrollTop = 0;
}

function close() {
	modal = document.getElementById("myModal");
	if (modal) modal.style.display = "none";
	reset();
}

// Clicking the dark area outside the popup closes it
window.onclick = function (event) {
	if (modal && event.target == modal) close();
};

function reset() {
	document.documentElement.classList.remove("popup-open");
	document.body.classList.remove("popup-open");
	projectList().forEach(function (p) {
		var el = document.getElementById(p.id);
		if (!el) return;
		el.style.display = "none";
		el.querySelectorAll("video").forEach(function (v) { v.pause(); });
		el.querySelectorAll("iframe[data-src]").forEach(function (f) { if (f.getAttribute("src") && f.getAttribute("src") !== "about:blank") f.setAttribute("src", "about:blank"); });
	});
}

// Escape closes the popup (unless an image is open in the gallery viewer)
document.addEventListener("keydown", function (e) {
	var m = document.getElementById("myModal");
	var lb = document.getElementById("lightbox");
	if (e.key !== "Escape" || !m || m.style.display !== "block") return;
	if (lb && lb.style.display !== "none" && getComputedStyle(lb).display !== "none") return;
	close();
});

// ---------- Project lists on Home, Projects and Demo Reel ----------
// Any element with data-projects="home | jump | articles | rows | cards"
// is filled from data/projects.js when the page loads.

function projectSlug(p) {
	return p.slug || String(p.title || "project" + p.id).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

var CHEVRON = '<svg viewBox="0 0 24 24" fill="none" stroke="#3ad6e6" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

var LIST_TEMPLATES = {
	home: function (p) {
		return '<a class="proj-row" href="projects.html#' + projectSlug(p) + '" onclick="test(' + p.id + '); return false;">' +
			'<img src="' + esc(p.thumbnail) + '" alt="' + esc(p.title) + '">' +
			'<span class="proj-text"><strong>' + esc(p.title) + '</strong><span class="proj-role">' + esc(p.shortRole) + '</span>' +
			'<span class="proj-meta">' + esc(p.years) + '</span><span class="proj-desc">' + richText(p.description || p.homeDescription) + "</span></span></a>";
	},
	jump: function (p) {
		return '<a href="#' + projectSlug(p) + '"><img src="' + esc(p.thumbnail) + '" alt="">' + esc(p.title) + "</a>";
	},
	articles: function (p) {
		var facts = [["Role", p.role], ["Team", p.team], ["Platform", p.platform], ["Dates", p.dates]]
			.map(function (f) { return "<div><dt>" + f[0] + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }).join("");
		var did = (p.roleDetails || p.whatIDid || []).map(function (d) { return "<li>" + richText(d) + "</li>"; }).join("");
		var chips = (p.software || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
		var ext = p.link ? '<a class="btn-line" href="' + esc(p.link.url) + '" target="_blank" rel="noopener">' + esc(p.link.label) + " &#8599;</a>" : "";
		return '<article class="pj" id="' + projectSlug(p) + '">' +
			'<img class="pj-img" src="' + esc(p.thumbnail) + '" alt="' + esc(p.title) + '" onclick="test(' + p.id + ')">' +
			'<div class="pj-body"><h2>' + esc(p.title) + '</h2><dl class="pj-facts">' + facts + "</dl>" +
			'<p class="pj-desc">' + richText(p.description) + "</p>" +
			(did ? '<div class="pj-did"><span class="pj-label">ROLE</span><ul>' + did + "</ul></div>" : "") +
			'<div class="pj-foot"><div class="chips">' + chips + '</div><div class="pj-btns"><button class="btn-accent" type="button" onclick="test(' + p.id + ')">See full project</button>' + ext + "</div></div>" +
			"</div></article>";
	},
	rows: function (p) {
		return '<a href="#' + projectSlug(p) + '" onclick="test(' + p.id + '); return false;"><img src="' + esc(p.thumbnail) + '" alt="">' +
			'<span class="proj-text"><strong>' + esc(p.title) + '</strong><span class="proj-role">' + esc(p.role) + '</span><span class="proj-meta">' + esc(p.years) + "</span></span>" + CHEVRON + "</a>";
	},
	cards: function (p) {
		return '<a class="card" href="projects.html#' + projectSlug(p) + '" onclick="test(' + p.id + '); return false;"><img src="' + esc(p.thumbnail) +
			'" alt="" loading="lazy"><strong>' + esc(p.title) + "</strong><span>" + esc(p.shortRole) + "</span></a>";
	}
};

function renderProjectLists() {
	document.querySelectorAll("[data-projects]").forEach(function (box) {
		var make = LIST_TEMPLATES[box.getAttribute("data-projects")];
		if (make) box.innerHTML = projectList().map(make).join("");
	});
	// The lists are built after the page loads, so jump to #project-name ourselves
	if (location.hash.length > 1) {
		var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
		if (target) target.scrollIntoView();
	}
}

document.addEventListener("DOMContentLoaded", renderProjectLists);
