import Layout from '../components/Layout/Layout';
import { companyInfo } from '../assets/config/settings';
import SimpleCenteredHero from '../components/HeroSections/SimpleCenteredHero/SimpleCenteredHero';
import CTAJustified from '../components/CTA/CTAJustified';
import Features from '../components/Feature/Features';
import UseCases from '../components/UseCases/UseCases';
import Quotes from '../components/Quotes/Quotes';
import Diagram from '../components/Diagram/Diagram';

const Index = () => {
  var title = `KrakBot | ${companyInfo.name}`;
  var description = 'Automated MSP';

  return (
    <Layout title={title} description={description}>
      <SimpleCenteredHero />
      <Features />
      <UseCases />
      <Quotes />
      <Diagram />
      <CTAJustified />
    </Layout>
  );
};

export default Index;
