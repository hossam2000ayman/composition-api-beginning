import { onMounted, ref } from "vue";

const todoFunction = () => {
  //Data
  const todoList = ref([]);

  //Methods
  //Set to localStorage
  const addToLocalStorage = () => {
    localStorage.setItem("todo-list", JSON.stringify(todoList.value));
  };

  //Update todo list
  const updateTodoList = () => {
    //try to reserve the todoList value before reset it on re mounted page
    if (localStorage.getItem("todo-list")) {
      todoList.value = JSON.parse(localStorage.getItem("todo-list"));
    }
  };
  //Hooks LifeCycle
  onMounted(() => {
    updateTodoList();
  });

  return { todoList, addToLocalStorage };
};
export default todoFunction;
