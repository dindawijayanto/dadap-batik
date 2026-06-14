import { create } from 'zustand';

export const useTryOnStore = create((set, get) => ({
  gender: null,
  height: 178,
  weight: 72,
  clothingType: null,
  selectedMotifId: null,
  selectedMotifDetails: null,
  isGenerating: false,
  generationResultUrl: null,

  setField: (field, value) => set({ [field]: value }),

  selectMotif: (motif, imageUrl) => set({
    selectedMotifId: motif.id,
    selectedMotifDetails: {
      name: motif.name,
      price: motif.base_price,
      technique: motif.production_technique || 'Batik Tulis',
      imageUrl,
    },
  }),

  getBmi: () => {
    const { height, weight } = get();
    if (!height || height <= 0) return 0;
    const heightM = height / 100;
    return weight / (heightM * heightM);
  },

  getBmiCategory: () => {
    const bmi = get().getBmi();
    if (bmi < 18.5) return { label: 'Kurus',  size: 'S', color: '#60a5fa' };
    if (bmi < 25.0) return { label: 'Normal', size: 'M', color: '#4ade80' };
    return              { label: 'Gemuk',  size: 'L', color: '#f87171' };
  },

  getBaseModelId: () => {
    const { gender, clothingType } = get();
    if (!gender || !clothingType) return null;

    const bmi  = get().getBmi();
    let   size = 'l';
    if (bmi < 18.5) size = 's';
    else if (bmi < 25.0) size = 'm';

    return `${gender}_${size}_${clothingType}`;
  },

  getModelPath: () => {
    const id = get().getBaseModelId();
    return id ? `/models/${id}.png` : null;
  },
}));