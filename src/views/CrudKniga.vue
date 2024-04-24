<template>
  <div class="n">
    <form @submit.prevent="addBook">
      <label for="title">Название:</label>
      <input type="text" id="title" v-model="newBook.title" required />
      <label for="author">Автор:</label>
      <input type="text" id="author" v-model="newBook.author" required />
      <label for="date">Дата Издания</label>
      <input type="date" id="date" v-model="newBook.date" required />
      <label for="description">Описание:</label>
      <textarea type="text" id="description" v-model="newBook.description" required></textarea>
      <br />
      <button class="btn btn-primary" type="submit">Сохранить</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Автор</th>
          <th>Дата Выхода</th>
          <th>Описание</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="index">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.date }}</td>
          <td class="d">{{ book.description }}</td>
          <td>
            <button class="btn btn-warning" @click="editBook(index)">Изменить</button>
            <br />
            <br />
            <button class="btn btn-danger" @click="deleteBook(index)">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBook: { title: '', description: '', author: '', data: '' },
      books: JSON.parse(localStorage.getItem('books')) || [],
      editingIndex: null
    }
  },
  methods: {
    addBook() {
      if (this.editingIndex !== null) {
        this.books[this.editingIndex] = { ...this.newBook }
        this.editingIndex = null
      } else {
        this.books.push({ ...this.newBook })
      }
      this.newBook = { title: '', description: '', author: '', data: '' }
      this.saveBooks()
    },
    editBook(index) {
      this.newBook = { ...this.books[index] }
      this.editingIndex = index
    },
    deleteBook(index) {
      this.books.splice(index, 1)
      this.saveBooks()
    },
    saveBooks() {
      localStorage.setItem('books', JSON.stringify(this.books))
    }
  }
}
</script>
<style scoped>
.n {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

form {
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: #3e4451;
  margin-bottom: 25px;
}

label {
  margin-bottom: 5px;
  color: #d0d0d0;
}

input {
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #616161;
}

th {
  border: 1px solid #333;
  border-color: #333;
  background-color: darkgray;
  color: red;
}

table {
  margin-left: auto;
  margin-right: auto;
  background-color: lightgray;
}
td,
th {
  padding: 10px;
  border: 1px solid #333;
  margin: 10px 0;
  text-align: center;
  color: #333;
  border-color: #333;
}
.d {
  padding: 10px;
  border: 1px solid #333;
  margin: 10px 0;
  text-align: center;
  color: #333;
  border-color: #333;
  max-width: 600px;
}
</style>
