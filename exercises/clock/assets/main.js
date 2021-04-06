$(function() {
	let second = document.getElementsByClassName("second");
	let minute = document.getElementsByClassName("minute");
	let hour = document.getElementsByClassName("hour");

	function update() {
		let date = new Date();

		let setSecond = 40 + date.getSeconds();
		second[0].style.width = setSecond + "%";
		second[0].style.height = setSecond + "%";

		let setMinute = 40 + date.getMinutes();
		minute[0].style.width = setMinute + "%";
		minute[0].style.height = setMinute + "%";

		let setHour = 400 + (12 * date.getHours());
		hour[0].style.width = setHour + "px";
		hour[0].style.height = setHour + "px";

		setTimeout(update, 1000);
	}
	update();
})