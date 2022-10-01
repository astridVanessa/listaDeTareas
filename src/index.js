import './styles.css';

import {Todo} from './classes/todo.js'
import{TodoList} from './classes/todo-list.js'
import {crearTodoHtml } from './js/componentes'
 export const todolis= new TodoList();

todolis.todos.forEach(crearTodoHtml)

//localStorage.setItem('mi-key','ABC12377')
