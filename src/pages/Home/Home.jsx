/* The complete Home page assembly */
import HomeHero from "../../components/Sections/HomeHero";
import AboutSection from "../../components/Sections/AboutSection";
import HeritageSection from "../../components/Sections/HeritageSection";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/UI/Button";

// Dummy data structure, soon to be moved to data/dummyData.js
const craftItems = [
  {
    title: "Handwritten (Tulis)",
    status: "BEST SELLER",
    description: "The peak of the craft. Every line is drawn manually using a 'canting', creating unique patterns, no two are identical.",
    image: "/REPLACE_IMAGE_HERE",
  },
  {
    title: "Stamped (Cap)",
    description: "Created with precision using copper stamps. Cap Tulis combines stamped and manually drawn details for rich textures.",
    image: "/REPLACE_IMAGE_HERE",
  }
];

const homeAbout = {
  tagline: "THE HANDS BEHIND THE CRAFT",
  headline: "Our Journey: Imam & Family",
  bodyText: [
    "Founded in the heart of Central Java, Dadap Batik began as a humble vision by Imam & Family to preserve the traditional canting technique. What started in a small studio has blossomed into a global ambassador for Indonesian heritage.",
    "For Imam, batik isn't just fabric; it's a profound philosophy. 'Each wax dot is a prayer,' he often says. Today, we nurture a new generation of artisans, ensuring that the rhythmic top-top of the canting never fades from our culture."
  ],
  subtext: "Preserving soul, one thread at a time.",
  image: "/REPLACE_IMAGE_HERE"
};

const homeHeritage = {
  photo: "/REPLACE_IMAGE_HERE",
  establishedText: "ESTABLISHED 2017",
  tagline: "Preserving Heritage for 30 Years",
  headline: "Our Journey to Excellence",
  bodyText: [
    "At Dadap Batik, every thread tells a story of patience and precision. What began as a small family endeavor in Central Java has grown into a prestigious institution of Indonesian textile art, now officially recognized as a PT (Perseroan Terbatas) entity.",
    "Our craftsmanship is rooted in the 'canting' tradition, where wax and dye harmonies to create patterns that carry philosophical meanings of life, prosperity, and respect."
  ],
  features: [
    {
      icon: "/REPLACE_ICON_HERE",
      title: "Legal Authenticity",
      description: "As a registered PT, we operate with integrity and full adherence."
    },
    {
      icon: "/REPLACE_ICON_HERE",
      title: "Artisanal Pedigree",
      description: "Rooted in centuries-perfected skills passed down."
    }
  ],
  ctaText: "READ OUR FULL HERITAGE STORY",
  ctaLink: "REPLACE_INTERNAL_STORY_LINK"
};

const Home = () => {
  return (
    <>
      <HomeHero />
      <AboutSection {...homeAbout} />
      <HeritageSection {...homeHeritage} />
      
      {/* Craftsmanship Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
        <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#4D342D] leading-snug">
            Craftsmanship Beyond Measure
          </h2>
          <p className="text-base text-[#5C4D46] leading-relaxed">
            From the initial ‘Nyorek’ (design) to the final ‘Lorot’ (wax removal), witness the meticulous steps that transform cotton into a masterpiece.
          </p>
        </div>
        
        {/* Dynamic List of Craft Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {craftItems.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button variant="secondary">Explore All Techniques</Button>
        </div>
      </section>
    </>
  );
};

export default Home;