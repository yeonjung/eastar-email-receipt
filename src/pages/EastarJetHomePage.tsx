import styles from '../homepage/HomePage.module.css';
import { UtilityBar } from '../homepage/sections/UtilityBar/UtilityBar';
import { SiteHeader } from '../homepage/sections/Header/SiteHeader';
import { AnnouncementBar } from '../homepage/sections/AnnouncementBar/AnnouncementBar';
import { HeroSection } from '../homepage/sections/Hero/HeroSection';
import { FlightSearchWidget } from '../homepage/sections/FlightSearch/FlightSearchWidget';
import { EventsSection } from '../homepage/sections/Events/EventsSection';
import { DestinationsSection } from '../homepage/sections/Destinations/DestinationsSection';
import { PriceChartSection } from '../homepage/sections/PriceChart/PriceChartSection';
import { SocialNewsSection } from '../homepage/sections/SocialNews/SocialNewsSection';
import { NoticeAndFaqSection } from '../homepage/sections/NoticeAndFaq/NoticeAndFaqSection';
import { SiteFooter } from '../homepage/sections/Footer/SiteFooter';

export function EastarJetHomePage() {
  return (
    <div className={styles.page}>
      <UtilityBar />
      <SiteHeader />
      <AnnouncementBar />
      <HeroSection />
      <FlightSearchWidget />
      <EventsSection />
      <DestinationsSection />
      <PriceChartSection />
      <SocialNewsSection />
      <NoticeAndFaqSection />
      <SiteFooter />
    </div>
  );
}
