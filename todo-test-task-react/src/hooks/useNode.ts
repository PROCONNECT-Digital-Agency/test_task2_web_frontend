import { ITask, ITasks } from '../interfaces'

const useTasks = () => {
  const insertNode = (
    tasks: ITasks,
    taskId: string,
    item: { title: string }
  ): ITasks => {
    if (tasks.id === taskId) {
      tasks.children.push({
        id: JSON.stringify(Date.now()),
        title: item.title,
        isDone: false,
        children: [],
      })

      return tasks
    }

    const latestNode = tasks.children.map((ob) => {
      return insertNode(ob, taskId, item)
    })

    return { ...tasks, children: latestNode as ITask[] }
  }

  const editNode = (
    tasks: ITask,
    taskId: string,
    { title, isDone }: { title: string; isDone: boolean }
  ) => {
    if (tasks.id === taskId) {
      tasks.isDone = isDone
      tasks.title = title

      return tasks
    }

    tasks.children.map((ob) => {
      return editNode(ob, taskId, { title, isDone })
    })

    return { ...tasks }
  }

  const deleteNode = (tasks: ITasks, taskId: string) => {
    for (let i = 0; i < tasks.children.length; i++) {
      const currentTask = tasks.children[i]
      if (currentTask.id === taskId) {
        console.log(tasks.children[i])

        tasks.children.splice(i, 1)

        return tasks
      } else {
        deleteNode(currentTask, taskId)
      }
    }

    return tasks
  }

  return { insertNode, editNode, deleteNode }
}

export default useTasks
