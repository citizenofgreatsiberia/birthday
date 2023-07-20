const wrapper = document.getElementById("wrapper");
const text = document.getElementById("open-me");
const compliment =
  "Доброе утро, любимая! Прости, что в этот момент я не рядом с тобой. Но! Я хочу загладить свою вину и поздравить тебя с этим прекрасным днём. Пусть все твои мечты и желания исполняются, а каждый новый день - приносит тебе только радость и тепло! Оставайся такой же нежной и красивой как сейчас и не вздумай грустить=) Я тебя очень люблю! С Днём Рождения!";
const popup = document.getElementById("popup");
const present = document.createElement("div");
const hatMan = document.getElementById("hat-man");
present.innerText = "Скорее жми сюда!=)";
present.classList.add("present");

const typeText = () => {
  let typed = new Typed("#typed", {
    stringsElement: "#invite",
    typeSpeed: 80,
    startDelay: 1000,
    backSpeed: 20,
    loop: false,
  });
};

const kickHat = () => {
  const text = document.getElementById("typed");
  const textTyping = document.getElementById("text-typing");
  const explain = document.getElementById("explain");
  if (text.textContent.includes("подслушивает")) {
    hatMan.classList.add("active");
    textTyping.remove();
    explain.classList.add("active");
  }
};

const shake = (elem, text) => {
  elem.classList.add("shaking");
  const timer = setTimeout(() => {
    elem.classList.remove("shaking");
    elem.classList.add("bang");
    text.classList.add("transparent");
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
  }, 800);
  const timer2 = setTimeout(() => {
    text.textContent = compliment;
    text.classList.remove("transparent");
    document.body.append(present);
  }, 1200);
};

present.addEventListener("click", () => {
  confetti();
  confetti();
  confetti();
  confetti();
  confetti();
  confetti();
  confetti();
  confetti();
  popup.classList.add("active");
  typeText();
});

wrapper.addEventListener("click", () => shake(wrapper, text));

hatMan.addEventListener("click", () => {
  kickHat();
});
