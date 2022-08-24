const imgPath = "res/img/";

const logo = {
	"default": "logo.svg",
	"pride": "logo_rainbow.svg"
};

const pageLinks = [
	['index.html', 'HOME'],
	['works.html', 'WORKS'],
	['about.html', 'ABOUT'],
	['contact.html', 'CONTACT']
];

function setAnchors(elementId, indexPage = false) {
	let ph = document.getElementById(elementId);
	let anchor = (link, text) => {
		return `<a href="${link}" class="anchor-redirect">${text}</a>`
	}
	pageLinks.forEach(el => {
		ph.innerHTML += anchor(el[0], el[1]) + "\n|\n";
	});
	ph.innerHTML += "<links.end><br>"
	ph.innerHTML = ph.innerHTML.replace("\n|\n<links.end>", "");
}

function setup(anchors) {
	const date = new Date();
	let type = "default";
	type = date.getMonth() === 5 ? "pride" : type;
	try {
		let pl = document.getElementById("site-logo");
		pl.setAttribute("href", pageLinks[0][0])
		pl.innerHTML = (`<img src="${imgPath + logo[type]}" alt="Splash Games" class="logo-icon-big">`);
	} catch (error) {}
	try {
		let pf = document.getElementById("site-favicon");
		pf.setAttribute("href", imgPath + logo[type]);
	} catch (error) {}
	if (anchors[0]) anchors.forEach(el => setAnchors(el));
}

let MemberInfo = {
	begin: (title, name, imgpath = "", membermark = "") => {
		document.write(`
			<div class="member-info">
				<img src="${imgpath}" class="member-image">
				<div class="member-mark ${membermark}">
				</div>
				<h3>
					${title}
				</h3>
				<h1 id="${name.replace(" ", "-")}" class="member-title">
					${name}
				</h1>
		`);
	},

	description: (content) => {
		document.write(`
			<h4>
				${content}
			</h4>
		`);
	},

	end: () => {
		document.write(`
			</div><br>
		`);
	},
};
