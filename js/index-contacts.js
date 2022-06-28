const countDown = () => {
  const countDate = new Date ('July 24, 2022 21:00:00').getTime()
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".contacts__party_day").innerText = textDay;
  document.querySelector(".contacts__party_hour").innerText = textHour;
  document.querySelector(".contacts__party_minute").innerText = textMinute;
  document.querySelector(".contacts__party_second").innerText = textSecond;

}
setInterval(countDown, 1000);
