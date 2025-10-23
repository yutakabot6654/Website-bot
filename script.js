// Ефект друкарської машинки
function typeWriterEffect(element, text, delay) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("type-text");
  const fullText = "Повнофункціональний бот: від модерації та налаштувань сервера до розваг, ШІ, створення ембедів та генерації аніме-контенту. Все, що потрібно для ідеальної спільноти!";
  textElement.textContent = "";
  typeWriterEffect(textElement, fullText, 40);
});

// Модальне вікно
const modal = document.getElementById('commandsModal');
const commandsBtn = document.getElementById('commandsBtn');

commandsBtn.onclick = () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

window.onclick = e => {
  if (e.target === modal) closeModal();
};

// Акордеон для команд
document.querySelectorAll('.cmd-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.command-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});
