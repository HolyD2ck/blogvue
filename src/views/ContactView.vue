<template>
  <h1 class="t">Наши Контакты:</h1>

  <div class="contact">
    <div>
      <h2 class="t">Директор</h2>
      <img class="photo" src="@/assets/img/site/Director.jpg" />
      <p>Фамилия: Иванов</p>
      <p>Имя: Иван</p>
      <p>Телефон: +7 900 123 4567</p>
      <p>Электронная почта: ivanov@company.com</p>
    </div>

    <div>
      <h2 class="t">Заместитель Директора</h2>
      <img class="photo" src="@/assets/img/site/Zam.jpg" />
      <p>Фамилия: Петров</p>
      <p>Имя: Петр</p>
      <p>Телефон: +7 900 234 5678</p>
      <p>Электронная почта: petrov@company.com</p>
    </div>

    <div>
      <h2 class="t">Главный Бухгалтер</h2>
      <img class="photo" src="@/assets/img/site/Buh.jpg" />
      <p>Фамилия: Сидорова</p>
      <p>Имя: Александра</p>
      <p>Телефон: +7 900 345 6789</p>
      <p>Электронная почта: sidorova@company.com</p>
    </div>

    <div>
      <h2 class="t">Специальст Вакансий</h2>
      <img class="photo" src="@/assets/img/site/Vaka.jpg" />
      <p>Фамилия: Михайлов</p>
      <p>Имя: Михаил</p>
      <p>Телефон: +7 900 456 7890</p>
      <p>Электронная почта: mikhailov@company.com</p>
    </div>
    <div>
      <h2 class="t">Мэнеджер</h2>
      <img class="photo" src="@/assets/img/site/Menejer.jpg" />
      <p>Фамилия: Алексеев</p>
      <p>Имя: Алексей</p>
      <p>Телефон: +7 900 567 8901</p>
      <p>Электронная почта: alexeev@company.com</p>
    </div>
    <div>
      <h2 class="t">Глава отдела Маркетинга</h2>
      <img class="photo" src="@/assets/img/site/Market.jpg" />
      <p>Фамилия: Федоров</p>
      <p>Имя: Федор</p>
      <p>Телефон: +7 900 678 9012</p>
      <p>Электронная почта: fedorov@company.com</p>
    </div>
  </div>
</template>
<style scoped>
.contact {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.contact div {
  flex: 1 0 30%;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 50px;
  background-color: lightgray;
}

.contact div:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img.photo {
  width: 60%;
  height: auto;
  border-radius: 15px;
  margin: 20px auto;
  object-fit: cover;
  display: block;
}

img.db {
  width: 200px;
  height: auto;
  border-radius: 5px;
}

.co {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.co div {
  flex: 1 0 30%;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 50px;
  background-color: lightgray;
}

.co div:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.about div {
  flex: 0 0 calc(50% - 1em);
  margin: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: lightgray;
  text-align: left;
  display: flex;
  align-items: center;
}

img.about {
  width: 50%;
  height: auto;
  border-top-left-radius: 10px;
  margin-right: 10px;
}
</style>
