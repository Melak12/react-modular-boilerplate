import OverviewWrapper from '@app/components/common/OverviewWrapper'
import { Container, Box, Stack } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';

function TodoDetailPage() {
  // const query = useQuery();
  const { id } = useParams();
  return (
    <OverviewWrapper>
    <Helmet>
        <title>Todo List</title>
    </Helmet>
    <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} my={10} alignItems="center">
            <Stack spacing={2}>
                <h3>Todo List Detail</h3>

                <h4>Todo ID: {id}</h4>
            </Stack>

        </Box>
    </Container>
</OverviewWrapper>
    
  )
}

export default TodoDetailPage