<template>
  <br />
  <div id="employers">
    <button @click="createEmployer()" class="green-button" style="margin: 20px">
      Создать Работодателя
    </button>
    <button @click="runEmployerFaker()" class="yellow-button" style="margin: 10px">
      Запустить EmployerFaker
    </button>
    <button @click="deleteAllEmployers()" class="red-button" style="margin: 10px">
      Удалить всех Работодателей
    </button>
    <table>
      <tr>
        <th>id</th>
        <th>Фамилия</th>
        <th>Имя</th>
        <th>Организация</th>
        <th>Вакансия</th>
        <th>Телефон</th>
        <th>Email</th>
        <th>Фото</th>
        <th>Действия</th>
      </tr>
      <tr v-for="(item, index) in paginatedData" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.Фамилия }}</td>
        <td>{{ item.Имя }}</td>
        <td>{{ item.Организация }}</td>
        <td>{{ item.Вакансия }}</td>
        <td>{{ item.Телефон }}</td>
        <td>{{ item.Email }}</td>
        <td><img :src="server + item.Фото" /></td>
        <td>
          <button @click="editEmployer(item.id)" class="action-button">Редактировать</button>
          <br />
          <button @click="detailsEmployer(item.id)" class="action-button">Детали</button>
          <br />
          <button @click="deleteEmployer(item.id)" class="action-button">Удалить</button>
        </td>
      </tr>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage <= 1">Назад</button>
      <span>Страница {{ currentPage }} из {{ pageCount }}</span>
      <button @click="nextPage" :disabled="currentPage >= pageCount">Вперед</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  el: '#employers',
  data() {
    return {
      info: [],
      server: 'http://176.119.158.122:3000/',
      perPage: 10,
      currentPage: 1
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.info.length / this.perPage)
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return this.info.slice(start, end)
    }
  },
  methods: {
    runEmployerFaker() {
      axios
        .get(this.server + 'run-employer-faker')
        .then((response) => {
          console.log(response.data)
          setTimeout(() => {
            location.reload()
          }, 1000)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    deleteAllEmployers() {
      axios
        .delete(this.server + 'delete-all-employers')
        .then((response) => {
          console.log(response.data)
          setTimeout(() => {
            location.reload()
          }, 1000)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++
      }
    },
    deleteEmployer(id) {
      axios
        .delete(this.server + `employers/${id}`)
        .then(() => {
          this.info = this.info.filter((item) => item.id !== id)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    createEmployer() {
      this.$router.push('/employers/create')
    },
    editEmployer(id) {
      this.$router.push('/employers/edit/' + id)
    },
    detailsEmployer(id) {
      this.$router.push('/employers/' + id)
    }
  },
  mounted() {
    axios
      .get(this.server + 'employers/')
      .then((response) => {
        this.info = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>

<style scoped>
.action-button,
.green-button,
.yellow-button,
.red-button {
  background-color: #673ab7;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 130px;
}
.green-button {
  background-color: #519a4c;
}
.yellow-button {
  background-color: #c5b71e;
}
.red-button {
  background-color: rgb(212, 53, 53);
}
.action-button:hover {
  background-color: #512da8;
}
.green-button:hover {
  background-color: #2e7632;
}
.yellow-button:hover {
  background-color: #edd236;
}
.red-button:hover {
  background-color: rgb(159, 33, 33);
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #673ab7;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination button:hover {
  background-color: #512da8;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f2f2f2;
}

.t {
  text-align: center;
  color: #4a148c;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 30px;
}

td {
  width: 200px;
  height: 200px;
  vertical-align: middle;
  position: relative;
}

img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5%;
}

table {
  width: 100%;
  background-color: #fff;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: #673ab7;
  color: #fff;
}

td {
  text-overflow: ellipsis;
  white-space: nowrap;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
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
}

.btn {
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

.db {
  display: block;
}

.l {
  float: left;
  margin-right: 10px;
}
table {
  width: calc(100% - 40px);
  background-color: #fff;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
  margin-right: 20px;
}

@media (max-width: 768px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  th,
  td {
    border: none;
    text-align: left;
    padding: 10px;
  }

  th {
    background-color: transparent;
    color: #333;
  }

  td:before {
    content: attr(data-label);
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
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
}
</style>
