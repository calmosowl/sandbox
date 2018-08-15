const getTime = () => {
	let now = new Date();
	let h = now.getHours();
	let m = now.getMinutes();
	return '${h}:${m}';
}

