import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    emailjs
      .send(
        "service_7mlqbfe",
        "template_l4ewa5n",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "XsD9xq3UbGRyzuYDM"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        setError("Errore durante l'invio, riprova");
      });
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-night flex items-center justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur max-w-lg w-full px-6 py-10 rounded-3xl"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Scrivimi!
          </h2>
          <div className="mb-6">
            <label className="block mb-2 text-white font-semibold">Nome</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-redCrayola"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Il tuo nome"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-white font-semibold">Email</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-redCrayola"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="La tua email"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-white font-semibold">
              Messaggio
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 h-32 focus:outline-none focus:ring-2 focus:ring-redCrayola"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Scrivi il tuo messaggio..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-redCrayola hover:bg-red-900 text-white font-bold w-full py-3 rounded-xl transition"
          >
            {loading ? "Invio..." : "Invia"}
          </button>

          {success && (
            <p className="mt-4 text-green-400 font-semibold">
              Messaggio Inviato con successo!
            </p>
          )}
          {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}
        </form>
      </section>
    </>
  );
}
