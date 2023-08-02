export interface Task {
  id: number,
  title: string,
  isCheck: boolean
}

export type Tasks = Task[]

export type updateTaskParams = {
  id: number,
  check: boolean
}


//---------------------- interfaces de la API

export interface TaskApi {
  id: number
  todo: string
  completed: boolean
  userId: number
}
export interface TasksApi {
  todos: TaskApi[]
  total: number
  skip: number
  limit: number
}
