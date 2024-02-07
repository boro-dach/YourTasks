import React from 'react'
import { BsCheck } from "react-icons/bs";
import cn from 'classnames'

export default function Check({isCompleted}) {
  return (
    <div className={cn('border-2 rounded-lg border-blue-500 w-6 h-6 mr-3 flex items-center justify-center duration-300', {
        'bg-blue-500': isCompleted,
    })}
    >
        {isCompleted && <BsCheck size={24} 
        className='text-gray-900'/>
        }
    </div>
  )
}
