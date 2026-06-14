import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const fileToGenerativePart = async (fileOrUrl) => {
  let blob;
  let mimeType;

  if (typeof fileOrUrl === 'string') {
    const response = await fetch(fileOrUrl);
    if (!response.ok) {
      throw new Error(`Gagal mengambil gambar dari URL (${response.status}): ${fileOrUrl}`);
    }
    blob     = await response.blob();
    mimeType = blob.type || 'image/jpeg';
  } else {
    blob     = fileOrUrl;
    mimeType = fileOrUrl.type;
  }

  const data = await new Promise((resolve, reject) => {
    const reader     = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror   = reject;
    reader.readAsDataURL(blob);
  });

  return { inlineData: { data, mimeType } };
};

const buildPrompt = (gender, clothingType) => {
  const sleeve      = clothingType === 'long' ? 'long-sleeve' : 'short-sleeve';
  const genderLabel = gender === 'male' ? 'male' : 'female';

  return `Apply the batik fabric pattern from image 1 onto the shirt of the ${genderLabel} model in image 2. The shirt is a ${sleeve} Indonesian batik kemeja (classic collar, button-up). Preserve all original batik colors and motif details exactly. Use realistic fabric draping, natural folds, and premium texture. Keep the model's face, skin tone, and body proportions unchanged. Clean editorial background, high-end fashion photography.`;
};

export const generateBatikMockup = async (fabricFile, modelFile, gender, clothingType) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-image",
    generationConfig: {
      thinkingConfig: { thinkingBudget: 0 },
    },
  });

  const [fabricPart, modelPart] = await Promise.all([
    fileToGenerativePart(fabricFile),
    fileToGenerativePart(modelFile),
  ]);

  const result   = await model.generateContent([buildPrompt(gender, clothingType), fabricPart, modelPart]);
  const response = await result.response;

  const parts     = response.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData);

  if (imagePart) {
    return `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`;
  }

  const textPart = parts.find((p) => p.text)?.text ?? '(no text)';
  console.warn('[Gemini] No image in response:', textPart);
  throw new Error('Gemini tidak mengembalikan gambar. Coba lagi atau ubah motif.');
};