import React from "react";
import PageBanner from "../components/PageBanner";
// import { Contact } from "lucide-react";
import ContactUs from "../components/ContactUs";
import HiddenSEOContent from "../components/HiddenSEOContent";

const ContactPage = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        background="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        breadcrumb={[
          { label: "Contact" },
        ]}
      />
      <ContactUs />
      <HiddenSEOContent />
    </>
  );
};

export default ContactPage;
