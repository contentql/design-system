import MarketingAboutView from 'src/sections/_marketing/view/marketing-about-view';
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'About Us',
};

export default function MarketingAboutPage() {
  return (
    <MainLayout>
      <MarketingAboutView />
    </MainLayout>
  );
}
