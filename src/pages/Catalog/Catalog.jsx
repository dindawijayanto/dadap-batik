import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CatalogCard from "../../components/ProductCard/CatalogCard";
import CatalogModal from "../../components/ProductCard/CatalogModal";
import { supabase } from "../../utils/supabase";

const filters = [
  "Tulis",
  "Cap",
  "Kombinasi",
];

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("jenis batik");

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedItemId = searchParams.get("item");

  const rawSelectedProduct = products.find(
    (p) => String(p.id) === selectedItemId,
  );

  // MAPPING DATA UNTUK MODAL
  let formattedModalProduct = null;
  if (rawSelectedProduct) {
    formattedModalProduct = {
      id: rawSelectedProduct.id,
      title: rawSelectedProduct.name,
      priceFormatted: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(rawSelectedProduct.base_price || 0),
      image: rawSelectedProduct.resolved_image_url || "/REPLACE_IMAGE_HERE",
      dimension: rawSelectedProduct.dimensions || "-",
      technique: rawSelectedProduct.production_technique || "-",
      details: {
        philosophy: {
          text:
            rawSelectedProduct.philosophy || "Belum ada informasi filosofi.",
          quote: rawSelectedProduct.quote || "A soul woven into every stroke.",
        },
        craftsmanship: {
          breathability: 95,
          durability: 88,
          text: rawSelectedProduct.description || "",
        },
        care: {
          text:
            rawSelectedProduct.care_instructions ||
            "Belum ada instruksi perawatan.",
        },
      },
    };
  }

  const closeModal = () => setSearchParams({});
  const openModal = (productId) => setSearchParams({ item: String(productId) });

  // FETCH DATA SUPABASE
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.from("products").select(`
            *,
            product_images (
              storage_path,
              is_primary
            )
          `);

        if (error) throw error;

        // PROSES DATA GAMBAR
        const processedData = (data || []).map((product) => {
          const imageRecord =
            product.product_images?.find((img) => img.is_primary) ||
            product.product_images?.[0];

          let publicImageUrl = null;
          if (imageRecord && imageRecord.storage_path) {
            publicImageUrl = imageRecord.storage_path;
          }

          return {
            ...product,
            resolved_image_url: publicImageUrl,
          };
        });

        // Data langsung di-set ke state tanpa console.log
        setProducts(processedData);
      } catch (error) {
        // Tetap menyisakan console.error ini agar jika server mati, kamu tetap tahu penyebabnya
        console.error("Gagal mengambil data dari Supabase:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // LOGIKA FILTERING
  const filteredProducts =
    activeFilter === "jenis batik"
      ? products
      : products.filter((product) => {
          const technique = product.production_technique || "";
          return technique.toUpperCase().includes(activeFilter.toUpperCase());
        });

  return (
    <div className="bg-[#FAF6F2] min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24">
      {/* Header Section */}
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-noto-serif text-[#001020] mb-4">
          Koleksi Warisan
        </h1>
        <p className="text-[#001020] font-dm-sans leading-relaxed text-sm md:text-base max-w-2xl">
          Eksplorasi batik cap dan batik tulis pilihan kami. Setiap karya
          merupakan kanvas yang memuat filosofi Jawa, yang dibuat secara teliti
          selama berbulan-bulan oleh para pengrajin lokal.
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E6DDD6] py-4 mb-10 gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-base font-regular uppercase text-[#001020] tracking-widest mr-2">
            TAMPILKAN:
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 uppercase ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#B2993D] to-[#001020] text-white"
                  : "bg-transparent text-[#001020] hover:bg-[#D5CDC4] border-1 border-[#001020]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <img src={"catalogue/filter.svg"} alt="Fallback" className="w-6 h-6" />
      </div>

      {/* Product Grid */}
      {isLoading ? (
        <div className="text-center py-20 text-[#8C7A71] font-semibold tracking-widest animate-pulse">
          MEMUAT KATALOG DARI DATABASE...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-[#8C7A71] py-10">
              Belum ada produk di kategori ini.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <CatalogCard
                key={product.id}
                title={product.name}
                price={Number(product.base_price)}
                description={product.production_technique}
                image={product.resolved_image_url}
                onClick={() => openModal(product.id)}
              />
            ))
          )}
        </div>
      )}

      {/* Render Modal */}
      {formattedModalProduct && (
        <CatalogModal product={formattedModalProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default Catalog;
