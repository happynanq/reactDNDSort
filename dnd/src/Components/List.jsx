import React from 'react';
import ListItem from './ListItem';

const List = ()=>{
  const listTodo = [
    {todo:"Встать", id:1},
    {todo:"Поесть", id:2},
    {todo:"Умыться", id:3},
    {todo:"Работать", id:4},

  ]
  return(
    <div className="container">
    {
      listTodo.map(e=><ListItem todo={e.todo} id={e.id} />)
    }
      
    </div>
  )
}
export default List