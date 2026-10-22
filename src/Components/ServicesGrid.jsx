import ServiceCard from "./ServiceCard";

function Icon({ children }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const services = [
  {
    title: "Product Enquiries",
    text: "Ask us about household products and options.",
    icon: (
      <Icon>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </Icon>
    ),
  },
  {
    title: "Bulk Purchase Enquiries",
    text: "Contact our team to discuss your requirements.",
    icon: (
      <Icon>
        <path d="M16.5 9.4 7.5 4.21" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
        <path d="M12 22.08V12" />
      </Icon>
    ),
  },
  {
    title: "Order Assistance",
    text: "Get help with an order enquiry.",
    icon: (
      <Icon>
        <rect x="8" y="2" width="8" height="4" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
      </Icon>
    ),
  },
  {
    title: "In-Store Assistance",
    text: "Visit us at Elius Plaza in Thika.",
    icon: (
      <Icon>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </Icon>
    ),
  },
];

function ServicesGrid() {
  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold text-neutral-900">
          How We Can Help
        </h1>
        <p className="mb-8 text-gray-600">
          Talk to us about the household essentials you need.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;