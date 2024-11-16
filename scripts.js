const cardsJSON = `
[
  {
    "subject": "Общество",
    "date": "сегодня в 18:30",
    "img-src": "./assets/monument.png",
    "title": "Изготовленный Зурабом Церетели памятник Тихону Хренникову открыли в Ельце",
    "description": "Новая достопримечательность появилась в Ельце. Здесь открыли памятник композитору Тихону Хренникову. В этом году"
  },
  {
    "subject": "Спорт",
    "date": "сегодня в 18:30",
    "img-src": "./assets/runner.png",
    "title": "Липецк признан беговой столицей России 2023 года",
    "description": "Липецк признан беговой столицей России 2023 года по итогам полумарафона «Забег.рф». В Липецке было 4000 участников забега, которые показали лучший..."
  },

  {
    "subject": "Экономика",
    "date": "сегодня в 18:30",
    "img-src": "./assets/car.png",
    "title": "Электрокар EVOLUTE из Липецкой области признан электромобильным брендом № 1 в России",
    "description": "Электрокар под маркой EVOLUTE вновь подтвердил звание «Электромобиля № 1» в России.."
  },
  {
    "subject": "Общество",
    "date": "сегодня в 18:30",
    "img-src": "./assets/man.png",
    "title": "Игорь Артамонов посетил белгородцев в липецком пункте временного размещения",
    "description": "Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас..."
  }
]
`;

const cards = JSON.parse(cardsJSON);
function loadData() {
  setTimeout(() => {
    document.querySelector("#loader").classList.add("hidden");
    console.log(cards);
    displayCards(cards);
  }, 1000);
}

function displayCards(cardsData) {}
//async function getByUrl(url) {
//  const data = await fetch(url);
//  if (!data.ok) {
//    Error("Карточки отсутствуют");
//  }
//  const localData = await data.json();
//  console.log("Информация получена");
//  return localData;
//}

document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".dropdown-list li");
  const aside_button = document.querySelector("#aside-btn");
  const sidebar = document.querySelector(".search-aside-container");
  const overlay = document.querySelector("#overlay");

  document
    .querySelector(".dropdown-btn")
    .addEventListener("click", function () {
      const dropdownList = document.querySelector(".dropdown-list");
      dropdownList.style.display =
        dropdownList.style.display === "block" ? "none" : "block";
    });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedText = document.querySelector("#dropdown-label");
      selectedText.textContent = this.innerText;
      document.querySelector("dropdownList").style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    const dropdownList = document.querySelector(".dropdown-list");
    const container = document.querySelector(".dropdown-btn");
    if (!container.contains(event.target)) {
      dropdownList.style.display = "none";
    }
  });

  aside_button.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("hidden");
    //sidebar.style.display = "grid";
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.add("hidden");
    //sidebar.style.display = "none";
  });
});
