import { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    alert("Thanks! Your request was received.");
    setEmail("");
  }

  return (
    <section className="bg-stone-200 px-6 py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-neutral-900">
            Stay in the Loop
          </h2>
          <p className="mb-1 text-gray-700">
            Receive updates about new products and special offers.
          </p>
          <p className="text-xs text-gray-600">
            A subscription service must be connected before marketing emails
            can be sent.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <label className="mb-1 block text-sm font-bold">Email address</label>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="min-w-0 flex-1 border border-gray-400 bg-white p-3 text-sm"
              />
              <button
                type="submit"
                className="cursor-pointer bg-rose-900 px-5 py-3 text-sm font-bold text-white hover:bg-rose-950"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="mt-2 text-xs text-gray-600">
            By submitting, you request email updates. No subscription is
            activated yet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;