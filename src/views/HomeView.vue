<script setup></script>
<template>
  <RouterView />
  <body class="modal-body">
    <div class="text-center">
      <h1 class="display-4">Центр занятости</h1>
      <h3 class="t">Даже Утка сможет найти работу!</h3>
      <br />
      <div id="carouselExampleControls" class="carousel slide dd" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/img/site/1.jpg" class="d-block w-100 img-fluid" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/img/site/2.jpg" class="d-block w-100 img-fluid" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/img/site/3.jpg" class="d-block w-100 img-fluid" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden-focusable">Предыдущий</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden-focusable">Следующий</span>
        </button>
      </div>
      <br />
      <p>Адрес: 53-й кв-л, 2, Ангарск</p>
      <p>В настоящее время в Центре занятости зарегистрировано более 15 тысяч соискателей.</p>
      <p>
        Центр занятости предлагает платформу, где каждый может найти подходящую работу и приобрести
        новые навыки.
      </p>
      <p>
        Центр занятости предлагает 8 программ профессиональной переподготовки и повышения
        квалификации.
      </p>
      <p>
        Режим работы администрации и других работников Центра занятости по пятидневной рабочей
        неделе: начало работы в 9:00, перерыв на обед с 13:00 до 13:30, окончание работы в 17:30.
      </p>
      <p>Режим работы специалистов по пятидневной рабочей неделе по расписанию консультаций.</p>
      <p>Телефон приемной комиссии: 73955512105.</p>
      <p>Адрес электронной почты: jobcenter@aptangarsk.ru.</p>
    </div>
    <br />
  </body>
</template>
<style scoped>
.img-fluid {
  max-width: 100%;
  max-height: 500px;
}
</style>
