const ProcessComparison = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-linear-to-br from-5% to-75% from-[#B2993D] to-[#001020] text-[#FAF6F2]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-noto-serif text-[#FAF6F2]">Batik Tulis vs Batik Cap: Kenali Perbedaannya</h2>
      </div>

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-[#B2993D50]">
              <th className="py-4 px-6 font-bold text-white/90 tracking-widest uppercase text-xs w-1/4">Perbandingan</th>
              <th className="py-4 px-6 font-bold text-white tracking-widest uppercase text-xs w-1/4 bg-[#B2993D30]">Batik Tulis</th>
              <th className="py-4 px-6 font-bold text-white/50 tracking-widest uppercase text-xs w-1/4">Batik Cap</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-[#B2993D50]">
              <td className="py-6 px-6 font-semibold text-white/90">Waktu Produksi</td>
              <td className="py-6 px-6 bg-[#B2993D30] text-white">1 - 4 Minggu</td>
              <td className="py-6 px-6 text-[#E6DDD6]">2 - 3 Hari</td>
            </tr>
            <tr className="border-b border-[#B2993D50]">
              <td className="py-6 px-6 font-semibold text-white/90">Kompleksitas</td>
              <td className="py-6 px-6 bg-[#B2993D30] text-white">Sangat Tinggi</td>
              <td className="py-6 px-6 text-[#E6DDD6]">Sedang</td>
            </tr>
            <tr className="border-b border-[#B2993D50]">
              <td className="py-6 px-6 font-semibold text-white/90">Kisaran Harga</td>
              <td className="py-6 px-6 bg-[#B2993D30] text-white">Kemewahan Premium</td>
              <td className="py-6 px-6 text-[#E6DDD6]">Kemewahan Terjangkau</td>
            </tr>
            <tr>
              <td className="py-6 px-6 font-semibold text-white/90">Keunikan</td>
              <td className="py-6 px-6 bg-[#B2993D30] text-white">Tidak Bisa Direplikasi</td>
              <td className="py-6 px-6 text-[#E6DDD6]">Dapat Diproduksi Ulang</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProcessComparison;