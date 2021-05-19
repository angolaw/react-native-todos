import React, { useState } from 'react';
import {Text} from 'react-native'
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle.length > 0){
      const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
        setTasks(oldState => [...oldState, data])

    }
    return 
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    let updatedTasks = tasks.map(task => {
      if(task.id === id) {
        return {...task, done: !task.done}
      }
      return task
    })
    setTasks(updatedTasks)


    
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(task => task.id !== id))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />
      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}