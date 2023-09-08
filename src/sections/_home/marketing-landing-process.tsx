import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import { varFade, MotionViewport, varSlide } from 'src/components/animate';
import { m } from 'framer-motion';
import { bgGradient } from 'src/theme/css';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const SERVICES = [
  {
    name: 'Planning',
    icon: '/assets/icons/ic_sketch_design.svg',
  },
  {
    name: 'Research',
    icon: '/assets/icons/ic_search.svg',
  },
  {
    name: 'Optimizing',
    icon: '/assets/icons/ic_optimization.svg',
  },
  {
    name: 'Results',
    icon: '/assets/icons/ic_analysis.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingProcess() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
        // height: { md: `calc(100vh - ${HEADER.H_DESKTOP}px)` },
      }}
    >
      <Container
        sx={{
          py: { xs: 5, md: 10 },

          // ...bgGradient({
          //   color: alpha(theme.palette.background.default, 0.9),
          // }),
        }}
      >
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='flex-start'
        >
          <Stack
            spacing={3}
            sx={{
              maxWidth: 480,
              mb: { xs: 8, md: 5 },
              mx: { xs: 'auto', md: 'unset' },
              textAlign: { xs: 'center', md: 'unset' },
            }}
            component={MotionViewport}
          >
            <m.div variants={varSlide().inRight}>
              <Typography variant='h6' sx={{ color: 'text.disabled' }}>
                Work Flow
              </Typography>
            </m.div>

            <Typography variant='h2'>Working Process</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
              suscipit non, turpis.
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            gap: 4,
            display: 'grid',
            alignItems: 'flex-end',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
          component={MotionViewport}
        >
          {SERVICES.map((service, index) => (
            <m.div key={service.name} variants={varFade().inRight}>
              <ServiceItem service={service} index={index} />
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  service: {
    name: string;
    icon: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon } = service;

  return (
    <Card
      sx={{
        p: 2,
        color: (theme) => theme.palette[COLORS[index]].darker,
        bgcolor: (theme) => theme.palette[COLORS[index]].light,
        boxShadow: (theme) =>
          `-8px 12px 32px 0px ${alpha(theme.palette[COLORS[index]].main, 0.2)}`,
        ...(index === 1 && {
          mb: { md: 2.5 },
        }),
        ...(index === 2 && {
          mb: { md: 5 },
        }),
        ...(index === 3 && {
          mb: { md: 7.5 },
        }),
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 64,
          height: 64,
          opacity: 0.48,
        }}
      />

      <Typography variant='h5' sx={{ mt: 3, textAlign: 'right' }}>
        {name}
      </Typography>
    </Card>
  );
}
