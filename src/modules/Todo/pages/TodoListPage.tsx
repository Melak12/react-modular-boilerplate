import React, { useEffect, useState } from 'react'
import TodoList from '../components/TodoList.component'
import { Box, Card, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton, Stack, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { getTodos } from '../services/todo.service';
import { Todo } from '../types/Todo';
import StarIcon from '@mui/icons-material/Star';
type Props = {}
const OverviewWrapper = styled(Box)(
    () => `
      overflow: auto;
      flex: 1;
      overflow-x: hidden;
      align-items: center;
  `
);
function TodoListPage({ }: Props) {

    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        getTodos().then((response) => {
            console.log("Todo List", response);
            setTodos(response);

        }).catch((err) => {
            console.log("Error in fetching todo. ", err);

        }).finally(() => {
            setIsLoading(false);
        })
    }, [])

    return (
        <OverviewWrapper>
            <Helmet>
                <title>Todo List</title>
            </Helmet>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" py={5} my={10} alignItems="center">
                    <Stack spacing={2}>
                        <h3>Todo List</h3>

                        {isLoading && <Box sx={{ width: 300 }}>
                            <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={false} />
                        </Box>}
                    </Stack>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {
                            todos.map((todo: Todo) => (
                                <ListItem key={todo.id}>

                                    <ListItemButton>
                                        <ListItemIcon>
                                            {todo.completed && <StarIcon />}
                                        </ListItemIcon>
                                        <ListItemText>{todo.title}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>

                </Box>
            </Container>
        </OverviewWrapper>
    )
}

export default TodoListPage