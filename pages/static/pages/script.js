const newsData = [
  {
    id: 1,
    title: "Маніпуляція про «скасування обов'язкового складання НМТ для контрактників»",
    category: "Освіта",
    source: "Мережа Telegram-каналів («Труха», «Студент UA»)",
    sourceUrl: "https://mon.gov.ua/",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    snippet: "Повідомлення про нібито скасування НМТ для вступників на контракт через відключення світла та безпеку.",
    fakeText: "«ТЕРМІНОВО! НМТ ДЛЯ КОНТРАКТНИКІВ ОФІЦІЙНО СКАСОВАНО! Кабмін щойно підтримав нові правила вступу...»",
    refutation: "Міністерство освіти і науки України (МОН) випустило офіційні роз'яснення: правила НМТ є єдиними для всіх абітурієнтів."
  },
  {
    id: 2,
    title: "Фейк про закон №395/2026 щодо вимкнення зв'язку під час тривог",
    category: "Зв'язок / IT",
    source: "Анонімні регіональні Telegram-канали",
    sourceUrl: "https://cpd.gov.ua/",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    snippet: "Чутки про повне знеструмлення веж Kyivstar, Vodafone та Lifecell під час сирен.",
    fakeText: "«УВАГА! Ухвалено закон №395/2026 про повне вимкнення мобільного зв'язку та інтернет-мережі під час тривог!...»",
    refutation: "Центр протидії дезінформації (ЦПД) при РНБО заявив, що закону з таким номером чи змістом не існує."
  },
  {
    id: 3,
    title: "Паніка про «руйнівну магнітну бурю класу X99 та вибухи гаджетів»",
    category: "Астрономія",
    source: "Пабліки «Цікава наука», Viber-групи",
    sourceUrl: "https://www.swpc.noaa.gov/",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    snippet: "Заклики загортати телефони у фольгу через гігантський вибух на Сонці.",
    fakeText: "«ТЕРМІНОВО! Землю накриє безпрецедентна магнітна буря класу X99 - вимкніть телефони! Акумулятори вибухнуть...»",
    refutation: "Центри моніторингу космічної погоди (NOAA) пояснили, що сонячна активність є абсолютно безпечною для побутових гаджетів."
  },
  {
    id: 4,
    title: "Фейкова паніка про «холерну паличку у водопроводі міста»",
    category: "Медицина",
    source: "Сімейні чати у Viber",
    sourceUrl: "https://moz.gov.ua/",
    image: "https://botkin.pro/uploads/elFinder/Encyclopedia/cholera/what-is-cholera.jpg",
    snippet: "Повідомлення від нібито «головного лікаря» про спалах холери.",
    fakeText: "«SOS!!! Термінова інформація від головного лікаря! У воду потрапила ХОЛЕРА! Мити руки смертельно небезпечно...»",
    refutation: "Міністерство охорони здоров'я (МОЗ) запевнило, що якість питної води контролюється щодня і показники в нормі."
  },
  {
    id: 5,
    title: "Залякування батьків «штрафами 5000 грн за погані оцінки дітей»",
    category: "Освіта / Школа",
    source: "Батьківські групи у соцмережах",
    sourceUrl: "https://mon.gov.ua/",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    snippet: "Міф про новий закон щодо штрафів за прогули онлайн-уроків.",
    fakeText: "«Батьків штрафуватимуть на 5000 грн за погані оцінки та прогули дітей під час онлайн-навчання!...»",
    refutation: "МОН та юристи роз'яснили, що адміністративна відповідальність існує лише за злісне невиконання обов'язків."
  },
  {
    id: 6,
    title: "Клікбейт про «живі яйця динозавра, знайдені в Карпатах»",
    category: "Розваги / Курйози",
    source: "Регіональні туристичні пабліки",
    sourceUrl: "https://cpd.gov.ua/",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    snippet: "Фейк про знахідку пастухів зі «слабким серцебиттям всередині яєць».",
    fakeText: "«ШОК! У Карпатах місцеві пастухи знайшли гігантські яйця динозавра, які досі живі! Зафіксовано серцебиття...»",
    refutation: "Геологи пояснили, що на фото зображені «геоди» — природні мінеральні камені."
  },
  {
    id: 7,
    title: "Ворожий вкид про «здачу міст та прорив фронту на 30 км»",
    category: "Військові фейки",
    source: "Російські Telegram-канали",
    sourceUrl: "https://www.mil.gov.ua/",
    image: "https://images.unsplash.com/photo-1579963333765-b4129b3250fc?auto=format&fit=crop&w=800&q=80",
    snippet: "Спроба посіяти паніку через вигаданий наказ Генштабу.",
    fakeText: "«ТЕРМІНОВО! ЗСУ залишили місто без бою, фронт прорвано! Командування наказало відступати...»",
    refutation: "Генеральний штаб ЗСУ та ЦПД офіційно спростовують подібні ворожі ІПСО."
  },
  {
    id: 8,
    title: "Абсурдний міф про «банани та мандарини з ВІЛ та туберкульозом»",
    category: "Побутовий абсурд",
    source: "Пересилання у Viber",
    sourceUrl: "https://moz.gov.ua/",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=800&q=80",
    snippet: "Панічна розсилка про імпортні фрукти зі шприцами зараженої крові.",
    fakeText: "«МАМИ, УВАГА! У супермаркети завезли партію мандаринів та бананів із Африки, заражених ВІЛ/СНІД...»",
    refutation: "МОЗ наголошує: ВІЛ не здатен жити чи розмножуватися у зовнішньому середовищі або на фруктах."
  },
  {
    id: 9,
    title: "Конспірологія про «психотронні вишки 5G та активацію наночипів»",
    category: "Псевдонаука",
    source: "Групи теорій змов у Facebook",
    sourceUrl: "https://nkecc.gov.ua/",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    snippet: "Вигадки про таємний монтаж випромінювачів та поради обгортати вікна фольгою.",
    fakeText: "«Під виглядом вишок 5G таємно встановлюють випромінювачі, які керують агресією людей...»",
    refutation: "НКЕК та ВООЗ підтверджують, що радіохвилі 5G неіонізуючі та безпечні."
  },
  {
    id: 10,
    title: "Пропагандистський фейк про «американських бойових гусей»",
    category: "Пропаганда РФ",
    source: "Офіційні російські ЗМІ",
    sourceUrl: "https://cpd.gov.ua/",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
    snippet: "Заяви про птахів із секретних лабораторій, навчених атакувати літаки.",
    fakeText: "«СЕНСАЦІЙНЕ ВИКРИТТЯ! На території України вивели породу бойових гусей, які збили винищувач...»",
    refutation: "ЦПД пояснили, що птахів неможливо запрограмувати на атаку військової техніки."
  },
  {
    id: 11,
    title: "Фейк про «зомбування дітей ультразвуком через навушники»",
    category: "Кібербезпека",
    source: "Жовта преса, YouTube-канали",
    sourceUrl: "https://cyberpolice.gov.ua/",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    snippet: "Залякування вірусом, який через навушники записує штрих-код на сітківку.",
    fakeText: "«Вірус через навушники посилає ультразвукові сигнали, що вводять дитину в транс і записують штрих-код на око...»",
    refutation: "Кіберполіція спростувала міф: технічно неможливо «зомбувати ультразвуком» чи записати штрих-код на око."
  },
  {
    id: 12,
    title: "NASA розпилює літій над людьми",
    category: "Конспірологія",
    source: "Англомовні конспірологічні сайти, соцмережі",
    sourceUrl: "https://www.nasa.gov/",
    image: "https://www.nasa.gov/wp-content/uploads/2022/08/wff-2022-059-025.jpg?resize=900,600",
    snippet: "Твердження про таємні експерименти NASA з розпилення літію у повітрі.",
    fakeText: "«NASA визнала, що розпилює над американцями літій та хімічні речовини, які впливають на здоров’я і поведінку...»",
    refutation: "NASA використовує невелику кількість спеціальних речовин як маркери у верхніх шарах атмосфери для вивчення її руху. Вони недоступні для звичайних літаків і не впливають на людей."
  },
  {
    id: 13,
    title: "Ракета врізалася в Місяць, і це зняли на відео",
    category: "Космос / ШІ",
    source: "Соціальні мережі та відеоплатформи",
    sourceUrl: "https://www.unian.ua/",
    image: "https://images.unian.net/photos/2026_08/thumb_files/800_0_1785856892-1234.jpg?r=447535",
    snippet: "Ефектне відео нібито реального зіткнення ракети SpaceX з поверхнею Місяця.",
    fakeText: "«Учені зафіксували момент зіткнення уламка ракети з Місяцем: видно політ, удар і величезну хмару пилу...»",
    refutation: "Сам факт падіння був реальним, але відео моменту удару — фальшиве, створене за допомогою генеративного ШІ. Наземний телескоп не міг показати таку деталізацію."
  },
  {
    id: 14,
    title: "Перше фото Землі з Artemis II",
    category: "Космос / ШІ",
    source: "Соцмережі та публічні сторінки про космос",
    sourceUrl: "https://sud.ua/",
    image: "https://sud.ua/uploads/news/2026/04/03/c77ddbb325de985a9d98bfe38d9fff4b34c8e4a6.jpg",
    snippet: "Унікальне зображення Землі нібито зроблене астронавтами з корабля Orion.",
    fakeText: "«Це унікальна фотографія Землі, зроблена астронавтами під час місії Artemis II з борту корабля Orion...»",
    refutation: "Під час перевірки виявлено водяний знак AI-сервісу, а форма ілюмінатора не відповідає справжньому кораблям Orion. Це творіння штучного інтелекту."
  },
  {
    id: 15,
    title: "Пінгвіни падають на спину, коли дивляться на літаки",
    category: "Інтернет-легенди",
    source: "Старі газети, соцмережі",
    sourceUrl: "https://rayon.in.ua/",
    image: "https://static.rayon.in.ua/Attaches/2024/04/25/f32c43ddd5ab455b84ac71805c9b6bd9.jpg",
    snippet: "Міф про те, що пінгвіни задирають голови на літаки, втрачають рівновагу і падають.",
    fakeText: "«Пінгвіни на Фолклендських островах настільки цікавляться літаками, що падають на спину. Існує спеціальна професія людини, яка їх піднімає...»",
    refutation: "Це відома інтернет-легенда. Дослідники не зафіксували масового падіння птахів — вони просто насторожуються або відходять від шуму."
  },
  {
    id: 16,
    title: "За бананом можна визначити, як його дозрівали",
    category: "Побутові міфи",
    source: "Пости в Instagram та Facebook",
    sourceUrl: "https://www.unian.ua/",
    image: "https://images.unian.net/photos/2026_03/thumb_files/1200_0_1773143345-4460.jpg?r=171277",
    snippet: "Поради про визначення «хімічного» чи «натурального» дозрівання бананів за кольором.",
    fakeText: "«Якщо у банана чорний стебель і плями — він природний. Зелений стебель означає дозрівання за допомогою хімікатів...»",
    refutation: "Зовнішній вигляд банана не дозволяє достовірно визначити спосіб дозрівання. Чорні плями — ознака стиглості або старіння, а темний стебель буває через грибок."
  },
  {
    id: 17,
    title: "5G вбиває людей, тварин і рослини",
    category: "Псевдонаука",
    source: "Плакати та дописи у Facebook та Instagram",
    sourceUrl: "https://sobor.com.ua/",
    image: "https://cdn.sobor.com.ua/news/2020-04-27/PRI_148805856/1200x800.jpg.webp",
    snippet: "Попередження про те, що сигнали 5G-веж викликають головний біль та хвороби.",
    fakeText: "«Сигнали від 5G-веж небезпечні для живих організмів. Чим ближче живеш до вежі, тим більший ризик для здоров'я...»",
    refutation: "Наукові дані не підтверджують шкоду 5G-технологій за умови дотримання встановлених норм радіочастотного випромінювання."
  },
  {
    id: 18,
    title: "У парку зняли десятки маленьких жирафів",
    category: "ШІ / Відео",
    source: "Вірусне відео у соцмережах",
    sourceUrl: "https://knowhow.pp.ua/",
    image: "https://knowhow.pp.ua/wp-content/uploads/2021/01/giraffe.jpg",
    snippet: "Вірусна зйомка величезної групи дитинчат жирафів, що граються.",
    fakeText: "«У цьому парку випадково зняли величезну групу маленьких жирафів, які разом бігають та граються...»",
    refutation: "Відео створене цифровим художником за допомогою комп’ютерної графіки (автор також створював літаючих черепах)."
  },
  {
    id: 19,
    title: "У супермаркетах продають людські руки",
    category: "ШІ / Фейк",
    source: "Вірусні фотографії у Facebook",
    sourceUrl: "https://commons.wikimedia.org/",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Meat_display_in_a_supermarket%2C_Quebec_City.jpg",
    snippet: "Фото полиць магазину з упаковками нібито людського м'яса та рук.",
    fakeText: "«У супермаркеті помітили полиці з упаковками людських рук, які продаються як м'ясо. Шокуючий новий продукт...»",
    refutation: "Зображення створене за допомогою генеративного ШІ (Midjourney). На ньому помітні типові помилки форми пальців та написів."
  },
  {
    id: 20,
    title: "Disney World затопило",
    category: "ШІ / Новини",
    source: "Facebook, Telegram, X",
    sourceUrl: "https://img.novosti-n.org/",
    image: "https://img.novosti-n.org/upload/news/866358.jpg",
    snippet: "Сенсаційні фотографії затопленого ураганом парку Disney World у Флориді.",
    fakeText: "«Після урагану Disney World повністю опинився під водою. На фото видно затоплений парк та замок Попелюшки...»",
    refutation: "Фотографії масштабного затоплення виявилися творінням штучного інтелекту зі спотвореними елементами замку та відображеннями."
  },
  {
    id: 21,
    title: "NASA заплатить $18 000 за 70 днів у ліжку та куріння марихуани",
    category: "Гумор / Міфи",
    source: "Розважальні сайти та соцмережі",
    sourceUrl: "https://onclinic.ua/",
    image: "https://onclinic.ua/storage/media/articles/1135/yBVxouiYYfqO4pf0ByxcTc04ZQtaBZX0ZBOeOICa.webp",
    snippet: "Оголошення про вакансію від NASA для лежачого експерименту з марихуаною.",
    fakeText: "«NASA шукає людей, які готові провести 70 днів у ліжку та курити марихуану за $18 000...»",
    refutation: "NASA дійсно вивчає вплив тривалого лежання на організм, але марихуана не є частиною експерименту — учасників перевіряють на вживання наркотиків та алкоголю."
  },
  {
    id: 22,
    title: "NASA випадково показала працівника студії на МКС",
    category: "Космос / Монтаж",
    source: "Відео в соціальних мережах",
    sourceUrl: "https://24tv.ua/",
    image: "https://24tv.ua/resources/photos/news/202601/2985113_17614507.jpg?v=1767865473000&w=1920&h=1280&fit=cover&output=webp",
    snippet: "Твердження, що трансляції з Міжнародної космічної станції знімають у павільйоні.",
    fakeText: "«NASA випадково залишила в кадрі студійного працівника, який п’є каву та махає рукою, що доводить зйомки у павільйоні...»",
    refutation: "Цей фрагмент було змонтовано та цифрово додано до оригінального відео NASA. В реальній трансляції цієї людини немає."
  }
];

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