function ServiceCard({ icon, title, text }) {
  return (
    <div className="border border-gray-300 bg-stone-50 p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center bg-rose-900 text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-neutral-900">{title}</h3>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}

export default ServiceCard;