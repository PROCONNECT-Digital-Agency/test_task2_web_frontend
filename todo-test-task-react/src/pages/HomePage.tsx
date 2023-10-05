import { useEffect, useState } from 'react'
import { Container, Card, TextField, Button, Box, Grid } from '@mui/material'
import TheNavbar from '../components/TheNavbar'
import Tasks from '../components/Tasks'
import useTasks from '../hooks/useNode'
import { ITask, ITasks } from '../interfaces'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [projectName, setProjectName] = useState('Project Name')
  const [taskTitle, setTaskTitle] = useState('')

  const { insertNode, editNode, deleteNode } = useTasks()

  const initialState = {
    id: '1',
    children: [
      {
        id: '2',
        title: 'Plays',
        isDone: false,
        children: [
          {
            id: '3',
            title: 'football',
            isDone: false,
            children: [
              { id: '4', title: 'volleyball', isDone: false, children: [] },
            ],
          },
        ],
      },
      { id: '5', title: 'sleeping', isDone: false, children: [] },
      {
        id: '6',
        title: 'Playing',
        isDone: false,
        children: [{ id: '7', title: 'guitar', isDone: false, children: [] }],
      },
    ],
  }
  const [tasks, setTasks] = useState<ITasks>(initialState)
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([])

  const addTask = (title: string, taskId: string) => {
    if (!title) return

    setTasks(insertNode(tasks, taskId, { title }))
    setTaskTitle('')
  }

  const editTask = (
    taskId: string,
    updates: { title: string; isDone: boolean }
  ) => {
    setTasks(
      editNode(tasks as ITask, taskId, {
        title: updates.title,
        isDone: updates.isDone,
      })
    )
  }

  const deleteTask = (taskId: string) => {
    setTasks(deleteNode({ ...tasks }, taskId))
  }

  const exportToJson = () => {
    const content = JSON.stringify({
      tasks,
      projectName,
      searchQuery,
      filteredTasks,
    })
    const fileName = `${projectName}.txt`
    const data = `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`
    const link = document.createElement('a')

    link.setAttribute('href', data)
    link.setAttribute('download', fileName)
    link.click()
  }

  const importFromFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    if (!file) return alert('File not found')

    const reader = new FileReader()
    reader.onload = function () {
      const content = JSON.parse(reader.result as string)

      if (content?.projectName.length) {
        setTasks(content?.tasks)
        setProjectName(content?.projectName)
        setSearchQuery(content?.searchQuery)
        setFilteredTasks(content?.filteredTasks)
      }
    }

    reader.readAsText(file)
  }

  useEffect(() => {
    document.title = projectName
  }, [projectName])

  useEffect(() => {
    if (searchQuery?.length === 0) {
      return setFilteredTasks([])
    }

    findNode(tasks, searchQuery)
    function findNode(tasks: ITasks, title: string) {
      for (let i = 0; i < tasks.children.length; i++) {
        const currTask = tasks.children[i]
        if (currTask.title.toLowerCase().includes(title.toLowerCase())) {
          setFilteredTasks([currTask])

          return currTask
        } else {
          findNode(currTask, title)
        }
      }

      setFilteredTasks([])
      return tasks.children
    }
  }, [searchQuery])

  return (
    <>
      <TheNavbar projectName={projectName} />
      <Container sx={{ padding: 0, display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            padding: '5%',
            margin: '20px 2%',
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '90%',
          }}
        >
          <Container>
            <TextField
              fullWidth
              sx={{ marginBottom: 3 }}
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
              label='Project name'
              variant='standard'
            />
            <Container
              style={{
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextField
                fullWidth
                onChange={(e) => setTaskTitle(e.target.value)}
                value={taskTitle}
                label='Add task'
                variant='standard'
              />
              <Button
                onClick={() => addTask(taskTitle, tasks.id)}
                variant='contained'
              >
                add
              </Button>
            </Container>
            <TextField
              fullWidth
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              label='Search....'
              variant='standard'
            />
          </Container>
          <Container>
            <Box sx={{ flexGrow: 1, margin: '20px 0' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Tasks
                    searchQuery={searchQuery}
                    addTask={addTask}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    tasks={
                      (filteredTasks.length && {
                        id: '1',
                        children: filteredTasks,
                      }) ||
                      tasks
                    }
                    setTasks={setTasks}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
          <input
            accept='text/plain'
            onChange={importFromFile}
            type='file'
            id=''
          />
          <br />
          <Button onClick={exportToJson} variant='contained'>
            Export project
          </Button>
        </Card>
      </Container>
    </>
  )
}
