'use client';

import { _testimonials, _marketingPosts } from 'src/_mock';

import MarketingNewsletter from 'src/sections/_marketing/marketing-newsletter';
import MarketingServices from 'src/sections/_marketing/services/marketing-services';
import MarketingServicesHero from 'src/sections/_marketing/services/marketing-services-hero';
import MarketingTestimonial from 'src/sections/_marketing/testimonial/marketing-testimonial';
import MarketingLandingFreeSEO from 'src/sections/_marketing/landing/marketing-landing-free-seo';
import MarketingServicesInclude from 'src/sections/_marketing/services/marketing-services-include';
import MarketingServicesBenefits from 'src/sections/_marketing/services/marketing-services-benefits';
import BlogMarketingLatestPosts from 'src/sections/_marketing/../blog/marketing/marketing-latest-posts';
import MarketingServicesHowItWork from 'src/sections/_marketing/services/marketing-services-how-it-work';
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

export default function MarketingServicesView() {
  return (
    <MainLayout>
      {/* <MarketingServicesHero /> */}

      <MarketingServices />

      <MarketingServicesInclude />

      <MarketingServicesBenefits />

      <MarketingServicesHowItWork />

      <MarketingTestimonial testimonials={_testimonials} />

      {/* <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} /> */}

      <MarketingLandingFreeSEO />

      {/* <MarketingNewsletter /> */}
    </MainLayout>
  );
}
