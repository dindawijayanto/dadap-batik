import { useTryOnStore } from '../../../store/useTryOnStore';

export default function ClothingType() {
  const { clothingType, setField } = useTryOnStore();

  const options = [
    { id: 'long', label: 'Kemeja Lengan Panjang', img: '/kemeja-panjang.jpg' },
    { id: 'short', label: 'Kemeja Lengan Pendek', img: '/kemeja-pendek.jpg' }
  ];

  return (
    <section className="py-8">
      <h2 className="text-xl font-serif text-[#2D241B] mb-1">Pilih Gaya Pakaianmu</h2>
      <p className="text-[#594A3C] text-sm mb-6">Pilih potongan pakaian yang ingin kamu visualisasikan.</p>
      
      <div className="flex gap-4">
        {options.map((opt) => (
          <div 
            key={opt.id}
            onClick={() => setField('clothingType', opt.id)}
            className={`cursor-pointer rounded-lg overflow-hidden border-2 w-48 transition-all duration-200 ${
              clothingType === opt.id ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50' : 'border-transparent bg-[#F5F0E6]'
            }`}
          >
            <img src={opt.img} alt={opt.label} className="w-full h-48 object-cover" />
            <div className="p-3 bg-white">
              <p className="text-sm font-medium text-center text-[#2D241B]">{opt.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}