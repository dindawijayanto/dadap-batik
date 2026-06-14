/* Specific to the Home page hero */
import Button from "../UI/Button";

const HomeHero = () => {
  return (
    <section className="relative h-screen flex justify-center items-center pt-32 pb-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      {/* Hero Background Pattern */}
      {/* <img
        src="home/batik-pattern.svg"
        alt="Hero Background Pattern"
        className="absolute top-0 right-0 w-screen h-auto pointer-events-none opacity-20"
      /> */}

      <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
        <h4 className="text-xs font-dm-sans font-semibold text-[#B2993D] tracking-[3px] uppercase">
          Warisan Pengrajin sejak 2019
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-noto-serif font-extrabold text-[#001020] leading-[1.1] font-serif">
          Merangkai
          <br /> Warisan dalam
          <br /> Setiap Helai Batik
        </h1>
        <p className="text-base text-[#5C4D46] leading-relaxed max-w-lg font-dm-sans">
          Rasakan pengalaman puisi yang bisu dari kerajinan tangan Indonesia.
          Setiap polanya menceritakan sebuah kesabaran, budaya, dan keanggunan
          abadi yang digambar dengan tangan untuk para jiwa muda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2 ">
          <Button variant="tryOn">Explore Collection</Button>
          <Button variant="secondary">Try On Batik</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
