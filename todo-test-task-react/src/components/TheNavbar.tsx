import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

interface IProps {
  projectName: string
}

export default function TheNavbar({ projectName }: IProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {projectName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
