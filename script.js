document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('login-container').classList.add('hidden');
  document.getElementById('dashboard-container').classList.remove('hidden');
});

document.getElementById('logout-btn').addEventListener('click', function() {
  document.getElementById('dashboard-container').classList.add('hidden');
  document.getElementById('login-container').classList.remove('hidden');
  document.getElementById('login-form').reset();
});
