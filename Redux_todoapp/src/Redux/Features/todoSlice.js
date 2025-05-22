import { createSlice,nanoid } from "@reduxjs/toolkit";
export const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[
            {id:1,text:"task 1",completed:false}
        ]
    },
    reducers:{
        addTodo:(state,action)=>{
            const new_todo={
                id:nanoid(4),
                text:action.payload,
                completed:false
            }
            state.todos.push(new_todo)

        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((items)=>items.id!=action.payload)

            // [1,2,3,4] =>1,2,3
            // id=4

        },
        updateTodo:(state,action)=>{
            const todo=state.todos.find((items)=>items.id==action.payload.id)
            todo.text=action.payload.text
        },
        completeTodo:(state,action)=>{
            const todo=state.todos.find((items)=>items.id==action.payload)
            todo.completed=!todo.completed


        }
    }

})
export const {addTodo,deleteTodo,updateTodo,completeTodo}=todoSlice.actions

export default todoSlice.reducer

// todo -> task text , id,completed
/*
1 . createSlice()<- contains an object
    -> object contains three things
        -> name
        -> initialState
        -> reducers

*/