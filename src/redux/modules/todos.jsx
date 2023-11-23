import { createStore } from 'redux';

const initialState=[
    {
    id:1,
    title:'헤어지자 말해요~',
    contents: '나 사실 그대에게 좋은 사람이 아니에요~',
    isDone:true
},
{
    id:2,
    title:'todo2',
    contents: 'contc2',
    isDone:false
}
];
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const SWITCH_TODO = 'todos/SWITCH_TODO';



export const addTodo =(title,contents)=>({
    type:ADD_TODO,
    payload:{title,contents},
});
export const deleteTodo =(id)=>(
    {
        type:DELETE_TODO,
        payload:{id},
});

export const switchTodo =(id)=>(
    {
    type:SWITCH_TODO,
    payload:{id},
});

const todoReducer= (state =initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
        const newTodo ={
            id: state.length+1,
            title:action.payload.title,
            contents:action.payload.contents,
            isDone:false,
        };
        return[...state,newTodo];

        case DELETE_TODO:
            return state.filter((todo)=>(todo.id !== action.payload.id));
        case SWITCH_TODO:
        return state.map((todo)=>
        todo.id === action.payload.id ? {...todo,isDone: !todo.isDone}:todo
        )
        default:
            return state;
    };
   
}

export default todoReducer;