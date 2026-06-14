import { useCallback } from 'react';
import { useTryOnStore } from '../../store/useTryOnStore';
import HeroSection      from './components/HeroSection';
import GenderSelector   from './components/GenderSelector';
import MeasurementInput from './components/MeasurementInput';
import ClothingType     from './components/ClothingType';
import MotifSelector    from './components/MotifSelector';
import ResultSection    from './components/ResultSection';
import { generateBatikMockup } from '../../utils/geminiApi';



export default function TryOnPage() {
  const {
    gender,
    clothingType,
    selectedMotifId,
    selectedMotifDetails,
    isGenerating,
    setField,
    getBaseModelId,
  } = useTryOnStore();

  const isFormComplete = Boolean(gender && clothingType && selectedMotifId);

  const handleGenerate = useCallback(async () => {
    if (!isFormComplete) return;

    setField('isGenerating', true);
    setField('generationResultUrl', null);

    try {
      if (!selectedMotifDetails?.imageUrl) {
        throw new Error('URL motif tidak ditemukan. Pastikan kamu sudah memilih motif.');
      }

      const modelId   = getBaseModelId();
      const modelPath = `/models/${modelId}.png`;

      const resultBase64 = await generateBatikMockup(
        selectedMotifDetails.imageUrl, 
        modelPath, 
        gender, 
        clothingType
      );
      setField('generationResultUrl', resultBase64);

    } catch (error) {
      console.error('[TryOn] Gagal generate:', error);
      alert(`Terjadi kesalahan: ${error.message}\n\nCoba cek tab Console (F12) untuk detail.`);
    } finally {
      setField('isGenerating', false);
    }
  }, [isFormComplete, selectedMotifDetails, gender, clothingType, getBaseModelId, setField]);

  return (
    <div className="min-h-screen bg-[#FAF6F2]">
      <div className="py-4 px-4 md:px-16 lg:px-24">
        <HeroSection />
        <GenderSelector />
        <MeasurementInput />
        <ClothingType />
        <MotifSelector />

        <div className="mt-12 flex justify-center">
          <button
            id="btn-visualize"
            onClick={handleGenerate}
            disabled={!isFormComplete || isGenerating}
            className="px-12 py-4 bg-[#2D241B] text-[#D4AF37] font-bold font-serif text-xl rounded-full
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-[#1A1A1A] active:scale-95
                       transition-all duration-200 shadow-lg"
          >
            {isGenerating ? 'Menjahit Pola Digital…' : 'Visualisasikan Sekarang'}
          </button>
        </div>
      </div>

      <ResultSection />
    </div>
  );
}