import 'src/global.css';

// ----------------------------------------------------------------------

import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';
import { LocalizationProvider } from 'src/locales';
import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'ContentQL Website',
  description:
    'We swiftly integrate and enhance your teams productivity and can be your dedicated tech team',
  keywords: 'contentql, CMS, Headless CMS, Website Maker, GraphQL API',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/favicon.png',
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en' className={primaryFont.className}>
      <body suppressHydrationWarning={true}>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'light', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeColorPresets: 'preset05', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                {/* <SettingsDrawer /> */}
                {children}
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
