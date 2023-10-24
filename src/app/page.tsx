import DiscoverMore from '@/components/HomePage/DiscoverMore';
import HeroSection from '@/components/HomePage/HeroSection';
import HowitWork from '@/components/HomePage/HowitWork';
import NewArrivals from '@/components/HomePage/NewArrivals';
import Promo from '@/components/HomePage/Promo';
import Testimonials from '@/components/HomePage/Testimonials';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DiscoverMore />
      <NewArrivals />
      <HowitWork />
      <Promo />
      <NewArrivals />
      <Promo />
      <NewArrivals />
      <Promo />
      <Testimonials />
    </main>
  );
}
