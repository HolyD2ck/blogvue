<template>
  <h1 class="t">Тест Входа</h1>
  <div class="cont">
    <div class="mb-3">
      <label for="name" class="form-label">Имя</label>
      <input v-model="userName" type="text" class="form-control" id="name" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input v-model="userPassword" type="password" class="form-control" id="password" />
    </div>
    <button @click="findUser()" class="btn btn-primary">Отправить</button>
    <h2 class="t">{{ message }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      userPassword: '',
      message: ''
    }
  },
  methods: {
    findUser() {
      const users = JSON.parse(localStorage.getItem('users')) || []
      const find = users.some(
        (user) => user.name == this.userName && user.password == this.userPassword
      )
      if (find) {
        this.message = 'Вы успешно авторизовались как ' + this.userName
      } else {
        this.message = 'Неверно введен логин или пароль!'
      }
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
