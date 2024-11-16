const cardsJSON = `
[
  {
    "subject": "Общество",
    "dateDay": "сегодня",
    "dateTime": "14:30",
    "imgSrc": "./assets/monument.png",
    "imgAlt": "monument",
    "title": "Изготовленный Зурабом Церетели памятник Тихону Хренникову открыли в Ельце",
    "description": "Новая достопримечательность появилась в Ельце. Здесь открыли памятник композитору Тихону Хренникову. В этом году"
  },
  {
    "subject": "Спорт",
    "dateDay": "сегодня",
    "dateTime": "20:30",
    "imgSrc": "./assets/runner.png",
    "imgAlt": "runner",
    "title": "Липецк признан беговой столицей России 2023 года",
    "description": "Липецк признан беговой столицей России 2023 года по итогам полумарафона «Забег.рф». В Липецке было 4000 участников забега, которые показали лучший..."
  },

  {
    "subject": "Экономика",
    "dateDay": "сегодня",
    "dateTime": "17:30",
    "imgSrc": "./assets/car.png",
    "imgAlt": "car",
    "title": "Электрокар EVOLUTE из Липецкой области признан электромобильным брендом № 1 в России",
    "description": "Электрокар под маркой EVOLUTE вновь подтвердил звание «Электромобиля № 1» в России.."
  },
  {
    "subject": "Общество",
    "dateDay": "сегодня",
    "dateTime": "23:30",
    "imgSrc": "./assets/man.png",
    "imgAlt": "man",
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

function displayCards(cardsData) {
  const container = document.querySelector(".news-block-container");
  container.innerHTML = "";
  cardsData.forEach((card) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("news-article-container");

    const cardHeader = document.createElement("header");
    cardHeader.classList.add("news-header");

    const newsSubject = document.createElement("div");
    newsSubject.classList.add("article-subject");
    const newsSubP = document.createElement("p");
    newsSubP.innerText = card.subject;

    const newsDate = document.createElement("div");
    newsDate.classList.add("article-date");
    const dateDay = document.createElement("span");
    dateDay.classList.add("article-date__day");
    dateDay.innerText = card.dateDay;
    const dateTime = document.createElement("span");
    dateTime.classList.add("article-date__time");
    dateTime.innerText = card.dateTime;
    const newsDateP = document.createElement("p");

    newsDateP.appendChild(dateDay);
    newsDateP.innerText += " в ";
    newsDateP.appendChild(dateTime);

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", card.imgSrc);
    cardImage.setAttribute("alt", card.imgAlt);

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = card.title;
    const cardDesc = document.createElement("p");
    cardDesc.innerText = card.description;

    newsSubject.appendChild(newsSubP);
    newsDate.appendChild(newsDateP);

    cardHeader.appendChild(newsSubject);
    cardHeader.appendChild(newsDate);

    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardDesc);
    container.appendChild(cardContainer);
    console.log("Карточка в HTML создана");
  });
}

function getSubject(sub) {
  console.log(sub);
}

function getFilterOption(ob) {
  console.log(ob);
}

function toggleDropdown() {
  document.querySelector("#dropdownMenu").classList.toggle("show");
}

function selectOption(option) {
  document.querySelector("#selectedOption").innerText = option;
  sortCards(option);
  toggleDropdown();
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function sortCards(option) {
  let sortedCards = [...cards];
  if (option === "Сначала новые") {
    sortedCards.sort(
      (a, b) => timeToMinutes(b.dateTime) - timeToMinutes(a.dateTime),
    );
  } else if (option === "Сначала старые") {
    sortedCards.sort(
      (a, b) => timeToMinutes(a.dateTime) - timeToMinutes(b.dateTime),
    );
  }
  displayCards(sortedCards);
}

function filterFiledsBySubject(subjectName) {
  let selectedCards = cards.filter((card) => card.subject === subjectName);
  displayCards(selectedCards);
}

function searchByName(name) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = ""; // Показываем карточку
    } else {
      card.style.display = "none"; // Скрываем карточку
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".dropdown-list li");
  const filteredFields = document.querySelectorAll(
    ".resources-container__label",
  );
  const aside_button = document.querySelector("#aside-btn");
  const sidebar = document.querySelector(".search-aside-container");
  const overlay = document.querySelector("#overlay");
  const allNews = document.querySelector(".resources-container h2");
  const search = document.querySelector(".search-line__input");

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
      selectedText.innerText = option.innerText;
      document.querySelector(".dropdown-list").style.display = "none";
      sortCards(selectedText.innerText);
    });
  });

  allNews.addEventListener("click", () => {
    filteredFields.forEach(
      (fieldClear) => (fieldClear.style.background = "#FFFFFF"),
    );
    displayCards(cards);
  });

  filteredFields.forEach((field) => {
    field.addEventListener("click", () => {
      if (field.style.background == "#f2f4f7") {
        field.style.background = "#FFFFFF";
        displayCards(cards);
      } else {
        filteredFields.forEach(
          (fieldClear) => (fieldClear.style.background = "#FFFFFF"),
        );
        field.style.background = "#f2f4f7";
        filterFiledsBySubject(field.innerText);
      }
    });
  });

  search.addEventListener("input", () => {
    const searchTerm = search.value.toLowerCase();
    console.log(searchTerm);
    let searchedCards = [];
    cards.forEach((card) => {
      const title = card.title.toLowerCase();
      if (title.includes(searchTerm)) {
        searchedCards.push(card);
      }
    });
    displayCards(searchedCards);
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
