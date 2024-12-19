const countDown = () => {
  let countDownDate = new Date("Dec 13, 2024 00:00:00").getTime();
  let dateNow = new Date().getTime();
  let gap = countDownDate - dateNow;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;

  const textHour = Math.floor(gap / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".header__Banner__CountDown__hour")!.textContent =
    textHour.toString();
  document.querySelector(".header__Banner__CountDown__minute")!.textContent =
    textMinute.toString();
  document.querySelector(".header__Banner__CountDown__second")!.textContent =
    textSecond.toString();
};

export default countDown;
