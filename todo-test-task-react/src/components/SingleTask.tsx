import * as React from 'react'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import CustomizedMenus from './Options'
import { TextField } from '@mui/material'
import { ITask } from '../interfaces'

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))

interface IProps {
  todo: ITask
  addTask: (title: string, taskId: string) => void
  editTask: (
    taskId: string,
    updates: { title: string; isDone: boolean }
  ) => void
  deleteTask: (taskId: string) => void
}

export default function SingleTask({
  todo,
  addTask,
  editTask,
  deleteTask,
}: IProps) {
  const [dense] = React.useState(false)
  const [secondary] = React.useState(false)

  const [isAddMode, setIsAddMode] = React.useState(false)
  const [isEditMode, setIsEditMode] = React.useState(false)

  const [subtask, setSubtask] = React.useState('')

  const handleAddSubTask = () => {
    if (!subtask?.length) return

    addTask(subtask, todo.id)
    setIsAddMode(false)
    setSubtask('')
  }

  const handleEditSubTask = () => {
    if (!subtask?.length) return

    editTask(todo.id, { title: subtask, isDone: todo.isDone })
    setIsEditMode(false)
    setSubtask('')
  }

  const handleTaskStatus = () => {
    editTask(todo.id, { title: todo.title, isDone: !todo.isDone })
    // setSubtask('')
  }

  const handleDeleteSubTask = () => {
    deleteTask(todo.id)
    setSubtask('')
  }

  return (
    <Demo>
      <List sx={{ height: 55 }} key={todo.id} dense={dense}>
        {
          <ListItem
            secondaryAction={
              <IconButton edge='end' aria-label='delete'>
                <CustomizedMenus
                  taskId={todo.id}
                  setIsAddMode={setIsAddMode}
                  setIsEditMode={setIsEditMode}
                  handleDeleteSubTask={handleDeleteSubTask}
                />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <FormControlLabel
                control={
                  <Checkbox onChange={handleTaskStatus} checked={todo.isDone} />
                }
                label=''
              />
            </ListItemAvatar>
            <ListItemText
              primary={todo.title}
              secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>
        }
      </List>
      {isAddMode || isEditMode ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          <TextField
            fullWidth
            onChange={(e) => setSubtask(e.target.value)}
            value={subtask}
            id='standard-basic'
            label={isAddMode ? 'Add subtask' : 'Edit subtask'}
            variant='standard'
          />
          <div style={{ marginTop: 13 }}>
            {isEditMode ? (
              <Button
                sx={{ marginRight: 1 }}
                onClick={handleEditSubTask}
                variant='contained'
                color='success'
              >
                edit
              </Button>
            ) : (
              <Button
                sx={{ marginRight: 1 }}
                onClick={handleAddSubTask}
                variant='contained'
                color='success'
              >
                add
              </Button>
            )}
            <Button
              onClick={() => {
                setIsAddMode(false)
                setIsEditMode(false)
              }}
              variant='contained'
              color='error'
            >
              cancel
            </Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </Demo>
  )
}
