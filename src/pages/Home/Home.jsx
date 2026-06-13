/* The complete Home page assembly */
import HomeHero from "../../components/Sections/HomeHero";
import AboutSection from "../../components/Sections/AboutSection";
import HeritageSection from "../../components/Sections/HeritageSection";
import ProductCard from "../../components/ProductCard/ProductCard";
// import Button from "../../components/UI/Button";

// Dummy data structure, soon to be moved to data/dummyData.js
const craftItems = [
  {
    title: "Handwritten (Tulis)",
    status: "PREMIUM",
    description:
      "Puncak dari sebuah karya. Setiap titik dan garisnya di gambar secara manual menggunakan alat yang dinamakan “Canting”. Tidak ada kain yang sama persis ",
    image: "home/handwritten.png",
    reverse: true,
  },
  {
    title: "Stamped (Cap)",
    description:
      "Dibuat menggunakan stempel tembaga yang diukir dengan tangan. Meskipun lebih cepat daripada “Tulis”, metode ini tetap merupakan metode wax-resist yang otentik dengan sentuhan keahlian tradisional.",
    image: "home/stamped.png",
    reverse: false,
  },
];

const homeAbout = {
  tagline: "TANGAN DIBALIK SETIAP KARYANYA",
  headline: "Perjalanan Kami: Imam & Keluarga",
  bodyText: [
    "Dilahirkan di jantung Jawa Tengah, Dadap Batik berawal dari sebuah impian sederhana Imam Santoso dan istrinya untuk melestarikan seni tradisi menggunakan “canting” yang mulai pudar. Apa yang dulunya berawal dari sebuah studio rumahan kecil, kini telah tumbuh menjadi sebuah galeri yang memiliki banyak motif kain batik. ",
    "Bagi Pak Imam, batik bukan sekadar selembar kain—melainkan sebuah kanvas filosofis. 'Setiap titikan malam adalah sebuah doa,' ujarnya. Hingga hari ini, mereka terus membimbing generasi perajin baru, memastikan ketukan ritmis 'tap-tap' dari canting tak akan pernah lenyap dari lanskap budaya kita.",
  ],
  subtext: "Melestarikan jiwa, benang demi benang.",
  image: "home/jumbotron.png",
};

const homeHeritage = {
  photo: "home/established.png",
  establishedText: "Berdiri Sejak 2019",
  tagline: "Merajut Warisan Selama 7 Tahun",
  // headline: "Our Journey to Excellence",
  bodyText: [
    "Di Dadap Batik, setiap benang menceritakan kisah tentang kesabaran dan ketelitian. Sesuatu yang awalnya hanya sebuah usaha kecil keluarga di Jawa Tengah, kini telah berkembang menjadi instansi tekstil di Indonesia yang bergengsi, dan kini secara resmi diakui sebagai badan hukum berbentuk PT",
    "Keahlian kami berakar pada tradisi canting, di mana malam dan pewarna berpadu menciptakan motif yang memanggul makna filosofis: kehidupan, kemakmuran, dan penghormatan.",
  ],
  features: [
    {
      icon: "home/legalitas.svg",
      title: "Legalitas Resmi",
      description:
        "Sebagai PT terdaftar, kami menjamin standar tertinggi integritas perusahaan dan kualitas pengerjaan.",
    },
    {
      icon: "home/silsilah.svg",
      title: "Silsilah Pengrajin",
      description:
        "Bertahun tahun menyempurnakan teknik Tulis dan Cap yang diwariskan lintas generasi.",
    },
  ],
  ctaText: "Baca Kisah Warisan Kami Selengkapnya",
  ctaLink: "REPLACE_INTERNAL_STORY_LINK",
};

const Home = () => {
  return (
    <div className="relative w-full">
      <HomeHero />
      <img
        src="home/batik-pattern.svg"
        alt="Hero Background Pattern"
        className="absolute top-0 left-0 w-full h-[100vh] md:h-[100vh] md:w-[120vw] lg:w-[100vw] object-cover object-top pointer-events-none opacity-60 z-10"
      />
      <AboutSection {...homeAbout} />
      <HeritageSection {...homeHeritage} />

      {/* Craftsmanship Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
        <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-regular font-serif text-[#001020] leading-snug">
            Keahlian yang Tak Terukur
          </h2>
          <p className="text-base text-[#001020] leading-relaxed">
            Dari tahapan ‘Nyangking‘ hingga tahapan ‘Nglorod‘, saksikan setiap
            tahap teliti yang merubah kain katun halus menjadi sebuah mahakarya.
          </p>
        </div>

        {/* Dynamic List of Craft Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {craftItems.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>

        {/* <div className="flex justify-center">
          <Button variant="secondary">Explore All Techniques</Button>
        </div> */}
      </section>
    </div>
  );
};

export default Home;
