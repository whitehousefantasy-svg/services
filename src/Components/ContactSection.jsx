import EnquiryForm from "./EnquiryForm";

const whatsappLink =
  "https://wa.me/254771317400?text=" +
  encodeURIComponent("Hello Castra Households, I have a question.");

function ContactSection() {
  return (
    <section id="contact" className="bg-stone-100 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-bold text-neutral-900">
          We’re Here to Help
        </h2>
        <p className="mb-8 text-gray-600">
          Have a question about our household products? Get in touch with
          Castra Households.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-bold text-neutral-900">Visit us</h3>
            <p className="mb-4 text-gray-700">
              Elius Plaza, 6th Floor, Room 3, Thika, Kenya
            </p>

            <a
              href="tel:0771317400"
              className="block font-bold text-rose-900 underline"
            >
              Call 0771317400
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block font-bold text-rose-900 underline"
            >
              Chat With Us on WhatsApp
            </a>
            <p className="mt-2 text-xs text-gray-600">
              WhatsApp opens in a new tab. Sending the prefilled greeting is up
              to you.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;