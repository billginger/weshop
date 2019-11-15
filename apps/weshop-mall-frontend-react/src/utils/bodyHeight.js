// Solve Android keyboard cause the bottom elements move up

const os = window.navigator.userAgent.toLocaleLowerCase();

if (/android/.test(os)) {
	const minHeight = document.body.clientHeight - 100;
	document.body.style.minHeight = `${minHeight}px`;
}
