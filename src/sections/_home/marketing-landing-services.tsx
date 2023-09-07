import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { RouterLink } from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';
import { m } from 'framer-motion';
import { varSlide, varFlip, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'] as const;

const SERVICES = [
  {
    name: 'SEO',
    icon: '/assets/icons/service/ic_service_seo.svg',
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
  {
    name: 'Email Marketing',
    icon: '/assets/icons/service/ic_service_mail.svg',
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
  {
    name: 'Search Engine Oprimization',
    icon: '/assets/icons/service/ic_service_analysis.svg',
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
  {
    name: 'Social Marketing',
    icon: '/assets/icons/service/ic_service_bullhorn.svg',
    content: 'Nunc nonummy metus. Donec elit libero',
    path: paths.marketing.services,
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack direction='column' justifyContent='flex-end' alignItems='flex-end'>
        <Stack
          spacing={2}
          sx={{
            maxWidth: 480,
            mb: { xs: 8, md: 5 },
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'end' },
          }}
          component={MotionViewport}
        >
          <m.div variants={varSlide().inLeft}>
            <Typography variant='h6' sx={{ color: 'text.disabled' }}>
              Our Services
            </Typography>
          </m.div>

          <Typography variant='h2'>We Provide</Typography>

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
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
        component={MotionViewport}
      >
        {SERVICES.map((service, index) => (
          <m.div variants={varFlip().inY} key={service.name}>
            <ServiceItem service={service} index={index} />
          </m.div>
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  service: {
    name: string;
    content: string;
    path: string;
    icon: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon, content, path } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[COLORS[index]].main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant='h6'>{name}</TextMaxLine>
        <TextMaxLine variant='body2' sx={{ color: 'text.secondary' }}>
          {content}
        </TextMaxLine>
      </Stack>

      <IconButton
        component={RouterLink}
        href={path}
        color={
          (index === 0 && 'primary') ||
          (index === 1 && 'secondary') ||
          (index === 2 && 'success') ||
          'warning'
        }
      >
        <Iconify icon='carbon:direction-straight-right' />
      </IconButton>
    </Card>
  );
}
