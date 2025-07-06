import HeroBanner from '../../components/banner/HeroBanner';
import FeaturedCollections from '../../components/featured/FeaturedCollection';
import CategorySlider from '../categories/CategorySlider';

function Home() {
    return (
        <div>
            <HeroBanner />
            <section className="container my-4">
                <h4 className="fw-bold mb-3 text-center">Shop by Sport</h4>
                <CategorySlider />
            </section>

            <section className="container my-4">
                <FeaturedCollections />
            </section>
        </div>
    )
}

export default Home;


{/* <ProductGrid title="Top Picks For You" products={...} /> */ }
{/* <GuideTeasers /> */ }
{/* <NewsletterSection /> */ }
{/* <Footer /> */ }
