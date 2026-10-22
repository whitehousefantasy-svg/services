import ServiceCard from "./Services.jsx";
import EnquiryForm from "./EnquiryForm.jsx";
import NewsLetter from "./NewsLetter.jsx";

function Services() {
  return (
    <main>
      <section>
        <h1>How We Can Help</h1>
        <p>Talk to us about the household essentials you need.</p>

        <div>
          <ServiceCard
            title="Product Enquiries"
            text="Ask us about household products and options."
          />
          <ServiceCard
            title="Bulk Purchase Enquiries"
            text="Contact our team to discuss your requirements."
          />
          <ServiceCard
            title="Order Assistance"
            text="Get help with an order enquiry."
          />
          <ServiceCard
            title="In-Store Assistance"
            text="Visit us at Elius Plaza in Thika."
          />
        </div>
      </section>

      <section>
        <h2>We’re Here to Help</h2>
        <p>Have a question about our household products? Get in touch with Castra Households.</p>

        <div>
          <div>
            <h3>Visit us</h3>
            <p>Elius Plaza, 6th Floor, Room 3, Thika, Kenya</p>
            <a href="tel:0771317400">Call 0771317400</a>

            <br />

            <a
              href="https://wa.me/254771317400?text=Hello Castra Households, I have a question."
              target="_blank"
              rel="noreferrer"
            >
              Chat With Us on WhatsApp
            </a>
            <p>WhatsApp opens in a new tab. Sending the prefilled greeting is up to you.</p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <NewsLetter />
    </main>
  );
}

export default Services;