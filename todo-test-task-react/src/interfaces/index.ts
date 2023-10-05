export interface ITasks {
  id: string
  children: ITask[]
}

export interface ITask {
  id: string
  title: string
  isDone: boolean
  children: ITask[]
}
