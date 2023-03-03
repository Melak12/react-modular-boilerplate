
import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ToggleButton from '@app/components/buttons/ToggleButton';
import OverviewWrapper from '@app/components/common/OverviewWrapper';

function HomePage() {
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
        <h3>Hero Content</h3>
        <ToggleButton />
        </Card>
      </Container>
    </OverviewWrapper>
  )
}

export default HomePage
