// Translations and labels
const LANG = {
  pl: {
    pageTitle:"Ankieta ZUW",
    headerTitle:"Ankieta informacyjna",
    headerSub:"Urząd do Spraw Cudzoziemców",
    secA:"A. DANE OSOBOWE CUDZOZIEMCA",
    secB:"B. MIEJSCE POBYTU CUDZOZIEMCA",
    secC:"C. INFORMACJE DODATKOWE",
    noteB:"Miejsce aktualnego pobytu na terytorium Rzeczypospolitej Polskiej.",
    f1:"1. Nazwisko", f2:"2. Nazwisko poprzednie", f3:"3. Nazwisko rodowe",
    f4:"4. Imię (imiona)", f5:"5. Imię poprzednie", f6:"6. Imię ojca",
    f7:"7. Imię matki", f8:"8. Nazwisko rodowe matki",
    f9:"9. Data urodzenia", f10:"10. Płeć", f10m:"Mężczyzna", f10k:"Kobieta",
    f11:"11. Miejsce urodzenia", f12:"12. Państwo urodzenia",
    f13:"13. Narodowość", f14:"14. Obywatelstwo",
    f15:"15. Stan cywilny", f16:"16. Wykształcenie",
    f17:"17. Rysopis", f17a:"Wzrost (cm)", f17b:"Kolor oczu", f17c:"Znaki szczególne",
    f18:"18. Numer PESEL", f19:"19. Numer telefonu", f20:"20. Email",
    fEmployerEmail:"📧 E-mail pracodawcy",
    b1:"1. Województwo", b2:"2. Miejscowość", b3:"3. Ulica",
    b4:"4. Numer domu", b5:"5. Numer mieszkania", b6:"6. Kod pocztowy",
    cI:"I. Główny cel pobytu (wybrać JEDEN)",
    cIother:"Jeśli inne – proszę określić:",
    cII:"II. Członkowie rodziny zamieszkujący w Polsce",
    famName:"Imię i nazwisko", famDob:"Data urodzenia",
    famRel:"Stopień pokrewieństwa", famCit:"Obywatelstwo",
    famAddr:"Miejsce zamieszkania", famStay:"Ubiega się o pobyt?",
    famDep:"Na utrzymaniu?", famCard:"Członek rodziny",
    addFam:"+ Dodaj członka rodziny", delFam:"✕ Usuń",
    cIII:"III. Pobyt na terytorium RP",
    cIIIa:"a) Wszystkie poprzednie pobyty w Polsce (okresy i podstawa pobytu)",
    cIIIb:"b) Czy przebywa Pan/Pani aktualnie na terytorium RP?",
    cIIIdate:"Data ostatniego wjazdu do Polski",
    cIIIbasis:"Na jakiej podstawie przebywa Pan/Pani aktualnie w Polsce?",
    cIV:"IV. Podróże zagraniczne poza RP w ostatnich 5 latach",
    cV:"V. Środki finansowe na pokrycie kosztów utrzymania",
    cVI:"VI. Ubezpieczenie zdrowotne",
    cVII:"VII. Zatrzymanie / areszt / zakaz opuszczania kraju?",
    cVIII:"VIII. Karalność sądowa na terytorium RP?",
    cVIIIdetail:"Jeśli tak – szczegóły:",
    cIX:"IX. Postępowanie karne lub w sprawach o wykroczenia?",
    cIXdetail:"Jeśli tak – szczegóły:",
    cX:"X. Zobowiązania wynikające z orzeczeń sądowych lub decyzji administracyjnych?",
    cXdetail:"Jeśli tak – szczegóły:",
    yes:"tak", no:"nie",
    submitBtn:"📤 Wyślij",
    submittingBtn:"📤 Wysyłanie...",
    successMsg:"✅ Dane zostały pomyślnie przesłane. Dziękujemy!",
    alertRequired:"Proszę wypełnić wymagane pola.",
    alertNoDelete:"Nie można usunąć ostatniego wpisu.",
    alertEmployerEmailRequired:"Proszę podać e-mail pracodawcy.",
    alertEmployerEmailInvalid:"Nieprawidłowy adres e-mail pracodawcy.",
    selectDefault:"-- wybierz --",
    sc1:"kawaler/panna", sc2:"żonaty/zamężna", sc3:"rozwiedziony/rozwiedziona", sc4:"wdowiec/wdowa",
    ed1:"podstawowe", ed2:"średnie", ed3:"wyższe", ed4:"zawodowe",
    cp1:"Wykonywanie pracy",
    cp2:"Praca w zawodzie wymagającym wysokich kwalifikacji",
    cp3:"Praca cudzoziemca delegowanego przez pracodawcę zagranicznego",
    cp4:"Prowadzenie działalności gospodarczej",
    cp5:"Studia (I, II stopień lub doktorat)",
    cp6:"Prowadzenie badań naukowych",
    cp7:"Mobilność długoterminowa naukowca",
    cp8:"Odbycie stażu",
    cp9:"Wolontariat europejski",
    cp10:"Pobyt z obywatelem RP",
    cp11:"Pobyt z cudzoziemcem",
    cp12:"Mobilność członka rodziny naukowca",
    cp13:"Ofiara handlu ludźmi",
    cp14:"Krótkotrwały pobyt",
    cp15:"Przedłużenie pobytu – praca sezonowa",
    cp16:"Inne okoliczności",
    pb1:"Ruch bezwizowy", pb2:"Wiza",
    pb3:"Zezwolenie na pobyt czasowy", pb4:"Dokument Schengen innego państwa",
    woj:["dolnośląskie","kujawsko-pomorskie","lubelskie","lubuskie","łódzkie",
         "małopolskie","mazowieckie","opolskie","podkarpackie","podlaskie",
         "pomorskie","śląskie","świętokrzyskie","warmińsko-mazurskie",
         "wielkopolskie","zachodniopomorskie"]
  },

  ua: {
    pageTitle:"Анкета ЗУВ",
    headerTitle:"Інформаційна анкета",
    headerSub:"Управління у справах іноземців",
    secA:"A. ПЕРСОНАЛЬНІ ДАНІ ІНОЗЕМЦЯ",
    secB:"B. МІСЦЕ ПРОЖИВАННЯ ІНОЗЕМЦЯ",
    secC:"C. ДОДАТКОВА ІНФОРМАЦІЯ",
    noteB:"Місце актуального проживання в Республіці Польща.",
    f1:"1. Прізвище", f2:"2. Попереднє прізвище", f3:"3. Прізвище родове",
    f4:"4. Ім'я", f5:"5. Попереднє ім'я", f6:"6. Ім'я батька",
    f7:"7. Ім'я матері", f8:"8. Дівоче прізвище матері",
    f9:"9. Дата народження", f10:"10. Стать", f10m:"Чоловік", f10k:"Жінка",
    f11:"11. Місце народження", f12:"12. Країна народження",
    f13:"13. Національність", f14:"14. Громадянство",
    f15:"15. Сімейний стан", f16:"16. Освіта",
    f17:"17. Опис зовнішності", f17a:"Зріст (см)", f17b:"Колір очей", f17c:"Особливі прикмети",
    f18:"18. Номер PESEL", f19:"19. Номер телефону", f20:"20. Електронна пошта",
    fEmployerEmail:"📧 Електронна пошта роботодавця",
    b1:"1. Воєводство", b2:"2. Населений пункт", b3:"3. Вулиця",
    b4:"4. Номер будинку", b5:"5. Номер квартири", b6:"6. Поштовий індекс",
    cI:"I. Основна мета перебування (обрати ОДНУ)",
    cIother:"Якщо інші – уточніть:",
    cII:"II. Члени сім'ї, які проживають в Польщі",
    famName:"Ім'я і прізвище", famDob:"Дата народження",
    famRel:"Ступінь рідства", famCit:"Громадянство",
    famAddr:"Місце проживання", famStay:"Подає заяву на посвідку?",
    famDep:"На утриманні?", famCard:"Член сім'ї",
    addFam:"+ Додати члена сім'ї", delFam:"✕ Видалити",
    cIII:"III. Перебування на території Польщі",
    cIIIa:"a) Всі попередні перебування в Польщі (періоди та підстави)",
    cIIIb:"b) Ви зараз перебуваєте в Польщі?",
    cIIIdate:"Дата останнього в'їзду до Польщі",
    cIIIbasis:"На якій підставі ви зараз перебуваєте в Польщі?",
    cIV:"IV. Закордонні поїздки за межами Польщі за останні 5 років",
    cV:"V. Фінансові ресурси для покриття витрат на проживання",
    cVI:"VI. Медичне страхування",
    cVII:"VII. Затримання / арешт / заборона виїзду?",
    cVIII:"VIII. Судимість на території Польщі?",
    cVIIIdetail:"Якщо так – деталі:",
    cIX:"IX. Кримінальна справа або справа про правопорушення?",
    cIXdetail:"Якщо так – деталі:",
    cX:"X. Зобов'язання за судовими або адміністративними рішеннями?",
    cXdetail:"Якщо так – деталі:",
    yes:"так", no:"ні",
    submitBtn:"📤 Надіслати",
    submittingBtn:"📤 Надсилання...",
    successMsg:"✅ Дані успішно надіслано. Дякуємо!",
    alertRequired:"Будь ласка, заповніть обов'язкові поля.",
    alertNoDelete:"Не можна видалити останній запис.",
    alertEmployerEmailRequired:"Будь ласка, вкажіть електронну пошту роботодавця.",
    alertEmployerEmailInvalid:"Недійсна електронна пошта роботодавця.",
    selectDefault:"-- оберіть --",
    sc1:"неодружений/незаміжня", sc2:"одружений/заміжня",
    sc3:"розлучений/розлучена", sc4:"вдівець/вдова",
    ed1:"початкова", ed2:"середня", ed3:"вища", ed4:"професійна",
    cp1:"Виконання роботи",
    cp2:"Робота за професією високої кваліфікації",
    cp3:"Робота іноземцем, делегованим іноземним роботодавцем",
    cp4:"Ведення бізнесу",
    cp5:"Навчання (I, II ступінь або докторантура)",
    cp6:"Наукові дослідження",
    cp7:"Довгострокова мобільність науковця",
    cp8:"Стажування",
    cp9:"Участь у програмі ЄВС",
    cp10:"Проживання з громадянином Польщі",
    cp11:"Проживання з іноземцем",
    cp12:"Мобільність члена сім'ї вченого",
    cp13:"Жертва торгівлі людьми",
    cp14:"Коротковремене перебування",
    cp15:"Продовження перебування – сезонна робота",
    cp16:"Інші обставини",
    pb1:"Безвізовий режим", pb2:"Віза",
    pb3:"Дозвіл на тимчасове проживання", pb4:"Документ іншої країни Шенгену",
    woj:["Нижньосілезьке","Куявсько-Поморське","Люблінське","Любуське","Лодзьке",
         "Малопольське","Мазовецьке","Опольське","Підкарпатське","Підляське",
         "Поморське","Сілезьке","Свентокшиське","Вармінсько-Мазурське",
         "Великопольське","Західнопоморське"]
  },

  ru: {
    pageTitle:"Анкета ЗУВ",
    headerTitle:"Информационная анкета",
    headerSub:"Управление по делам иностранцев",
    secA:"A. ПЕРСОНАЛЬНЫЕ ДАННЫЕ ИНОСТРАНЦА",
    secB:"B. МЕСТО ПРОЖИВАНИЯ ИНОСТРАНЦА",
    secC:"C. ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ",
    noteB:"Место актуального проживания в Республике Польша.",
    f1:"1. Фамилия", f2:"2. Предыдущая фамилия", f3:"3. Фамилия при рождении",
    f4:"4. Имя", f5:"5. Предыдущее имя", f6:"6. Имя отца",
    f7:"7. Имя матери", f8:"8. Девичья фамилия матери",
    f9:"9. Дата рождения", f10:"10. Пол", f10m:"Мужчина", f10k:"Женщина",
    f11:"11. Место рождения", f12:"12. Страна рождения",
    f13:"13. Национальность", f14:"14. Гражданство",
    f15:"15. Семейное положение", f16:"16. Образование",
    f17:"17. Внешность", f17a:"Рост (см)", f17b:"Цвет глаз", f17c:"Особые приметы",
    f18:"18. Номер PESEL", f19:"19. Номер телефона", f20:"20. Электронная почта",
    fEmployerEmail:"📧 Эл. почта работодателя",
    b1:"1. Воеводство", b2:"2. Населённый пункт", b3:"3. Улица",
    b4:"4. Номер дома", b5:"5. Номер квартиры", b6:"6. Почтовый индекс",
    cI:"I. Основная цель пребывания (выбрать ОДНУ)",
    cIother:"Если иные – уточните:",
    cII:"II. Члены семьи, проживающие в Польше",
    famName:"Имя и фамилия", famDob:"Дата рождения",
    famRel:"Степень родства", famCit:"Гражданство",
    famAddr:"Место проживания", famStay:"Подаёт заявку на ВНЖ?",
    famDep:"На иждивении?", famCard:"Член семьи",
    addFam:"+ Добавить члена семьи", delFam:"✕ Удалить",
    cIII:"III. Пребывание на территории Польши",
    cIIIa:"a) Все предыдущие пребывания в Польше (периоды и основания)",
    cIIIb:"b) Вы сейчас находитесь в Польше?",
    cIIIdate:"Дата последнего въезда в Польшу",
    cIIIbasis:"На каком основании вы находитесь в Польше?",
    cIV:"IV. Зарубежные поездки за пределы Польши за последние 5 лет",
    cV:"V. Финансовые средства для покрытия расходов на проживание",
    cVI:"VI. Медицинская страховка",
    cVII:"VII. Задержание / арест / запрет на выезд?",
    cVIII:"VIII. Судимость на территории Польши?",
    cVIIIdetail:"Если да – подробности:",
    cIX:"IX. Уголовное дело или дело о правонарушении?",
    cIXdetail:"Если да – подробности:",
    cX:"X. Обязательства по судебным или административным решениям?",
    cXdetail:"Если да – подробности:",
    yes:"да", no:"нет",
    submitBtn:"📤 Отправить",
    submittingBtn:"📤 Отправка...",
    successMsg:"✅ Данные успешно отправлены. Спасибо!",
    alertRequired:"Пожалуйста, заполните обязательные поля.",
    alertNoDelete:"Нельзя удалить последнюю запись.",
    alertEmployerEmailRequired:"Пожалуйста, укажите эл. почту работодателя.",
    alertEmployerEmailInvalid:"Недействительный адрес эл. почты работодателя.",
    selectDefault:"-- выберите --",
    sc1:"холост/не замужем", sc2:"женат/замужем",
    sc3:"разведён/разведена", sc4:"вдовец/вдова",
    ed1:"начальное", ed2:"среднее", ed3:"высшее", ed4:"профессиональное",
    cp1:"Выполнение работы",
    cp2:"Работа по профессии высокой квалификации",
    cp3:"Работа иностранцем, делегированным иностранным работодателем",
    cp4:"Ведение бизнеса",
    cp5:"Учёба (I, II степень или докторантура)",
    cp6:"Научные исследования",
    cp7:"Долгосрочная мобильность учёного",
    cp8:"Стажировка",
    cp9:"Европейское волонтёрство",
    cp10:"Проживание с гражданином Польши",
    cp11:"Проживание с иностранцем",
    cp12:"Мобильность члена семьи учёного",
    cp13:"Жертва торговли людьми",
    cp14:"Кратковременное пребывание",
    cp15:"Продление пребывания – сезонная работа",
    cp16:"Иные обстоятельства",
    pb1:"Безвизовый режим", pb2:"Виза",
    pb3:"Разрешение на временное проживание", pb4:"Документ другой страны Шенгена",
    woj:["Нижнесилезское","Куявско-Поморское","Люблинское","Любуское","Лодзинское",
         "Малопольское","Мазовецкое","Опольское","Подкарпатское","Подляское",
         "Поморское","Силезское","Свентокшиское","Варминско-Мазурское",
         "Великопольское","Западно-Поморское"]
  },

  en: {
    pageTitle:"ZUW Questionnaire",
    headerTitle:"Information Questionnaire",
    headerSub:"Office for Foreigners",
    secA:"A. PERSONAL DATA OF THE FOREIGNER",
    secB:"B. PLACE OF RESIDENCE",
    secC:"C. ADDITIONAL INFORMATION",
    noteB:"Current place of residence in the Republic of Poland.",
    f1:"1. Surname", f2:"2. Previous surname", f3:"3. Birth surname",
    f4:"4. First name(s)", f5:"5. Previous first name", f6:"6. Father's first name",
    f7:"7. Mother's first name", f8:"8. Mother's birth surname",
    f9:"9. Date of birth", f10:"10. Sex", f10m:"Male", f10k:"Female",
    f11:"11. Place of birth", f12:"12. Country of birth",
    f13:"13. Nationality", f14:"14. Citizenship",
    f15:"15. Marital status", f16:"16. Education",
    f17:"17. Physical description", f17a:"Height (cm)", f17b:"Eye colour", f17c:"Distinguishing marks",
    f18:"18. PESEL number", f19:"19. Phone number", f20:"20. Email",
    fEmployerEmail:"📧 Employer's email",
    b1:"1. Voivodeship", b2:"2. City / Town", b3:"3. Street",
    b4:"4. House number", b5:"5. Apartment number", b6:"6. Postal code",
    cI:"I. Main purpose of stay (choose ONE)",
    cIother:"If other – please specify:",
    cII:"II. Family members residing in Poland",
    famName:"Full name", famDob:"Date of birth",
    famRel:"Degree of kinship", famCit:"Citizenship",
    famAddr:"Place of residence", famStay:"Applying for residence permit?",
    famDep:"Dependent?", famCard:"Family member",
    addFam:"+ Add family member", delFam:"✕ Remove",
    cIII:"III. Stay in the territory of Poland",
    cIIIa:"a) All previous stays in Poland (periods and basis of stay)",
    cIIIb:"b) Are you currently in Poland?",
    cIIIdate:"Date of last entry to Poland",
    cIIIbasis:"On what basis are you currently in Poland?",
    cIV:"IV. Foreign travel outside Poland in the last 5 years",
    cV:"V. Financial means to cover living costs",
    cVI:"VI. Health insurance",
    cVII:"VII. Detention / arrest / travel ban?",
    cVIII:"VIII. Criminal record in Poland?",
    cVIIIdetail:"If yes – details:",
    cIX:"IX. Criminal or misdemeanour proceedings in Poland?",
    cIXdetail:"If yes – details:",
    cX:"X. Obligations arising from court or administrative decisions?",
    cXdetail:"If yes – details:",
    yes:"yes", no:"no",
    submitBtn:"📤 Submit",
    submittingBtn:"📤 Sending...",
    successMsg:"✅ Your data has been successfully sent. Thank you!",
    alertRequired:"Please fill in the required fields.",
    alertNoDelete:"Cannot delete the last entry.",
    alertEmployerEmailRequired:"Please provide the employer's email.",
    alertEmployerEmailInvalid:"Invalid employer email address.",
    selectDefault:"-- select --",
    sc1:"single", sc2:"married", sc3:"divorced", sc4:"widowed",
    ed1:"primary", ed2:"secondary", ed3:"higher", ed4:"vocational",
    cp1:"Employment",
    cp2:"Work in a highly qualified profession",
    cp3:"Work as a foreigner delegated by a foreign employer",
    cp4:"Running a business",
    cp5:"Studies (1st, 2nd degree or doctorate)",
    cp6:"Scientific research",
    cp7:"Long-term mobility of a researcher",
    cp8:"Internship",
    cp9:"European voluntary service",
    cp10:"Stay with a Polish citizen",
    cp11:"Stay with a foreigner",
    cp12:"Mobility of a researcher's family member",
    cp13:"Victim of human trafficking",
    cp14:"Short-term stay",
    cp15:"Extension of stay – seasonal work",
    cp16:"Other circumstances",
    pb1:"Visa-free movement", pb2:"Visa",
    pb3:"Temporary residence permit", pb4:"Schengen document of another state",
    woj:["Lower Silesian","Kuyavian-Pomeranian","Lublin","Lubusz","Łódź",
         "Lesser Poland","Masovian","Opole","Subcarpathian","Podlaskie",
         "Pomeranian","Silesian","Holy Cross","Warmian-Masurian",
         "Greater Poland","West Pomeranian"]
  }
};

