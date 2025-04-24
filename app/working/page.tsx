import UnderConstruction from '../components/UnderConstruction';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WorkingPage() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-20 mb-24">
        <UnderConstruction />
      </div>
      <Footer />
    </main>
  );
}
