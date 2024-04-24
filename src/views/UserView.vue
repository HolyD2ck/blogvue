<template>
  <div class="user">
    <h3>{{ user.name }} {{ user.fam }}</h3>
    <p>Почта:{{ user.email }}, Телефон:{{ user.phone }}, Пароль:{{ user.password }}</p>
    <button class="btn btn-danger" @click="deleteUser()">Удалить Пользователя</button>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteUser() {
      this.$emit('delete')
    }
  }
}
</script>

<style scoped>
.user {
  background-color: green;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.user h3 {
  color: white;
  margin: 0;
}

.user p {
  color: white;
  margin: 0;
}
</style>