let currentLang = 'pl';
function L() { return LANG[currentLang]; }

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
  renderAll();
}

// Render labels, selects and texts
function renderAll() {
  const l = L();
  document.title = l.pageTitle;
  document.getElementById('headerTitle').textContent = l.headerTitle;
  document.getElementById('headerSub').textContent   = l.headerSub;
  document.getElementById('secA').textContent = l.secA;
  document.getElementById('secB').textContent = l.secB;
  document.getElementById('secC').textContent = l.secC;
  document.getElementById('noteB').textContent = l.noteB;

  // Generic data-key labels
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (key && l[key] !== undefined) el.textContent = l[key];
  });

  // Default option text
  document.querySelectorAll('option[data-default]').forEach(el => el.textContent = l.selectDefault);

  // Stan cywilny
  [1,2,3,4].forEach(i => {
    const o = document.querySelector(`option[data-sc="${i}"]`);
    if (o) o.textContent = l['sc'+i];
  });

  // Wykształcenie
  [1,2,3,4].forEach(i => {
    const o = document.querySelector(`option[data-ed="${i}"]`);
    if (o) o.textContent = l['ed'+i];
  });

  // Cel pobytu options
  for (let i = 1; i <= 16; i++) {
    const el = document.querySelector(`[data-cp="${i}"]`);
    if (el) el.textContent = `${i}) ${l['cp'+i] || ''}`;
  }

  // Podstawa pobytu
  [1,2,3,4].forEach(i => {
    const el = document.querySelector(`[data-pb="${i}"]`);
    if (el) el.textContent = `${i}) ${l['pb'+i] || ''}`;
  });

  // Yes/No
  document.querySelectorAll('[data-yes]').forEach(el => el.textContent = l.yes);
  document.querySelectorAll('[data-no]').forEach(el => el.textContent = l.no);

  // Województwa
  const ws = document.getElementById('wojSelect');
  if (ws) {
    const val = ws.value;
    ws.innerHTML = `<option value="" data-default>${l.selectDefault}</option>`;
    l.woj.forEach(w => {
      const o = document.createElement('option');
      o.value = w; o.textContent = w;
      ws.appendChild(o);
    });
    ws.value = val;
  }

  // Submit button
  document.getElementById('submitBtn').textContent = l.submitBtn;

  // Family card labels and add button
  document.getElementById('addFamBtn').textContent = l.addFam;
  renderFamilyLabels();

  // Ensure employer email label updated
  const empLabel = document.querySelector('#employerEmailRow [data-key="fEmployerEmail"]');
  if (empLabel) empLabel.textContent = l.fEmployerEmail;

  // Wire the employer email toggle on purpose radios
  setupEmployerEmailToggle();
}

