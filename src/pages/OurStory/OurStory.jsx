import StoryHero from "./components/StoryHero";
import StoryStats from "./components/StoryStats";
import StoryQuote from "./components/StoryQuote";
import StoryTimeline from "./components/StoryTimeline";
import CTA from "../../components/Sections/CTA";

const timelineData = [
  {
    year: "1924",
    title: "The First Canting",
    description: "An enduring legacy of craft. In a humble wooden house in Central Java, the first drop of wax touched the fabric. A single line that would define our family's identity for generations.",
    image: "/REPLACE_IMAGE_HERE",
  },
  {
    year: "1978",
    title: "The Modern Awakening",
    description: "Transitioning from traditional cloth to contemporary wear. We started tailoring our handcrafted batik into pieces that fit the modern wardrobe, marrying heritage with functionality.",
    image: "/REPLACE_IMAGE_HERE",
  },
  {
    year: "2024",
    title: "Living Heritage",
    description: "Today, Dadap Batik stands as a beacon of slow fashion. We preserve ancient techniques while embracing sustainable practices to ensure our craft outlives us.",
    image: "/REPLACE_IMAGE_HERE",
  }
];

const ctaData = {
  title: "Create Your Own Legacy",
  description: "From bridal party ensembles to corporate gifts, our masters can translate your vision into hand-drawn Batik perfection.",
  primaryBtn: {
    text: "Inquire Custom Order",
    link: "/contact" // Ganti dengan rute yang sesuai
  },
  secondaryBtn: {
    text: "Book a Workshop",
    link: "/contact"
  }
};

const OurStory = () => {
  return (
    <div className="bg-[#FAF6F2] min-h-screen">
      <StoryHero />
      <StoryStats />
      <StoryQuote />
      <StoryTimeline timelineData={timelineData} />
      <CTA {...ctaData} />
    </div>
  );
};

export default OurStory;