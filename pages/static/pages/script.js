const newsData = JSON.parse(document.getElementById('js_context').textContent);

function renderNews() {
  const newsContainer = document.getElementById('news-list');
  if (!newsContainer) return;

  newsContainer.innerHTML = newsData.map(item => `
    <article class="bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <img src="${item.image}" alt="${item.title}" class="w-full sm:w-40 h-28 object-cover rounded-lg flex-shrink-0">
      <div class="space-y-1.5 flex-grow">
        <div class="flex items-center space-x-2 text-xs text-gray-500">
          <span class="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded">${item.category}</span>
          <span>•</span>
          <span class="truncate max-w-[200px]">${item.source}</span>
        </div>
        <h3 onclick="openArticleModal(${item.id})" class="text-base sm:text-lg font-bold text-gray-900 hover:text-blue-600 cursor-pointer transition leading-snug">
          ${item.title}
        </h3>
        <p class="text-gray-600 text-xs sm:text-sm line-clamp-2">${item.snippet}</p>
      </div>
      <button onclick="openArticleModal(${item.id})" class="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center space-x-1 flex-shrink-0 self-end sm:self-center">
        <span>Спростування</span>
        <span>&rarr;</span>
      </button>
    </article>
  `).join('');
}

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

function openArticleModal(id) {
  const article = newsData.find(n => n.id === id);
  if (!article) return;

  document.getElementById('modal-title').innerText = article.title;
  document.getElementById('modal-category').innerText = article.category;
  document.getElementById('modal-source').innerText = `Джерело: ${article.source}`;
  document.getElementById('modal-image').src = article.image;
  document.getElementById('modal-fake-text').innerText = article.fakeText;
  document.getElementById('modal-refutation-text').innerText = article.refutation;
  
  const sourceBtn = document.getElementById('modal-source-link');
  sourceBtn.href = article.sourceUrl;

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

document.addEventListener('DOMContentLoaded', () => {
  renderNews();
  updateAuthUI();
});