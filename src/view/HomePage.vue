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
import { ref } from "vue";
import todoMixins from "@/mixins/todo-mixins.js";

//Data & Methods from mixins
const { todoList, addToLocalStorage } = todoMixins();
const todoObject = ref({
  id: "",
  title: "",
  from: "",
  to: "",
  createdAt: new Date(),
  isCompleted: false,
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
    isCompleted: false,
  };
};
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
