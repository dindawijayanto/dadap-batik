const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const toAbsoluteUrl = (urlOrPath) => {
  try {
    return new URL(urlOrPath, window.location.origin).toString();
  } catch {
    return urlOrPath;
  }
};

export const generateBatikMockup = async (fabricUrl, modelUrl, gender, clothingType) => {
  const response = await fetch(`${API_BASE_URL}/api/try-on`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fabricImageUrl: toAbsoluteUrl(fabricUrl),
      modelImageUrl: toAbsoluteUrl(modelUrl),
      gender,
      clothingType,
    }),
  });

  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error('Gagal membaca respons dari server. Coba lagi.');
  }

  if (!response.ok || !payload?.success) {
    throw new Error(payload?.message || `Terjadi kesalahan pada server (${response.status}).`);
  }

  return payload.image;
};
