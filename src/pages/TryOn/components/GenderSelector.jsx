import { useTryOnStore } from '../../../store/useTryOnStore';

export default function GenderSelector() {
  const { gender, setField } = useTryOnStore();

  return (
    <section className="py-8 text-center">
      <h2 className="text-2xl font-serif text-[#2D241B] mb-2">Tentukan Bentuk Tubuhmu</h2>
      <p className="text-[#594A3C] text-sm mb-8">Ini membantu AI merepresentasikan proporsi dengan lebih akurat.</p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {/* Card Maskulin */}
        <div 
          onClick={() => setField('gender', 'male')}
          className={`cursor-pointer relative w-64 h-80 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
            gender === 'male' ? 'border-[#D4AF37] scale-105 shadow-xl' : 'border-transparent shadow-md'
          }`}
        >
          <img src="/maskulin-bg.jpg" alt="Maskulin" className="absolute inset-0 w-full h-full object-cover brightness-50" />
          <div className="absolute inset-0 flex items-end justify-center pb-6">
            <span className="text-white font-serif text-xl tracking-wide">Maskulin</span>
          </div>
        </div>

        {/* Card Feminin */}
        <div 
          onClick={() => setField('gender', 'female')}
          className={`cursor-pointer relative w-64 h-80 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
            gender === 'female' ? 'border-[#D4AF37] scale-105 shadow-xl' : 'border-transparent shadow-md'
          }`}
        >
          <img src="/feminin-bg.jpg" alt="Feminin" className="absolute inset-0 w-full h-full object-cover brightness-50" />
          <div className="absolute inset-0 flex items-end justify-center pb-6">
            <span className="text-white font-serif text-xl tracking-wide">Feminin</span>
          </div>
        </div>
      </div>
    </section>
  );
}