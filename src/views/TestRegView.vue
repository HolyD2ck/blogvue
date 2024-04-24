<template>
  <h1 class="t">Тест Регистрации</h1>
  <div class="cont">
    <div class="mb-3">
      <label for="name" class="form-label">Имя</label>
      <input v-model="userName" type="text" class="form-control" id="name" />
    </div>
    <div class="mb-3">
      <label for="fam" class="form-label">Фамилия</label>
      <input v-model="userFam" type="text" class="form-control" id="fam" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Почта</label>
      <input v-model="userEmail" type="email" class="form-control" id="email" />
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Телефон</label>
      <input v-model="userPhone" type="text" class="form-control" id="phone" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input v-model="userPassword" type="password" class="form-control" id="password" />
    </div>
    <p class="mb-3 error">{{ error }}</p>
    <button @click="SendData()" class="btn btn-primary">Отправить</button>
  </div>
  <div v-if="users.length == 0" className="user">Пользователей еще нет</div>
  <div v-if="users.length == 1" className="user">Всего 1 Пользователь</div>
  <div v-if="users.length > 1" className="user">Всего {{ users.length }} Пользователей</div>

  <User v-for="(el, index) in users" :key="index" :user="el" @delete="DeleteUser(index)" />
</template>

<script>
import User from '../views/UserView.vue'
console.log(localStorage.getItem('users'))
export default {
  components: { User },
  data() {
    return {
      users: JSON.parse(localStorage.getItem('users')) || [],
      userName: '',
      userFam: '',
      userEmail: '',
      userPhone: '',
      userPassword: '',
      error: ''
    }
  },
  methods: {
    SendData() {
      if (this.userName == '') {
        this.error = 'Имя не указанно'
        return
      } else if (this.userFam == '') {
        this.error = 'Фамилия не указанна'
        return
      } else if (this.userEmail == '') {
        this.error = 'Почта не указанна'
        return
      } else if (this.userPhone == '') {
        this.error = 'Номер не указан'
        return
      } else if (this.userPassword == '') {
        this.error = 'Пароль не указан'
        return
      }
      this.error = ''
      this.users.push({
        name: this.userName,
        fam: this.userFam,
        password: this.userPassword,
        email: this.userEmail,
        phone: this.userPhone
      })
      localStorage.setItem('users', JSON.stringify(this.users))
      console.log(localStorage.getItem('users'))
    },
    DeleteUser(index) {
      this.users.splice(index, 1)
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  }
}
</script>
<style scoped>
.cont {
  max-width: 600px;
  margin: 0 auto;
}
.mb-3 {
  margin-bottom: 1rem;
}
.error {
  color: red;
}
</style>
