window.onload = function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
      alert('Please fill in all fields.');
      e.preventDefault();
    }else {
      window.location.href("home.html")
    }
  });
};
