<template>
  <div class="home">
    <h1>Add New Todo</h1>
    <form action="" @submit.prevent="addTodo">
      <input
        type="text"
        v-model="todoObject.title"
        placeholder="Enter your todo"
        required
      />
      <br />
      <input
        type="date"
        v-model="todoObject.from"
        placeholder="from"
        style="margin-top: 20px"
        required
      />
      <input
        type="date"
        v-model="todoObject.to"
        placeholder="to"
        style="margin-left: 20px; margin-bottom: 20px"
        required
      />
      <br />
      <input type="submit" id="submit-input" value="Add" />
    </form>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

//Data
const todoList = ref([]);
const todoObject = ref({
  id: "",
  title: "",
  from: "",
  to: "",
  createdAt: new Date(),
});

//Methods

//Add Todo
const addTodo = () => {
  todoObject.value.id = todoList.value.length + 1;
  todoList.value.push(todoObject.value);
  addToLocalStorage();
  alert("todo added successfully");
  //reset the object value to be able adding another object
  todoObject.value = {
    id: "",
    title: "",
    from: "",
    to: "",
    createdAt: new Date(),
  };
};

//Set to localStorage
const addToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todoList.value));
};

//Update todo list
const updateTodoList = () => {
  //try to reserve the todoList value before reset it on re mounted page
  if (localStorage.getItem("todos")) {
    todoList.value = JSON.parse(localStorage.getItem("todos"));
  }
};

onMounted(() => {
  updateTodoList();
});
</script>

<style scoped lang="scss">
form {
  input[type="text"] {
    width: 50%;
    padding: 10px;
    font-size: 20px;
  }
  #submit-input {
    padding: 10px 20px;
    font-size: 20px;
    background-color: rgb(43, 52, 43);
    color: white;
    border: 1px solid rgb(43, 52, 43);
    border-radius: 7px;
    margin-left: 20px;
  }
}
</style>