// Family cards helpers
function renderFamilyLabels() {
  const l = L();
  document.querySelectorAll('#familyBody .family-card').forEach((card, i) => {
    const num = card.querySelector('.card-num');
    if (num) num.textContent = `👤 ${l.famCard} #${i + 1}`;
    const del = card.querySelector('.del-row-btn');
    if (del) del.textContent = l.delFam || '✕';
    card.querySelectorAll('[data-fam]').forEach(el => {
      const key = el.dataset.fam;
      if (l[key] !== undefined) el.textContent = l[key];
    });
    card.querySelectorAll('option[data-default]').forEach(el => el.textContent = l.selectDefault);
    card.querySelectorAll('[data-yes]').forEach(el => el.textContent = l.yes);
    card.querySelectorAll('[data-no]').forEach(el => el.textContent = l.no);
  });
}

function familyCardHTML(num) {
  const l = L();
  return `
  <div class="family-card">
    <div class="family-card-header">
      <span class="card-num">👤 ${l.famCard} #${num}</span>
      <button type="button" class="del-row-btn" onclick="deleteCard(this)">${l.delFam}</button>
    </div>
    <div class="family-card-body">
      <div class="field-full">
        <label data-fam="famName">${l.famName}</label>
        <input type="text" name="fam_imie[]" />
      </div>
      <div>
        <label data-fam="famDob">${l.famDob}</label>
        <input type="date" name="fam_data[]" />
      </div>
      <div>
        <label data-fam="famRel">${l.famRel}</label>
        <input type="text" name="fam_stopien[]" />
      </div>
      <div>
        <label data-fam="famCit">${l.famCit}</label>
        <input type="text" name="fam_obyw[]" />
      </div>
      <div>
        <label data-fam="famAddr">${l.famAddr}</label>
        <input type="text" name="fam_miejsce[]" />
      </div>
      <div>
        <label data-fam="famStay">${l.famStay}</label>
        <select name="fam_pobyt[]">
          <option value="" data-default>${l.selectDefault}</option>
          <option value="yes" data-yes>${l.yes}</option>
          <option value="no"  data-no>${l.no}</option>
        </select>
      </div>
      <div>
        <label data-fam="famDep">${l.famDep}</label>
        <select name="fam_utrzym[]">
          <option value="" data-default>${l.selectDefault}</option>
          <option value="yes" data-yes>${l.yes}</option>
          <option value="no"  data-no>${l.no}</option>
        </select>
      </div>
    </div>
  </div>`;
}

