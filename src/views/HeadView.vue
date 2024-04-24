<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <div class="container-fluid d-flex align-items-center">
      <RouterLink to="/" class="navbar-brand d-flex align-items-center">
        <img
          src="/src/assets/duck.svg"
          alt=""
          width="auto"
          height="45"
          class="d-inline-block align-text-top"
        />
        <span class="ms-2">Центр Занятости</span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page">Главная</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link active" aria-current="page">О нас</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link active" aria-current="page"
              >Контакты</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/employers" class="nav-link active" aria-current="page"
              >Работодателя</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/applicants" class="nav-link active" aria-current="page"
              >Работники</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
