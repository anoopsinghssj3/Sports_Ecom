import HeroBanner from '../../components/banner/HeroBanner';
import FeaturedCollections from '../../components/featured/FeaturedCollection';
import Footer from '../../components/footer/Footer';
import GuideTeasers from '../../components/guideTeaser/GuideTeaser';
// import ProductGrid from '../../components/productGrid/ProductGrid';
import CategorySliderPage from '../categoriesPage/CategorySliderPage';

function HomePage() {
    return (
        <main>
            <header>
                <HeroBanner />
            </header>

            <section className="container my-4">
                <h4 className="fw-bold mb-3 text-center">Shop by Sport</h4>
                <CategorySliderPage />
            </section>

            <section className="container my-4">
                <h4 className="fw-bold mb-3 text-center">Featured Collections</h4>
                <FeaturedCollections />
            </section>
            {/* 
            <section className="container my-4">
                <h4 className="fw-bold mb-3 text-center">Featured Collections</h4>
                <ProductGrid />
            </section> */}


            <section className="container my-4">
                <h4 className="fw-bold text-center mb-4">🏆 Expert Buying Guides</h4>
                <GuideTeasers />
            </section>


            <footer className="mt-5">
                <Footer />
            </footer>


        </main>
    );
}

export default HomePage;


{/* <ProductGrid title="Top Picks For You" products={...} /> */ }
{/* <GuideTeasers /> */ }
{/* <NewsletterSection /> */ }
{/* <Footer /> */ }