function addFamilyCard() {
  const container = document.getElementById('familyBody');
  const num = container.querySelectorAll('.family-card').length + 1;
  container.insertAdjacentHTML('beforeend', familyCardHTML(num));
  renderFamilyLabels();
}

function deleteCard(btn) {
  const container = document.getElementById('familyBody');
  if (container.querySelectorAll('.family-card').length > 1) {
    btn.closest('.family-card').remove();
    updateCardNumbers();
  } else {
    alert(L().alertNoDelete);
  }
}

function updateCardNumbers() {
  const l = L();
  document.querySelectorAll('#familyBody .family-card').forEach((card, i) => {
    const num = card.querySelector('.card-num');
    if (num) num.textContent = `👤 ${l.famCard} #${i + 1}`;
  });
}

// Employer email toggle: show employerEmailRow when "cel_pobytu" == "1"
// also mark field required when visible
function setupEmployerEmailToggle() {
  const radios = document.querySelectorAll('input[name="cel_pobytu"]');
  const empRow = document.getElementById('employerEmailRow');
  if (!empRow || radios.length === 0) return;

  const empInput = empRow.querySelector('input[name="employer_email"]');
  const empLabel = empRow.querySelector('[data-key="fEmployerEmail"]');

  function update() {
    const checked = document.querySelector('input[name="cel_pobytu"][value="1"]');
    const show = checked && checked.checked;
    empRow.style.display = show ? '' : 'none';

    // required attribute and visual cue
    if (show) {
      empInput.required = true;
      empRow.classList.add('required');
      // append asterisk if not present
      if (empLabel && !empLabel.textContent.includes('*')) {
        empLabel.textContent = `${L().fEmployerEmail} *`;
      }
    } else {
      empInput.required = false;
      empRow.classList.remove('required');
      // restore label without asterisk
      if (empLabel) {
        empLabel.textContent = L().fEmployerEmail;
      }
      empInput.style.borderColor = '#c8d6e5';
    }
  }

  // remove previous listeners to avoid duplicates
  radios.forEach(r => {
    r.removeEventListener('change', update);
    r.addEventListener('change', update);
  });

  // initial state
  update();
}

