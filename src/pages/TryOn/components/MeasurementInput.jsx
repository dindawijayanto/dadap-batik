import { useMemo } from 'react';
import { useTryOnStore } from '../../../store/useTryOnStore';

function ModelPlaceholder({ message }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 text-[#C2B5A3]"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-xs text-[#C2B5A3] leading-snug">{message}</p>
    </div>
  );
}

function BmiBadge({ bmi, category }) {
  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: category.color }}
      />
      <span className="text-white text-xs font-medium whitespace-nowrap">
        BMI {bmi.toFixed(1)} · {category.label} · Size {category.size}
      </span>
    </div>
  );
}

export default function MeasurementInput() {
  const { height, weight, gender, clothingType, setField, getBmi, getBmiCategory, getModelPath } =
    useTryOnStore();

  const bmi       = useMemo(() => getBmi(),        [height, weight]);           // eslint-disable-line react-hooks/exhaustive-deps
  const category  = useMemo(() => getBmiCategory(), [height, weight]);          // eslint-disable-line react-hooks/exhaustive-deps
  const modelPath = useMemo(() => getModelPath(),   [gender, height, weight, clothingType]); // eslint-disable-line react-hooks/exhaustive-deps

  const placeholderMessage = !gender
    ? 'Pilih gender terlebih dahulu untuk melihat preview model'
    : !clothingType
    ? 'Pilih jenis kemeja untuk melihat preview model'
    : null;

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
              <label
                htmlFor="input-height"
                className="block text-xs text-[#594A3C] uppercase tracking-wider mb-1"
              >
                Tinggi Badan
              </label>
              <div className="flex items-center">
                <input
                  id="input-height"
                  type="number"
                  min={100}
                  max={250}
                  value={height}
                  onChange={(e) => setField('height', Number(e.target.value))}
                  className="w-full bg-transparent text-xl font-semibold text-[#2D241B] outline-none"
                />
                <span className="text-[#594A3C] flex-shrink-0">cm</span>
              </div>
            </div>

            <div className="flex-1 bg-[#FDFBF7] p-3 rounded-md">
              <label
                htmlFor="input-weight"
                className="block text-xs text-[#594A3C] uppercase tracking-wider mb-1"
              >
                Berat Badan
              </label>
              <div className="flex items-center">
                <input
                  id="input-weight"
                  type="number"
                  min={20}
                  max={300}
                  value={weight}
                  onChange={(e) => setField('weight', Number(e.target.value))}
                  className="w-full bg-transparent text-xl font-semibold text-[#2D241B] outline-none"
                />
                <span className="text-[#594A3C] flex-shrink-0">kg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-36 h-48 md:w-48 md:h-64 bg-[#2C2C2C] rounded-2xl overflow-hidden flex-shrink-0 shadow-inner">
          {placeholderMessage ? (
            <ModelPlaceholder message={placeholderMessage} />
          ) : (
            <>
              <img
                key={modelPath}
                src={modelPath}
                alt={`Preview model ${gender} ukuran ${category.size}`}
                className="w-full h-full object-cover object-top animate-fadeIn"
                loading="eager"
                decoding="async"
              />
              <BmiBadge bmi={bmi} category={category} />
            </>
          )}
        </div>

      </div>
    </section>
  );
}