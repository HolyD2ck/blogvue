<template>
  <div>
    <h1 class="t">Вход</h1>
    <div class="cont">
      <div class="mb-3">
        <label for="email" class="form-label">Почта</label>
        <input v-model="username" type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input v-model="password" type="password" class="form-control" id="password" />
      </div>
      <button class="btn btn-primary" @click="login">Войти</button>
      <p class="message" v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// TODO: замените настройки на свои настройки Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBwIZQqJTkdwRcZ0E4hVFe5iWaMYmuYsno',
  authDomain: 'd2ckproject.firebaseapp.com',
  projectId: 'd2ckproject',
  storageBucket: 'd2ckproject.appspot.com',
  messagingSenderId: '23028867207',
  appId: '1:23028867207:web:ea08df1372cf4e75505822',
  measurementId: 'G-N3JPWMSL19'
}

// Инициализируйте Firebase
const app = initializeApp(firebaseConfig)

// Получите экземпляр auth
const auth = getAuth(app)

export default {
  data() {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.username, this.password)
        this.message = 'Успешный вход!'
        this.$router.push('/mass')
      } catch (error) {
        this.message = 'Ошибка при входе: ' + error.message
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
.message {
  color: red;
}
</style>
