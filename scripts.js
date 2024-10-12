document.addEventListener('DOMContentLoaded', function() {
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

  const aside_button = document.querySelector('#aside-btn');
  const sidebar = document.querySelector('.search-aside-container');
  const overlay = document.querySelector('#overlay');

  aside_button.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('hidden');
    //sidebar.style.display = "grid";
  });

  overlay.addEventListener('click', function() {
    sidebar.classList.remove('open');
    overlay.classList.add('hidden');
    //sidebar.style.display = "none";
  });
});
