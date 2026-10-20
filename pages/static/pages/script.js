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