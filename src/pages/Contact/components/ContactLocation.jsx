import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useMemo } from "react";

// PENTING: Ganti dengan API Key Google Maps kamu
const GOOGLE_MAPS_API_KEY = "MASUKKAN_API_KEY_ANDA_DI_SINI"; 

const ContactLocation = () => {
  // Koordinat disesuaikan ke area Jl. Pronoyudo, Dau, Kota Batu
  const center = useMemo(() => ({ lat: -7.9206, lng: 112.5489 }), []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const options = {
    disableDefaultUI: true, 
    zoomControl: true, 
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#FAF6F2]">
      {/* Parent Container: 
        Menghapus background dan border dari sini. 
        Menggunakan items-stretch agar tinggi card kiri dan kanan sejajar di layar besar.
      */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        
        {/* CARD KIRI: Informasi Galeri (Dark Theme) */}
        <div className="flex-1 bg-gradient-to-br from-[#4A452E] via-[#001020] via-60% to-[#001020] p-10 md:p-14 rounded-sm flex flex-col justify-center text-[#EFEAE4] shadow-lg">
          <h2 className="text-[28px] font-serif mb-8 text-[#EFEAE4]">Galeri Kami</h2>
          
          <div className="flex flex-col gap-1 text-[13px] leading-relaxed mb-10 text-[#EFEAE4]/80">
            <span className="font-medium text-[#EFEAE4] mb-2">Dadap Batik Batu</span>
            <p>Jl. Pronoyudo, Semanding, Dadaprejo,<br />Kec. Dau, Kota Batu, Jawa Timur,<br />Indonesia 65323</p>
          </div>
          
          <div className="flex flex-col gap-4 text-[13px] text-[#EFEAE4]/80">
            <div className="flex items-center gap-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Sen - Sab: 08:00 - 18:00</span>
            </div>
            <div className="flex items-center gap-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+62 813 3455 5825</span>
            </div>
          </div>
        </div>

        {/* CARD KANAN: Integrasi Google Maps */}
        <div className="flex-[1.5] w-full min-h-[350px] lg:min-h-[450px] rounded-sm overflow-hidden shadow-lg relative bg-[#E6DDD6]">
          {isLoaded ? (
            <GoogleMap
              mapContainerClassName="w-full h-full absolute inset-0"
              center={center}
              zoom={16}
              options={options}
            >
              {/* Kamu bisa custom icon Marker di sini nanti */}
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[#5C4D46] font-semibold tracking-widest text-sm animate-pulse">
              MEMUAT PETA...
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactLocation;