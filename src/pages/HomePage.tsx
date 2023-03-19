
import { Box, Container, Card, Stack, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ToggleButton from '@app/components/buttons/ToggleButton';
import OverviewWrapper from '@app/components/common/OverviewWrapper';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLogout } from '@app/modules/Auth';

function HomePage() {
  const navigate = useNavigate();

  const [
    error,
    loading,
    status,
    signoutUser
  ] = useLogout();

  useEffect(() => {
    console.log("Page Renders");

  }, []);

  useEffect(() => {

    if(status) {
      console.log("Signing Out ...");
    }
 

  }, [status]);


  const onLogout = async () => {
   await signoutUser();
  }

  return (
    <OverviewWrapper>
      <Helmet>
        <title>React Modularized Boilerplate</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} my={10} alignItems="center">
          {/* <Logo /> */}
          <h3>Home Content</h3>

        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          {/* <Hero /> */}
          <Stack>
            <h6>Simple toggle button to demonstrate unit-testing for react component.</h6>
            <Box maxWidth={100}>
              <ToggleButton />
            </Box>

            <h6>Simple to do list to demonstrate REST API workflow with axios</h6>
            <Button onClick={() => navigate('/todos')}>TODO LIST</Button>
            <Button onClick={onLogout}>Logout</Button>
          </Stack>
        </Card>
      </Container>
    </OverviewWrapper>
  )
}

export default HomePage
