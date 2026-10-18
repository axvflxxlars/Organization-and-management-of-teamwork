function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('form-login');
  const registerForm = document.getElementById('form-register');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');

  if (!loginForm || !registerForm) return;

  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    tabLogin.className = "flex-1 py-2 font-semibold text-blue-600 border-b-2 border-blue-600";
    tabRegister.className = "flex-1 py-2 font-semibold text-gray-500 border-b-2 border-transparent hover:text-gray-700";
  } else {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    tabRegister.className = "flex-1 py-2 font-semibold text-blue-600 border-b-2 border-blue-600";
    tabLogin.className = "flex-1 py-2 font-semibold text-gray-500 border-b-2 border-transparent hover:text-gray-700";
  }
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const username = email.split('@')[0];
  
  localStorage.setItem('faktorama_user', username);
  updateAuthUI();
  closeAuthModal();
  alert(`Вітаємо, ви успішно увійшли як ${username}!`);
}

function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById('register-name').value;
  
  localStorage.setItem('faktorama_user', name);
  updateAuthUI();
  closeAuthModal();
  alert(`Реєстрація успішна! Вітаємо, ${name}!`);
}

function handleLogout() {
  localStorage.removeItem('faktorama_user');
  updateAuthUI();
  alert('Ви вийшли з облікового запису.');
}

function updateAuthUI() {
  const authBtn = document.getElementById('auth-btn');
  const userGreeting = document.getElementById('user-greeting');
  const savedUser = localStorage.getItem('faktorama_user');

  if (!authBtn) return;

  if (savedUser) {
    authBtn.innerText = "Вийти";
    authBtn.onclick = handleLogout;
    authBtn.className = "bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition";
    if (userGreeting) {
      userGreeting.innerText = `Привіт, ${savedUser}!`;
    }
  } else {
    authBtn.innerText = "Увійти";
    authBtn.onclick = openAuthModal;
    authBtn.className = "bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition";
    if (userGreeting) {
      userGreeting.innerText = "";
    }
  }
}

function getRefutations() {
  const element = document.getElementById('refutations-data');
  return element ? JSON.parse(element.textContent) : [];
}

function openArticleModal(id) {
  const article = getRefutations().find(n => n.id === id);
  if (!article) return;

  document.getElementById('modal-title').innerText = article.title;
  document.getElementById('modal-reporter').innerText = article.reporter;
  document.getElementById('modal-reviewer').innerText = article.reviewer;
  document.getElementById('modal-category').innerText = article.category;
  document.getElementById('modal-source').innerText = `Джерело: ${article.source}`;
  document.getElementById('modal-image').src = article.image;
  document.getElementById('modal-fake-text').innerText = article.fakeText;
  document.getElementById('modal-refutation-text').innerText = article.text;

  const sourceBtn = document.getElementById('modal-source-link');
  sourceBtn.href = article.link;

  const modal = document.getElementById('article-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

document.addEventListener('DOMContentLoaded', updateAuthUI);