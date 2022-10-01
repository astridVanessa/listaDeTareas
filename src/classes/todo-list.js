import { Todo } from "./todo";

export class TodoList{
    constructor(){


    this.cargarLoaca()
    }


    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocal();
    }

    eliminarTodo(id){
         this.todos=this.todos.filter(todo=> todo.id !== id)
         this.guardarLocal();
         
    }

    marcarCompletado(id ){
        for(const todo of this.todos){
            console.log(id, todo.id)
            if(todo.id === id){
                todo.completado= !todo.completado;
                this.guardarLocal();
                break;

            }
        }
    }

    eliminarCompletados(){
        this.todos=this.todos.filter(todo=> !todo.completado)
    }

    guardarLocal(){
        localStorage.setItem('todo', JSON.stringify(this.todos));

    }
    cargarLoaca(){
  

     this.todos=(localStorage.getItem('todo'))? JSON.parse(localStorage.getItem('todo')): []
        


            this.todos= this.todos.map(Todo.fromJson)
        }
}


