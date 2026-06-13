const stepsData = [
  {
    num: "01",
    title: "Menyanting",
    desc: "Malam (lilin batik) dipanaskan hingga cair, lalu ditorehkan di atas kain menggunakan canting, alat mirip pena kecil berujung tembaga. Proses ini membentuk motif sekaligus menutup area kain agar tidak menyerap warna.",
    img: "/process/menyanting.png"
  },
  {
    num: "02",
    title: "Pewarnaan",
    desc: "Kain yang sudah diberi malam dicelupkan ke dalam larutan pewarna alami, mulai dari warna muda hingga gelap. Proses pencelupan dilakukan berulang kali untuk mencapai kedalaman warna.",
    img: "/process/pewarnaan.png"
  },
  {
    num: "03",
    title: "Nglorod",
    desc: "Kain direbus dalam air mendidih yang dicampur abu soda atau waterglass. Proses perebusan ini meluruhkan seluruh lapisan malam dari permukaan kain, membuka kembali motif putih yang tersembunyi di balik lapisan lilin dan warna.",
    img: "/process/nglorod.png"
  },
  {
    num: "04",
    title: "Finishing",
    desc: "Setelah malam luruh, kain dicuci bersih lalu dijemur di bawah sinar matahari hingga kering sempurna. Pengrajin kemudian melakukan pengecekan kualitas akhir, memastikan motif tajam, warna merata, dan tidak ada bagian yang cacat sebelum kain siap dilepas ke tangan pemiliknya.",
    img: "/process/finishing.png"
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-noto-serif text-[#001020]">Seni Canting: Sebuah Ritual Visual</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stepsData.map((step, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="w-full aspect-[3/4] bg-[#E6DDD6] overflow-hidden rounded-sm">
              <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-[#001020] font-dm-sans">
              <h3 className="text-lg font-bold tracking-wide mb-2">
                {step.num}. {step.title}
              </h3>
              <p className="text-md leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;