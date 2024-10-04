import { ref } from "vue";

const counterFunction = () => {
  //Data fields
  const counter = ref(0);

  //Methods
  const increment = () => {
    counter.value++;
  };
  const decrement = () => {
    if (counter.value > 0) {
      counter.value--;
    }
  };

  //Return values
  return { counter, increment, decrement };
};

//export the counter function
export default counterFunction;
