async function handleAnonSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
  const payload = Object.fromEntries(new FormData(form));

  button.disabled = true;
  try {
    const response = await fetch(form.dataset.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    alert('Дякуємо! Ваше повідомлення передано команді фактчекерів для перевірки.');
    form.reset();
  } catch (error) {
    console.error(error);
    alert('Не вдалося надіслати повідомлення. Перевірте дані та спробуйте ще раз.');
  } finally {
    button.disabled = false;
  }
}
