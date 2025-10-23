<!doctype html>
<html lang="uk">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Yutaka — Discord Bot • Dashboard</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="wrap">
    <header class="topbar">
      <div class="brand">
        <img src="https://cdn.discordapp.com/attachments/1420245387666784340/1429750237420982282/file_00000000eeac6243bcb93f0cd3178bb6.png" alt="Yutaka Icon" class="logo-img">
        <div>
          <h1>Yutaka</h1>
          <p>Мультифункціональний Discord-бот</p>
        </div>
      </div>
      <div class="controls">
        <a href="#" class="btn primary">Запросити</a>
        <a href="#" class="btn ghost">Підтримка</a>
      </div>
    </header>

    <nav class="nav">
      <button class="tab-btn active">Про</button>
      <button class="tab-btn" id="commandsBtn">Команди</button>
      <button class="tab-btn">Запросити</button>
      <button class="tab-btn">Підтримка</button>
    </nav>

    <div class="grid">
      <main class="panel tab">
        <section class="hero">
          <h2 id="type-title">Про Yutaka</h2>
          <p class="lead" id="type-text"></p>
        </section>

        <div class="features">
          <div class="feature">
            <div class="f-icon"><img src="https://cdn.discordapp.com/emojis/1401502579384385556.png" alt="Moderation"></div>
            <div>
              <strong>Модерування</strong>
              <p class="muted">Керуйте сервером із командами бану, кіку, м'юту, логів і авто-модерації.</p>
            </div>
          </div>
          <div class="feature">
            <div class="f-icon"><img src="https://cdn.discordapp.com/emojis/1401503007438274571.png" alt="Utilities"></div>
            <div>
              <strong>Утиліти</strong>
              <p class="muted">Корисні команди для отримання інформації про сервер та користувачів.</p>
            </div>
          </div>
          <div class="feature">
            <div class="f-icon"><img src="https://cdn.discordapp.com/emojis/1401502907563773975.png" alt="Settings"></div>
            <div>
              <strong>Налаштування</strong>
              <p class="muted">Панель керування — налаштування основних параметрів сервера.</p>
            </div>
          </div>
          <div class="feature">
            <div class="f-icon"><img src="https://cdn.discordapp.com/emojis/1401502765078806563.png" alt="Embed"></div>
            <div>
              <strong>Створення ембедів</strong>
              <p class="muted">Генеруйте власні ембеди з команд бота.</p>
            </div>
          </div>
        </div>

        <section class="commands">
          <h2>Команди</h2>
          <div class="cmd-grid">
            <div class="cmd-card">
              <div class="cmd-head">
                <div class="cmd-icon"><img src="https://cdn.discordapp.com/emojis/1419094359751659635.png" alt="AI"></div>
                <b>Система штучного інтелекту</b>
              </div>
              <p class="muted">Створюйте власного співрозмовника для сервера.</p>
            </div>
            <div class="cmd-card">
              <div class="cmd-head">
                <div class="cmd-icon"><img src="https://cdn.discordapp.com/emojis/1410656485913923805.png" alt="Guild"></div>
                <b>Система гільдії</b>
              </div>
              <p class="muted">Створюйте гільдії для івентів та розваг.</p>
            </div>
            <div class="cmd-card">
              <div class="cmd-head">
                <div class="cmd-icon"><img src="https://cdn.discordapp.com/emojis/1404082026264657921.png" alt="Content"></div>
                <b>Контент</b>
              </div>
              <p class="muted">Генерація аніме-контенту та зображень.</p>
            </div>
            <div class="cmd-card">
              <div class="cmd-head">
                <div class="cmd-icon"><img src="https://cdn.discordapp.com/emojis/1401502696099414066.png" alt="Fun"></div>
                <b>Розваги</b>
              </div>
              <p class="muted">Веселі команди для розваг та спілкування.</p>
            </div>
          </div>
        </section>
      </main>

      <aside class="right-col">
        <div class="card-small">
          <div class="stat"><div class="num">18</div><div class="label">Серверів</div></div>
        </div>
        <div class="card-small">
          <h3>Останні оновлення</h3>
          <ul class="timeline-mini">
            <li><div class="dot"></div><div><b>v3.4</b> — Виправлено баги</div></li>
            <li><div class="dot"></div><div><b>v3.3</b> — Покращено модерацію</div></li>
            <li><div class="dot"></div><div><b>v3.2</b> — Додано ШІ</div></li>
          </ul>
        </div>
      </aside>
    </div>

    <footer>© 2025 Yutaka Bot • З любов'ю 💜 для Discord</footer>
  </div>

  <div id="commandsModal" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal()">&times;</span>
      <h2>Список команд</h2>
      <div class="category">
        <strong>Налаштування сервера</strong>
        <div class="command-item">
          <button class="cmd-toggle">/change-channel</button>
          <div class="cmd-details"><p>Налаштувати канал.</p></div>
        </div>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
