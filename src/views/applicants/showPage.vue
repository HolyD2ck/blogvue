<template>
  <h1 class="t text-center mb-5">Подробности Соискателя</h1>
  <br /><br />
  <div id="applicantDetails" class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="applicant-info">
          <p><strong>Фамилия: </strong>{{ applicant.Фамилия }}</p>
          <p><strong>Имя: </strong>{{ applicant.Имя }}</p>
          <p><strong>Отчество: </strong>{{ applicant.Отчество }}</p>
          <p><strong>Образование: </strong>{{ applicant.Образование }}</p>
          <p><strong>Специальность: </strong>{{ applicant.Специальность }}</p>
          <p><strong>Дата Рождения: </strong>{{ applicant.Дата_Рождения }}</p>
          <p><strong>Телефон: </strong>{{ applicant.Телефон }}</p>
          <p><strong>Email: </strong>{{ applicant.Email }}</p>
          <div class="btn-group">
            <button @click="goBack" class="btn btn-secondary">Назад</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img
          :src="server + applicant.Фото"
          alt="Фото соискателя"
          class="img-fluid applicant-image mb-3"
          style="max-width: 340px; height: auto; border-radius: 5%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      applicant: {},
      server: 'http://176.119.158.122:3000/',
      isDataLoaded: false
    }
  },
  methods: {
    async fetchApplicantInfo() {
      try {
        const response = await axios.get(this.server + `applicants/${this.$route.params.id}`)
        this.applicant = response.data[0]
        this.isDataLoaded = true
      } catch (error) {
        console.error(error)
      }
    },
    goBack() {
      this.$router.push('/applicants')
    }
  },
  mounted() {
    this.fetchApplicantInfo()
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding: 0 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
}

.employer-info {
  text-align: center;
}

.employer-image {
  display: block;
  margin: 0 auto;
  border-radius: 0%;
  overflow: hidden;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  color: #4a148c;
  position: relative;
  z-index: 1;
  margin-bottom: 60px;
}

p {
  margin-bottom: 5px;
}

.accent-color {
  color: #007bff;
}

.feature-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

@media (max-width: 767.98px) {
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  min-width: 150px;
}

.btn-secondary {
  color: #fff;
  background-color: #673ab7;
  border-color: #673ab7;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #512da8;
  border-color: #512da8;
}

.btn-danger {
  color: #fff;
  background-color: #d32f2f;
  border-color: #d32f2f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c62828;
  border-color: #c62828;
}

.btn {
  display: block;
  margin-bottom: 10px;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #512da8;
  border-color: #512da8;
}

.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.btn-group.btn {
  margin-right: 10px;
}

.btn-group .btn {
  padding: 5px 10px;
}
</style>
