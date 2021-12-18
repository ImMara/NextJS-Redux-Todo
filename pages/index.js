import styles from '../styles/Home.module.css'
import { createStore } from 'redux';
import { todoAppReducer } from '../store/reducers';
import Filter from "../components/Filter";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const store = createStore(todoAppReducer);

export default function Home() {
  return (
    <div className={styles.container}>
      <h3>Add todo</h3>
      <hr/>
      <AddTodo/>
      <hr/>
      <div>
        <div>
          <Filter/>
        </div>
        <div>
          <TodoList/>
        </div>
      </div>
    </div>
  )
}
