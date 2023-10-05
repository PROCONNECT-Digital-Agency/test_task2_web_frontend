import { useRef } from 'react'
import { ITask, ITasks } from '../interfaces'
import SingleTask from './SingleTask'

interface IProps {
  addTask: (title: string, taskId: string) => void
  editTask: (
    taskId: string,
    updates: { title: string; isDone: boolean }
  ) => void
  deleteTask: (taskId: string) => void
  searchQuery: string
  tasks: ITasks
  setTasks: React.Dispatch<React.SetStateAction<ITasks>>
  isChild?: boolean
}

export default function Tasks({
  addTask,
  editTask,
  deleteTask,
  tasks,
  setTasks,
  searchQuery,
  isChild = false,
}: IProps) {
  const dragItem = useRef<number | null>(null)
  const dragOverItem = useRef<number | null>(null)

  const handleSortTasks = () => {
    const _tasks = [...tasks.children]
    const draggedItemContent = _tasks.splice(dragItem.current!, 1)[0]
    _tasks.splice(dragOverItem.current!, 0, draggedItemContent)

    dragItem.current = null
    dragOverItem.current = null

    setTasks({ id: '1', children: _tasks })
  }

  return tasks.children?.map((task: ITask, index) => (
    <div style={{ paddingLeft: isChild ? 10 : 0 }} key={task.id}>
      {!isChild ? (
        <div
          style={{ cursor: 'move' }}
          draggable
          onDragStart={() => (dragItem.current = index)}
          onDragEnter={() => (dragOverItem.current = index)}
          onDragEnd={handleSortTasks}
          onDragOver={(e) => e.preventDefault()}
        >
          <SingleTask
            todo={task}
            addTask={addTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        </div>
      ) : (
        <SingleTask
          todo={task}
          addTask={addTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      )}

      {task.children?.length ? (
        <Tasks
          editTask={editTask}
          isChild={true}
          searchQuery={searchQuery}
          tasks={task}
          setTasks={setTasks}
          addTask={addTask}
          deleteTask={deleteTask}
        />
      ) : null}
    </div>
  ))
}
