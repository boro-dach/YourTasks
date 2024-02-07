import React from 'react'
import Check from './Check'
import cn from 'classnames'
import {BsTrash} from 'react-icons/bs'

function TodoItem({ todo, changeTodo, removeTodo }) {
  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
      <button 
        className='flex items-center'
        onClick={() => changeTodo(todo._id)}
      >    
        <Check isCompleted={todo.isCompleted} />
        <span 
          className={cn({
            'line-through text-zinc-600': todo.isCompleted,
            'duration-300': true
          })}
        >
          {todo.title}
        </span>  
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <BsTrash 
        size={22} 
        className='duration-300 text-zinc-400 hover:text-zinc-100'/>
      </button>
    </div>
  )
}

export default TodoItem