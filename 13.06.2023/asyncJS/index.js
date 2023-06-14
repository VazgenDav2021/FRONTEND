// setTimeout - используется для выполнения определенного кода через заданное время
// setTimeout(callback, timeout);
// 1ым аргументом у нас идет функция которая должна выполнится
// 2ым аргументом у нас идет количество милисекоунд (задержка)

// function hellWolrd() {
//   console.log("Hello Wolrd");
// }
// // вызови фунцкию hellWolrd через 1000 милисикунд. Фунцкию не вызываем, то есть не ставим скобки
// setTimeout(hellWolrd, 5000);

// setTimeout(() => {
//   console.log("Hello Wolrd");
// }, 2000);

/////////////////////////////////////////////////////////////////////////////////////////////
// SetInteval -фунцкция которая используется для выполнения определелнного кода с заданным интервалом времени
// SetInteval(callback, timeout);
// function hellWolrd() {
//   console.log("Hello Wolrd");
// }
// // вызывает на верху синицализированную фунцкию hellWolrd каждые 1000 милисекунд
// setInterval(hellWolrd, 1000);

// setInterval(() => {
//   console.log("Hello Wolrd");
// }, 1000);

/////////////////////////////////////////////////////////////////////////////////////////////
// cleartInterval - данная фунцкия используется для остановки выполнения кода,
// которые были установлены с помощью setInterval
// cleartInterval(setInterval) - принимает один аргумент, который является идентификатором интервала,
//  который мы хотим остановить
// // здесь пишем функцию кототая должна выполнятся
// function hellWolrd() {
//   console.log("Hello Wolrd");
// }

// // здесь мы иницализирем интервал и говорим что он должен срабатыват каждую секунду
// let intervalID = setInterval(hellWolrd, 1000);
// //intervalID является идентификатром   setInterval(hellWolrd, 1000);
// // через 5000 милисикунд вызови колбэк (() => { clearInterval(intervalID); },).
// setInterval(() => {
//   clearInterval(intervalID);
// }, 5000);

// 1. Написать функцию которая рандомно генерирует круглы элементы рандомнго цвета и размера
// и рандомно их показывает на экране

const colorGenerator = () => {
  return Math.floor(Math.random() * 256);
};

const generateCircles = () => {
  const div = document.createElement("div");

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  const widthHeight = Math.floor(Math.random() * 401);

  const BORDER_RADIUS = "50%";

  const backgroundColor = `rgb(${colorGenerator()}, ${colorGenerator()}, ${colorGenerator()})`;

  div.style.position = "absolute";
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.style.width = `${widthHeight}px`;
  div.style.height = `${widthHeight}px`;
  div.style.borderRadius = BORDER_RADIUS;
  div.style.backgroundColor = backgroundColor;
  div.style.opacity = "0";

  document.body.appendChild(div);

  div.animate(
    [
      { opacity: 0, tranform: "scale(0)" },
      { opacity: 1, tranform: "scale(1)" },
    ],
    {
      duration: 1000,
      fill: "forwards",
    }
  );

  const durationOfAnimation = Math.random() * 2000 + 1000;

  setTimeout(() => {
    div.animate(
      [
        { opacity: 1, tranform: "scale(1)" },
        { opacity: 0, tranform: "scale(0)" },
      ],
      {
        duration: 1000,
        fill: "forwards",
      }
    ).onfinish = () => {
      document.body.removeChild(div);
    };
  }, durationOfAnimation);
};

const startAnimation = () => {
  const intervalId = setInterval(generateCircles, 500);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 10000);
};

startAnimation();

// 1. однововаясь на предоставленные ресурсы понять и прокоментировать каждую строчку написанного кода
// 2. Написать функцию котора при входе на страницы через 4 секунды отркывает модальное окно
// 3. В модальном окне пишется Возраст пользователья
// 4. Через 4 секуныд отабрзить на странице через тег <p>Пользовталелью ${age} лет</p> возраст пользователя.
