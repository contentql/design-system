import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Content Management',
    description:
      'Streamline your digital presence, organize and update content with ease, and ensure seamless collaboration across your team',
    icon: '/assets/icons/ic_headlesscms.svg',
  },
  {
    title: 'Tailored Frontend',
    description:
      'Say Good Bye to building frontend from scratch. Our FaaS platform empowers your product team with beautify designs',
    icon: '/assets/icons/ic_frontend.svg',
  },
  {
    title: 'Real Time Data Updates',
    description:
      "Get real-time insights with our dynamic data update system. Access live information that's crucial for your business",
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Search Engine Optimization',
    description:
      'We improving the quality and quantity of website traffic to a website or a web page from search engines',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Report and Analysis',
    description:
      'Elevate your business with our reporting and analysis tools. Gain actionable insights and make informed decisions effortlessly',
    icon: '/assets/icons/ic_file.svg',
  },
  {
    title: 'Dedicated Development Team',
    description:
      'Accelerate your projects with our Dedicated Development Team. Our experience experts work in-hand with your goals.',
    icon: '/assets/icons/ic_github.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant='h2'>Services Include</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Let's now look into the customisable capabilities that ContentQL offers
        without a developer team.
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color='info'
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant='h5' sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              {' '}
              {value.description}{' '}
            </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