// Basic email check
function isValidEmail(email) {
  // simple RFC-like check (not exhaustive)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Submit: basic validation and feedback + simulate sending
function submitForm() {
  const form = document.getElementById('mainForm');
  const required = ['nazwisko', 'imie', 'data_urodzenia', 'obywatelstwo'];
  let valid = true;
  required.forEach(name => {
    const el = form.querySelector(`[name="${name}"]`);
    if (el && !el.value.trim()) { el.style.borderColor = '#e74c3c'; valid = false; }
    else if (el) el.style.borderColor = '#c8d6e5';
  });

  // Employer email conditional validation
  const empRow = document.getElementById('employerEmailRow');
  const empInput = empRow ? empRow.querySelector('input[name="employer_email"]') : null;
  const purposeWork = document.querySelector('input[name="cel_pobytu"][value="1"]');
  const isWorkSelected = purposeWork && purposeWork.checked;

  if (isWorkSelected) {
    if (!empInput || !empInput.value.trim()) {
      if (empInput) empInput.style.borderColor = '#e74c3c';
      alert(L().alertEmployerEmailRequired);
      return;
    }
    if (!isValidEmail(empInput.value.trim())) {
      empInput.style.borderColor = '#e74c3c';
      alert(L().alertEmployerEmailInvalid);
      return;
    }
    // valid employer email -> reset border
    empInput.style.borderColor = '#c8d6e5';
  }

  if (!valid) { alert(L().alertRequired); return; }

  // Disable button and show spinner
  const btn = document.getElementById('submitBtn');
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span> ${L().submittingBtn}`;

  // Simulate network request
  setTimeout(() => {
    // Restore button
    btn.disabled = false;
    btn.textContent = originalText;

    // Show success message
    const msg = document.getElementById('successMsg');
    msg.textContent = L().successMsg;
    msg.style.display = 'block';
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    // Optional: Reset form (uncomment if needed)
    // form.reset();
  }, 1000);
}

// Init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('familyBody').innerHTML = familyCardHTML(1);
  renderAll();
});
