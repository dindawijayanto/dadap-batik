import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CatalogCard from "../../components/ProductCard/CatalogCard";
import CatalogModal from "../../components/ProductCard/CatalogModal";

// 1. DUMMY DATA & FILTERS (DI LUAR KOMPONEN)
// Diletakkan di sini agar tidak memicu warning ESLint "exhaustive-deps"
const dummyDatabase = [
  {
    id: "prod-001",
    title: "Kawung Sari Gold",
    price: 2450000,
    priceFormatted: "Rp 2.450.000",
    description: "HAND-STAMPED PRIMISSIMA COTTON",
    category: "GEOMETRIC (KAWUNG)",
    image: "/REPLACE_IMAGE_HERE",
    dimension: "Hand-Stamped Primissima Cotton",
    technique: "Batik Tulis Traditional",
    details: {
      philosophy: {
        text: "This pattern represents the divine connection between earth and sky. Historically worn during sacred ceremonies, it symbolizes a journey towards enlightenment and spiritual growth.",
        quote: "A soul woven into every stroke, a story told in every line."
      },
      craftsmanship: {
        breathability: 95,
        durability: 88,
        text: "Made from Premium Silk, it offers superior comfort and a lustrous drape suitable for luxury occasion wear."
      },
      care: {
        text: "Avoid direct sunlight and use traditional lerak soap for washing if dry cleaning is unavailable."
      }
    }
  },
  // Kamu bisa menduplikat object di atas untuk menambahkan produk prod-002, prod-003, dst...
];

const filters = [
  "JENIS BATIK",
  "GEOMETRIC (KAWUNG)",
  "ORGANIC (PARANG)",
  "COASTAL (MEGA MENDUNG)",
];

const Catalog = () => {
  // 2. STATE MANAGEMENT
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("JENIS BATIK");
  
  // 3. URL PARAMETER ROUTING MANAGEMENT
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedItemId = searchParams.get("item"); // Membaca URL: misal "?item=prod-001"

  // Mencari produk yang sesuai dengan ID dari URL
  const selectedProduct = dummyDatabase.find(p => p.id === selectedItemId);

  // 4. FUNGSI KENDALI MODAL
  const closeModal = () => {
    setSearchParams({}); // Mengosongkan parameter di URL untuk menutup modal
  };

  const openModal = (productId) => {
    setSearchParams({ item: productId }); // Menambahkan ID ke URL untuk membuka modal
  };

  // 5. API FETCH SIMULATION
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        // Simulasi delay jaringan (hapus ini saat pakai API asli)
        setTimeout(() => {
          setProducts(dummyDatabase);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Gagal memuat:", error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-[#FAF6F2] min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24">
      
      {/* Header Section */}
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#4D342D] mb-4">
          The Heritage Collection
        </h1>
        <p className="text-[#5C4D46] leading-relaxed text-sm md:text-base max-w-2xl">
          Explore our curated archive of hand-stamped and hand-painted batik. Each piece is a canvas of Javanese philosophy, meticulously crafted over months by local artisans.
        </p>
      </div>

      {/* Filter / Group By Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-b border-[#E6DDD6] py-4 mb-10 gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold text-[#8C7A71] tracking-widest mr-2">GROUP BY:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#4D342D] text-white" // Active State
                  : "bg-[#EAE4DF] text-[#8C7A71] hover:bg-[#D5CDC4]" // Inactive State
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Filter Icon Placeholder */}
        <button className="hidden md:flex text-[#4D342D] hover:text-black">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M7 12H17M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Product Grid */}
      {isLoading ? (
        <div className="text-center py-20 text-[#8C7A71] font-semibold tracking-widest animate-pulse">
          MEMUAT KATALOG...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <CatalogCard
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              onClick={() => openModal(product.id)} // Eksekusi buka modal saat kartu diklik
            />
          ))}
        </div>
      )}

      {/* Render Modal jika ada produk yang dipilih di URL */}
      {selectedProduct && (
        <CatalogModal 
          product={selectedProduct} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default Catalog;