const imgPath = "../res/img/";

const logo = {
	"default": "logo.svg",
	"pride": "logo_rainbow.svg"
};

const pageLinks = [
	['index.html', 'HOME'],
	['index.html', 'WORKS'],
	['index.html', 'MEMBERS'],
	['index.html', 'CONTACT']
];

function setAnchors(elementId, indexPage = false) {
	let source = ["../", ""];
	if (indexPage) source = ["", "html/"];
	let ph = document.getElementById(elementId);
	let anchor = (link, text) => {
		let indexed = Number(link === "index.html");
		let pageLink = source[indexed] + link;
		return `<a href="${pageLink}" class="anchor-redirect">${text}</a>`
	}
	pageLinks.forEach(el => {
		ph.innerHTML += anchor(el[0], el[1]) + "\n|\n";
	});
	ph.innerHTML += "<links end>"
	ph.innerHTML = ph.innerHTML.replace("\n|\n<links end>", "");
}

function setup(anchors) {
	const date = new Date();
	let type = "default";
	type = date.getMonth() === 5 ? "pride" : type;
	try {
		let pl = document.getElementById("page-logo");
		pl.setAttribute("href", pageLinks[0][0])
		pl.innerHTML = (`<img src="${imgPath + logo[type]}" alt="Splash Games" class="logo-icon-big">`);
	} catch (error) {}
	try {
		let pf = document.getElementById("page-favicon");
		pf.setAttribute("href", imgPath + logo[type]);
	} catch (error) {}
	if (anchors[0]) anchors.forEach(el => setAnchors(el));
}
