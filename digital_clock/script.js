setInterval(() => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // Calculate AM/PM
  const am = h >= 12 ? "PM" : "AM";

  // Format hours, minutes, and seconds
  const formattedHours = h % 12 || 12; // Convert 24-hour format to 12-hour format
  const displayHours = formattedHours.toString().padStart(2, "0");
  const displayMinutes = m.toString().padStart(2, "0");
  const displaySeconds = s.toString().padStart(2, "0");

  // Update clock labels
  document.getElementById("hours").innerHTML = `
    ${displayHours}<br/><span style="margin-top: 10px; display: inline-block;">Hours</span>`;
  document.getElementById("minutes").innerHTML = `
    ${displayMinutes}<br/><span style="margin-top: 10px; display: inline-block;">Minutes</span>`;
  document.getElementById("seconds").innerHTML = `
    ${displaySeconds}<br/><span style="margin-top: 10px; display: inline-block;">Seconds</span>`;
  document.getElementById("ampm").textContent = am;

  // Update circular progress
  document.getElementById("hh").style.strokeDashoffset =
    440 - (440 * formattedHours) / 12;
  document.getElementById("mm").style.strokeDashoffset = 440 - (440 * m) / 60;
  document.getElementById("ss").style.strokeDashoffset = 440 - (440 * s) / 60;

  // Update rotation of clock dots
  document.querySelector(".hr__dot").style.transform = `rotate(${
    formattedHours * 30
  }deg)`;
  document.querySelector(".min__dot").style.transform = `rotate(${m * 6}deg)`;
  document.querySelector(".sec__dot").style.transform = `rotate(${s * 6}deg)`;
}, 1000);
