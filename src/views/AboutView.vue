<template>
  <h1 class="t">О нас</h1>

  <h2>Основные сведения:</h2>
  <p>Полное наименование: Центр Занятости "Даже Утка сможет найти работу"</p>
  <p>Сокращенное наименование: ЦЗ "Утка"</p>
  <p>Основано 1 августа 1947 года</p>

  <h2>Картина основания нашего Центра Занятости:</h2>
  <div class="co">
    <div>
      <p class="t">Говард Утка Старк закладывает фундамент:</p>
      <img class="ab" src="../assets/img/site/IronDuck2.jpg" />
    </div>
  </div>
  <h2 class="t">Услуги предоставляемые нашей организацией:</h2>

  <div class="about">
    <div>
      <img class="about" src="../assets/img/site/DuckWork1.jpg" />
      <p>Консультации по трудоустройству</p>
    </div>
    <div>
      <img class="about" src="../assets/img/site/DuckWork2.jpg" />
      <p>Помощь в составлении резюме</p>
    </div>
    <div>
      <img class="about" src="../assets/img/site/DuckWork3.jpg" />
      <p>Проведение тренингов по собеседованию</p>
    </div>
    <div>
      <img class="about" src="../assets/img/site/DuckWork4.jpg" />
      <p>Предоставление информации о вакансиях</p>
    </div>
  </div>

  <h2>Новости и события</h2>
  <p>Здесь мы будем публиковать последние новости и предстоящие события.</p>
</template>
<style scoped>
h1:focus {
  outline: none;
}
html {
  font-size: 14px;
}

body {
  margin-bottom: 60px;
  background-color: #f2f2f2;
  font-family: 'Comic Sans MS';
  color: #333;
}

h1,
h2 {
  color: #444;
  white-space: nowrap;
}

.t {
  text-align: center;
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

.a div:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img.about {
  width: 50%;
  height: auto;
  border-top-left-radius: 10px;
  margin-right: 10px;
}
img.ab {
  width: 40%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
  display: block;
  margin: 20px auto;
}
h2,
p {
  padding: 15px;
  margin: 0;
}
</style>
