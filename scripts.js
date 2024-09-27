document.querySelector('.dropdown-btn').addEventListener('click', function() {
  const dropdownList = document.querySelector('.dropdown-list');
  dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
});

const options = document.querySelectorAll('.dropdown-list li');
options.forEach(option => {
  option.addEventListener('click', function() {
    const selectedText = document.querySelector('#dropdown-label');
    selectedText.textContent = this.innerText;
    document.querySelector('dropdownList').style.display = 'none';
  });
});

window.addEventListener('click', function(event) {
  const dropdownList = document.querySelector('.dropdown-list');
  const container = document.querySelector('.dropdown-btn');
  if (!container.contains(event.target)) {
    dropdownList.style.display = 'none';
  }
});
