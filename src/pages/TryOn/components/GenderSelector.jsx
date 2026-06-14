import { useTryOnStore } from '../../../store/useTryOnStore';

export default function GenderSelector() {
  const { gender, setField } = useTryOnStore();

  return (
    <section id='simulate' className="py-8 text-center scroll-mt-24">
      <h2 className="text-3xl font-noto-serif font-medium text-[#001020] mb-2">Tentukan Bentuk Tubuhmu</h2>
      <p className="text-[#001020] font-dm-sans text-lg mb-12">Ini membantu AI merepresentasikan proporsi dengan lebih akurat.</p>
      
      <div className="flex flex-col items-center sm:flex-row justify-center gap-6">
        {/* Card Maskulin */}
        <div 
          onClick={() => setField('gender', 'male')}
          className={`cursor-pointer relative w-64 h-80 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
            gender === 'male' ? 'border-[#D4AF37] scale-105 shadow-xl' : 'border-transparent shadow-md'
          }`}
        >
          <div className='absolute inset-0 bg-black/30 z-40'></div>
          <img src="/dummy-model-male.jpg" alt="Maskulin" className="absolute inset-0 w-full h-full object-contain" />
          <div className="absolute inset-0 flex flex-col justify-end pb-6 z-50">
            <span className="absolute top-1 l-1 vertical-text text-white font-noto-serif text-lg uppercase">Maskulin</span>
            <span className='text-white font-noto-serif text-sm tracking-wide'>Potongan tradisional & modern</span>
          </div>
        </div>

        {/* Card Feminin */}
        <div 
          onClick={() => setField('gender', 'female')}
          className={`cursor-pointer relative w-64 h-80 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
            gender === 'female' ? 'border-[#D4AF37] scale-105 shadow-xl' : 'border-transparent shadow-md'
          }`}
        >
          <div className='absolute inset-0 bg-black/30 z-40'></div>
          <img src="/dummy-model-female.jpg" alt="Feminin" className="w-full h-full object-contain" />
          <div className="absolute inset-0 flex items-end justify-center pb-6 z-50">
            <span className="absolute top-1 right-1 vertical-text text-white font-noto-serif text-lg uppercase">Feminin</span>
            <span className='text-white font-noto-serif text-sm tracking-wide'>Anggun & elegan</span>
          </div>
        </div>
      </div>
    </section>
  );
}