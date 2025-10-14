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
        className="min-h-screen flex items-center justify-center w-full relative z-10 py-20 bg-transparent/30"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md max-w-lg w-full px-8 py-12 rounded-[2rem] shadow-2xl shadow-black/20"
        >
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center tracking-wider">
            Contattami! 👋
          </h2>

          <div className="mb-6">
            <label className="block mb-2 text-white/80 font-semibold uppercase text-sm tracking-widest">
              Nome
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-black/20 text-white border border-transparent 
                           focus:outline-none focus:ring-2 focus:ring-redCrayola focus:border-redCrayola/50 
                           placeholder-gray-400 transition-all duration-200"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Il tuo nome completo"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-white/80 font-semibold uppercase text-sm tracking-widest">
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-black/20 text-white border border-transparent 
                           focus:outline-none focus:ring-2 focus:ring-redCrayola focus:border-redCrayola/50 
                           placeholder-gray-400 transition-all duration-200"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nome.cognome@esempio.it"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-white/80 font-semibold uppercase text-sm tracking-widest">
              Messaggio
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-xl bg-black/20 text-white border border-transparent 
                           h-32 focus:outline-none focus:ring-2 focus:ring-redCrayola focus:border-redCrayola/50 
                           placeholder-gray-400 transition-all duration-200 resize-none"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Cosa hai in mente?"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-redCrayola text-white font-extrabold w-full py-3 rounded-xl uppercase text-lg tracking-wider
                       shadow-lg shadow-redCrayola/50 transition-all duration-300 
                       hover:shadow-xl hover:shadow-redCrayola/70 hover:bg-red-800 disabled:opacity-50 disabled:shadow-none"
          >
            {loading ? "Invio..." : "Invia Messaggio"}
          </button>
          {success && (
            <p className="mt-4 text-green-400 font-bold text-center">
              ✅ Messaggio inviato con successo! Ti risponderò presto.
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-500 font-bold text-center">
              ❌ Errore durante l'invio. Riprova più tardi.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
