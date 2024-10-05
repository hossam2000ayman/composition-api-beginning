<template>
  <div class="show-todo">
    <h1>show todo</h1>
    <table v-if="todoList.length > 0">
      <thead>
        <tr>
          <th>Text</th>
          <th>From</th>
          <th>To</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="todo in todoList"
          :key="todo.id"
          :style="`${
            todo.isCompleted
              ? 'background-color: lightgreen; color: white'
              : 'background-color: transparent'
          }`"
        >
          <td>{{ todo.title }}</td>
          <td>{{ new Date(todo.from).toLocaleDateString() }}</td>
          <td>{{ new Date(todo.to).toLocaleDateString() }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>
            <div>
              <button class="completed" @click="completeTodo(todo)">
                {{ !todo.isCompleted ? "Complete" : "InComplete" }}
              </button>
              <button class="deleted" @click="deleteTodo">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h1 v-else style="line-height: 15">No Todos To Show</h1>
  </div>
</template>

<script setup>
import todoMixins from "@/mixins/todo-mixins.js";

//Data from mixins
const { todoList, addToLocalStorage } = todoMixins();

//Methods
//delete todo
const deleteTodo = (index) => {
  todoList.value.splice(index, 1);
  //update the current todo list on local storage
  addToLocalStorage();
};

//complete todo
const completeTodo = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  //update the current todo list on local storage
  addToLocalStorage();
};
</script>

<style scoped lang="scss">
table {
  width: 100%;
  tr,
  th,
  td {
    border: 1px solid;
    padding: 5px;
  }
  td {
    button {
      background-color: rgb(73, 236, 73);
      color: white;
      font-size: 17px;
      padding: 5px 10px;
      border: 1px solid rgb(73, 236, 73);
      border-radius: 10px;
      margin: 10px;
      &.deleted {
        background-color: indianred;
        border: 1px solid indianred;
      }
    }
  }
}
</style>
