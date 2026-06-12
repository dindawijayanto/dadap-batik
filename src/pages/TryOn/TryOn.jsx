import { useTryOnStore } from "../../store/useTryOnStore";
import HeroSection from "./components/HeroSection";
import GenderSelector from "./components/GenderSelector";
import MeasurementInput from "./components/MeasurementInput";
import ClothingType from "./components/ClothingType";
import MotifSelector from "./components/MotifSelector";
import ResultSection from "./components/ResultSection";
import { supabase } from "../../utils/supabase";

export default function TryOnPage() {
  // Pastikan isGenerating ada di dalam kurung kurawal ini
  const { gender, clothingType, selectedMotifId, setField, isGenerating } = useTryOnStore();
  
  // Validasi: Form dianggap lengkap jika 3 data ini sudah diisi user
  const isFormComplete = gender && clothingType && selectedMotifId;

  const handleGenerate = async () => {
    if (!isFormComplete) return;
    
    setField('isGenerating', true);
    
    try {
      // 1. Dapatkan ID Base Model (ex: "female_s_long")
      const baseModelId = useTryOnStore.getState().getBaseModelId();
      
      // 2. Insert ke Supabase
      const { data, error } = await supabase
        .from('generations')
        .insert([
          {
            base_model_id: baseModelId,
            product_id: selectedMotifId,
            status: 'pending'
          }
        ])
        .select()
        .single();

      if (error) throw error;

      console.log("Berhasil masuk antrean! ID:", data.id);

      // TODO Fase 4: Di sini nanti kita pasang Realtime Subscription
      // Sementara biarkan loading terus sampai kita integrasikan Realtime-nya nanti.

    } catch (error) {
      console.error("Gagal mengirim pesanan:", error);
      alert("Terjadi kesalahan sistem. Silakan coba lagi.");
      setField('isGenerating', false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <div className="px-4 md:px-16 lg:px-32 pb-16">
        <HeroSection />
        <GenderSelector />
        <MeasurementInput />
        <ClothingType />
        <MotifSelector />
        
        {/* Tombol Trigger AI */}
        <div className="mt-12 flex justify-center">
          <button 
            onClick={handleGenerate}
            disabled={!isFormComplete || isGenerating}
            className="px-12 py-4 bg-[#2D241B] text-[#D4AF37] font-bold font-serif text-xl rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1A1A1A] transition-colors shadow-lg"
          >
            {isGenerating ? 'Memproses...' : 'Visualisasikan Sekarang'}
          </button>
        </div>
      </div>

      {/* Section Hasil (Muncul di paling bawah kalau sudah di-generate) */}
      <ResultSection />
    </div>
  );
}