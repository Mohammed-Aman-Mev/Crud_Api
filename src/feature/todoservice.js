import axios from "axios";

const API_URl = "/api/todo";

const getTodos = async () => {
  const response = await axios.get(API_URl);
  return response.data;
};

const postTodos = async (todo) => {
  const response = await axios.post(API_URl + "/", todo);

  return response.data;
};

const delTodo = async (id) => {
  const response = await axios.delete(API_URl + "/" + id);

  // console.log(response);
  return response.data;
};

const updateTodo = async (updateTodo) => {
  const response = await axios.put(API_URl + "/" + updateTodo._id, updateTodo);
  // console.log(response);
  return response.data;
};

const todoservice = {
  getTodos,
  postTodos,
  delTodo,
  updateTodo,
};

export default todoservice;
