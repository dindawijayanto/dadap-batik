import { useTryOnStore } from '../../../store/useTryOnStore';

export default function MeasurementInput() {
  const { height, weight, setField } = useTryOnStore();

  return (
    <section className="py-8 flex justify-center">
      <div className="bg-[#1A1A1A] p-8 rounded-2xl max-w-2xl w-full flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 text-white">
          <h3 className="text-xl font-serif text-[#D4AF37] mb-2">Penyesuaian Presisi</h3>
          <p className="text-gray-400 text-sm mb-6">
            Masukkan ukuran tubuhmu agar AI dapat memilih ukuran baju dan proporsi yang paling sesuai.
          </p>
          
          <div className="flex gap-4">
            <div className="flex-1 bg-[#FDFBF7] p-3 rounded-md">
              <label className="block text-xs text-[#594A3C] uppercase tracking-wider mb-1">Tinggi Badan</label>
              <div className="flex items-center">
                <input 
                  type="number" 
                  value={height}
                  onChange={(e) => setField('height', Number(e.target.value))}
                  className="w-full bg-transparent text-xl font-semibold text-[#2D241B] outline-none"
                />
                <span className="text-[#594A3C]">cm</span>
              </div>
            </div>
            <div className="flex-1 bg-[#FDFBF7] p-3 rounded-md">
              <label className="block text-xs text-[#594A3C] uppercase tracking-wider mb-1">Berat Badan</label>
              <div className="flex items-center">
                <input 
                  type="number" 
                  value={weight}
                  onChange={(e) => setField('weight', Number(e.target.value))}
                  className="w-full bg-transparent text-xl font-semibold text-[#2D241B] outline-none"
                />
                <span className="text-[#594A3C]">kg</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-32 h-32 md:w-48 md:h-48 bg-[#E8E0D5] rounded-3xl flex items-center justify-center">
           {/* Placeholder untuk icon user/penggaris */}
           <span className="text-6xl text-[#C2B5A3]">👤</span>
        </div>
      </div>
    </section>
  );
}