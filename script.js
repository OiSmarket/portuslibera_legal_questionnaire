function updateCardNumbers() {
  document.querySelectorAll('#familyBody .family-card').forEach((card, i) => {
    const header = card.querySelector('.card-num');
    if (header) header.textContent = `👤 Член семьи / Член сім'ї / Członek rodziny #${i + 1}`;
  });
}

function addFamilyCard() {
  const container = document.getElementById('familyBody');
  const num = container.querySelectorAll('.family-card').length + 1;
  const card = document.createElement('div');
  card.className = 'family-card';
  card.innerHTML = `
    <div class="family-card-header">
      <span class="card-num">👤 Член семьи / Член сім'ї / Członek rodziny #${num}</span>
      <button type="button" class="del-row-btn" onclick="deleteCard(this)">✕ Usuń / Видалити / Удалить</button>
    </div>
    <div class="family-card-body">
      <div class="field-full">
        <div class="flabel">Imię i nazwisko <span>Ім'я і прізвище</span><em>Имя и фамилия</em></div>
        <input type="text" name="fam_imie[]">
      </div>
      <div>
        <div class="flabel">Data urodzenia <span>Дата народження</span><em>Дата рождения</em></div>
        <input type="date" name="fam_data[]">
      </div>
      <div>
        <div class="flabel">Stopień pokrewieństwa <span>Ступінь рідства</span><em>Степень родства</em></div>
        <input type="text" name="fam_stopien[]">
      </div>
      <div>
        <div class="flabel">Obywatelstwo <span>Громадянство</span><em>Гражданство</em></div>
        <input type="text" name="fam_obyw[]">
      </div>
      <div>
        <div class="flabel">Miejsce zamieszkania <span>Місце проживання</span><em>Место проживания</em></div>
        <input type="text" name="fam_miejsce[]">
      </div>
      <div>
        <div class="flabel">Ubiega się o pobyt? <span>Подає заяву?</span><em>Подаёт заявку?</em></div>
        <select name="fam_pobyt[]">
          <option value="">-- wybierz --</option>
          <option>tak / так / да</option>
          <option>nie / ні / нет</option>
        </select>
      </div>
      <div>
        <div class="flabel">Na utrzymaniu? <span>На утриманні?</span><em>На иждивении?</em></div>
        <select name="fam_utrzym[]">
          <option value="">-- wybierz --</option>
          <option>tak / так / да</option>
          <option>nie / ні / нет</option>
        </select>
      </div>
    </div>
  `;
  container.appendChild(card);
}

function deleteCard(btn) {
  const container = document.getElementById('familyBody');
  if (container.querySelectorAll('.family-card').length > 1) {
    btn.closest('.family-card').remove();
    updateCardNumbers();
  } else {
    alert('Nie można usunąć ostatniego wpisu.\nНе можна видалити останній запис.\nНельзя удалить последнюю запись.');
  }
}

function submitForm() {
  const form = document.getElementById('mainForm');
  const required = ['nazwisko', 'imie', 'data_urodzenia', 'obywatelstwo'];
  let valid = true;

  required.forEach(name => {
    const el = form.querySelector(`[name="${name}"]`);
    if (el && !el.value.trim()) {
      el.style.borderColor = '#e74c3c';
      valid = false;
    } else if (el) {
      el.style.borderColor = '#c8d6e5';
    }
  });

  if (!valid) {
    alert('Proszę wypełnić wymagane pola.\nБудь ласка, заповніть обов\'язкові поля.\nПожалуйста, заполните обязательные поля.');
    return;
  }

  document.getElementById('successMsg').style.display = 'block';
  window.scrollTo(0, document.body.scrollHeight);
}
