import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Wajib di-import agar peta tidak berantakan
import L from 'leaflet';

// --- PERBAIKAN ICON DEFAULT LEAFLET DI VITE ---
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// ----------------------------------------------

const ContactLocation = () => {
  // Koordinat disesuaikan ke area Jl. Pronoyudo, Dau, Kota Batu
  const position = [-7.9206, 112.5489];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#FAF6F2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        
        {/* CARD KIRI: Informasi Galeri (Dark Theme) */}
        {/* Tambahan z-10 agar selalu berada di atas peta saat di layar kecil */}
        <div className="flex-1 bg-gradient-to-br from-[#4A452E] via-[#001020] via-60% to-[#001020] p-10 md:p-14 rounded-sm flex flex-col justify-center text-[#EFEAE4] shadow-lg relative z-10">
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

        {/* CARD KANAN: Integrasi Peta Leaflet */}
        {/* z-0 sangat penting agar peta leaflet tidak menembus navbar/modal kamu */}
        <div className="flex-[1.5] w-full min-h-[350px] lg:min-h-[450px] rounded-sm overflow-hidden shadow-lg relative bg-[#E6DDD6] z-0">
          <MapContainer 
            center={position} 
            zoom={16} 
            scrollWheelZoom={false} // Mencegah peta ter-zoom tidak sengaja saat user men-scroll web ke bawah
            className="w-full h-full absolute inset-0"
          >
            {/* Menggunakan sumber peta gratis dari OpenStreetMap */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
          </MapContainer>
        </div>

      </div>
    </section>
  );
};

export default ContactLocation;