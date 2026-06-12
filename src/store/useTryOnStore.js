import { create } from 'zustand';

export const useTryOnStore = create((set, get) => ({
  // State Input User
  gender: null,
  height: 178,
  weight: 72,
  clothingType: null,
  selectedMotifId: null,
  
  // New: Dummy metadata untuk ringkasan pesanan (untuk slicing UI hasil)
  selectedMotifDetails: null, // Berisi { name, price, technique }
  
  // State AI Generation
  isGenerating: false,
  generationResultUrl: null,

  // Actions
  setField: (field, value) => set({ [field]: value }),
  
  // Update action untuk sekaligus menyimpan detail motif saat dipilih
  selectMotif: (motif) => set({ 
    selectedMotifId: motif.id,
    selectedMotifDetails: {
      name: motif.name,
      price: motif.base_price,
      technique: motif.production_technique || 'Batik Tulis' // Default fallback
    }
  }),
  
  // Helper BMI (Tetap sama)
  getBaseModelId: () => {
    // ... logic BMI sama seperti sebelumnya ...
    const { gender, height, weight, clothingType } = get();
    if (!gender || !clothingType) return null;
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    let size = 'l';
    if (bmi < 18.5) size = 's';
    else if (bmi < 24.9) size = 'm';
    return `${gender}_${size}_${clothingType}`;
  }
}));