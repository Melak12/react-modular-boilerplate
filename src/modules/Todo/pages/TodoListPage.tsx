import { useEffect, useState } from 'react'
import TodoList from '../components/TodoList.component'
import { Box, Container, Skeleton, Stack, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { getTodos } from '../services/todo.service';
import { Todo } from '../types/Todo';
import OverviewWrapper from '@app/components/common/OverviewWrapper';



function TodoListPage() {

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

                    <TodoList todos={todos} />

                </Box>
            </Container>
        </OverviewWrapper>
    )
}

export default TodoListPage