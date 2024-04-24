<template>
  <div id="createApplicant">
    <br />
    <h1 style="text-align: center; color: rebeccapurple">Создать Соискателя</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="surname">Фамилия</label>
        <input id="surname" v-model="form.surname" required />
      </div>
      <div class="form-group">
        <label for="name">Имя</label>
        <input id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="patronymic">Отчество</label>
        <input id="patronymic" v-model="form.patronymic" required />
      </div>
      <div class="form-group">
        <label for="education">Образование</label>
        <input id="education" v-model="form.education" required />
      </div>
      <div class="form-group">
        <label for="specialty">Специальность</label>
        <input id="specialty" v-model="form.specialty" required />
      </div>
      <div class="form-group">
        <label for="birth_date">Дата Рождения</label>
        <input id="birth_date" type="date" v-model="form.birth_date" required />
      </div>
      <div class="form-group">
        <label for="phone">Телефон</label>
        <input id="phone" v-model="form.phone" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="photo">Фото</label>
        <input id="photo" type="file" @change="onFileChange" required />
        <img v-if="form.photoUrl" :src="form.photoUrl" />
      </div>
      <button type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        surname: '',
        name: '',
        patronymic: '',
        education: '',
        specialty: '',
        birth_date: '',
        phone: '',
        email: '',
        photo: null,
        photoUrl: null
      }
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0]
      this.form.photo = file
      this.form.photoUrl = URL.createObjectURL(file)
    },

    submitForm() {
      const formData = new FormData()
      Object.keys(this.form).forEach((key) => {
        if (key !== 'photoUrl') {
          formData.append(key, this.form[key])
        }
      })

      axios
        .post('http://176.119.158.122:3000/applicants/', formData)
        .then((response) => {
          console.log(response)
          this.$router.push('/')
          this.$router.push('/applicants')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}

.t {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  margin-top: 0;
}

h4 {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
  margin-top: 0;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
}

form {
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: rebeccapurple;
}

form input,
form textarea,
form select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

form input[type='checkbox'] {
  width: auto;
  margin-right: 5px;
}

form input[type='submit'] {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

form input[type='submit']:hover {
  background-color: #444;
}

#file-preview {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
}

button {
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
}

button {
  color: #fff;
  background-color: #673ab7;
  border-color: #673ab7;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

button {
  display: block;
  margin-bottom: 10px;
}

button:hover {
  color: #fff;
  background-color: #512da8;
  border-color: #512da8;
}
img {
  width: 50%;
  height: auto;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
}
</style>
