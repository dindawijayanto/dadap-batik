import ContactHeader from "./components/ContactHeader";
import ContactFormSection from "./components/ContactFormSection";
import ContactLocation from "./components/ContactLocation";
import ContactWorkshop from "./components/ContactWorkshop";

const Contact = () => {
  return (
    <div className="bg-[#FAF6F2] min-h-screen">
      <ContactHeader />
      <ContactFormSection />
      <ContactLocation />
      <ContactWorkshop />
    </div>
  );
};

export default Contact;