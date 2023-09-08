import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const LISTS = [
  'Responsive Website',
  'Admin Panel',
  'Automation',
  'Developer Support Team',
];

// ----------------------------------------------------------------------

export default function MarketingServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid xs={12} md={6} lg={5}>
          <Image
            alt='services'
            src='/assets/illustrations/illustration_services.svg'
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant='h2'>Modern Web Apps</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Though ContentQL helps the product team take control of the data
              displayed to their end users, one can still expand product
              delivery capabilities to your consumers by integrating dedicated
              React and GraphQL developers. Every piece of software we use is an
              open-source tool that is contributed daily from around the world,
              which keeps your website on par with modern development standards
            </Typography>

            <Stack spacing={2}>
              {LISTS.map((text) => (
                <Stack key={text} direction='row' alignItems='center'>
                  <Box
                    component='span'
                    sx={{
                      mr: 2,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                    }}
                  />
                  {text}
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Button
            component={RouterLink}
            href={paths.marketing.caseStudies}
            size='large'
            color='inherit'
            variant='outlined'
            endIcon={<Iconify icon='carbon:chevron-right' />}
          >
            Check Our Work
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
