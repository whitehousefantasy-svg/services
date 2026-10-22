import { useState } from "react";

const emptyForm = { name: "", email: "", message: "" };

const fieldClass =
  "w-full border border-gray-400 bg-white p-3 text-sm text-neutral-900";

function EnquiryForm() {
  const [formData, setFormData] = useState(emptyForm);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    alert("Enquiry saved. Thank you!");
    setFormData(emptyForm);
  }

  return (
    <div className="border border-gray-300 bg-white p-6">
      <h3 className="mb-3 text-lg font-bold text-neutral-900">
        Send an enquiry
      </h3>
      <p className="mb-2 border border-gray-300 bg-stone-100 p-3 text-sm text-gray-700">
        Submissions are saved to a Canva Sheet. Message delivery to the team
        requires a configured notification service.
      </p>

      <form onSubmit={handleSubmit}>
        <label className="mb-1.5 mt-4 block text-sm font-bold">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={fieldClass}
        />

        <label className="mb-1.5 mt-4 block text-sm font-bold">
          Phone Number or Email
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={fieldClass}
        />

        <label className="mb-1.5 mt-4 block text-sm font-bold">Message</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className={`${fieldClass} resize-y`}
        />

        <button
          type="submit"
          className="mt-5 cursor-pointer bg-rose-900 px-5 py-3 text-sm font-bold text-white hover:bg-rose-950"
        >
          Save enquiry
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;