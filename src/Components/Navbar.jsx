import { useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Newsletter", href: "#newsletter" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-300 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center bg-rose-900 text-white">
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
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 9.5V21h14V9.5" />
              <path d="M10 21v-6h4v6" />
            </svg>
          </span>
          <span className="text-lg font-bold text-neutral-900">
            Castra Households
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-medium text-gray-700 hover:text-rose-900"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:0771317400"
              className="bg-rose-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-rose-950"
            >
              Call 0771317400
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="cursor-pointer border border-gray-400 p-2 text-neutral-900 md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-gray-300 bg-stone-100 px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-medium text-gray-800"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="tel:0771317400"
              className="block bg-rose-900 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Call 0771317400
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;