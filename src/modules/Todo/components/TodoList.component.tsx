import React from 'react'
import { Todo } from '../types/Todo'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
type Props = {
  todos: Array<Todo>
}

function TodoList({ todos }: Props) {
  const navigate = useNavigate();
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        todos.map((todo: Todo) => (
          <ListItem key={todo.id}>
            <ListItemButton onClick={() => navigate(`single/${todo.id}`)}>
              <ListItemIcon>
                {todo.completed && <StarIcon />}
              </ListItemIcon>
              <ListItemText>{todo.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}

export default TodoList