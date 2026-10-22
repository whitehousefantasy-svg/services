function Icon({ children }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-rose-300"
    >
      {children}
    </svg>
  );
}

const columns = [
  {
    title: "About Castra",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Products", href: "#" },
      { label: "Services", href: "#services" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Frequently Asked Questions", href: "#" },
      { label: "Shopping Information", href: "#" },
      { label: "Order Enquiries", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms and Conditions", href: "#" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "#" },
      { label: "Kitchen", href: "#" },
      { label: "Cleaning", href: "#" },
      { label: "Bathroom", href: "#" },
      { label: "Home Organization", href: "#" },
      { label: "Offers", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-neutral-950 px-6 pt-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-lg font-bold">{column.title}</h3>
            <ul className="space-y-3 text-gray-300">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-4 text-lg font-bold">Visit or Contact Us</h3>

          <div className="mb-3 flex gap-3 text-gray-300">
            <Icon>
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </Icon>
            <p>Elius Plaza, 6th Floor, Room 3, Thika, Kenya</p>
          </div>

          <div className="flex gap-3">
            <Icon>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </Icon>
            <a href="tel:0771317400" className="font-medium hover:underline">
              0771317400
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Official social links will appear when configured.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-neutral-800 py-6 text-sm text-gray-300">
        <p>© 2026 Castra Households. Everything Your Home Needs.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white hover:underline">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;