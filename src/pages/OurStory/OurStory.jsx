import StoryHero from "./components/StoryHero";
import StoryStats from "./components/StoryStats";
import StoryQuote from "./components/StoryQuote";
import StoryTimeline from "./components/StoryTimeline";
import StoryCTA from "./components/StoryCTA";

const timelineData = [
  {
    year: "2019",
    title: "Perintisan Usaha",
    description: "Dadap Batik mulai merintis usahanya, dan dijalankan oleh 2 orang. Dadap berupaya menciptakan batik yang mampu menangkap perubahan cahaya matahari terbit Jawa.",
    image: "/our_story/perintisan_usaha.png",
  },
  {
    year: "2020",
    title: "Ekspansi SDM",
    description: "Dadap Batik mulai melakukan pelatihan untuk masyarakat sekitar untuk merekrut dan menambah jumlah karyawan. Dadap Batik mulai menerima banyak pesanan dari pemerintah.",
    image: "/our_story/ekspansi_sdm.png",
  },
  {
    year: "2024",
    title: "Ekspansi Usaha",
    description: "Dadap Batik mulai melebarkan sayap dengan membuka workshop. Mulai ada perkembangan SDM dan perkembangan digitalisasi",
    image: "/our_story/ekspansi_usaha.png",
  }
];

const ctaData = {
  title: "Tuliskan Warisanmu Sendiri",
  description: "Dari busana pernikahan hingga cendera mata korporat, kami siap menerjemahkan visimu menjadi karya batik tulis yang tak tertandingi.",
  primaryBtn: {
    text: "Pesan Batik Eksklusif",
    link: "/contact"
  },
  secondaryBtn: {
    text: "Daftar Sesi Workshop",
    link: "/contact"
  }
};

const OurStory = () => {
  return (
    <div className="bg-[#FAF6F2] min-h-screen overflow-x-hidden">
      <StoryHero />
      <StoryStats />
      <StoryQuote />
      <StoryTimeline timelineData={timelineData} />
      <StoryCTA {...ctaData} />
    </div>
  );
};

export default OurStory;