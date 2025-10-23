import { useState } from "react";
import emailjs from "@emailjs/browser";
import gsap, { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      tl.from(sectionRef.current, { y: 50, autoAlpha: 0, duration: 0.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    if (form.honeypot.trim() !== "") {
      console.warn("Bot rilevato! Invio bloccato");
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setError("Per favore compila tutti i campi.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Inserisci un'email valida.");
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "", honeypot: "" });

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        setError("Errore durante l'invio, riprova");
      });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-6 bg-transparent/30 relative z-10"
    >
      <form
        onSubmit={handleSubmit}
        className="relative max-w-lg w-full bg-[#0b132b]/80 backdrop-blur-lg 
                   border border-yellow-400/30 rounded-3xl p-10 
                   shadow-[0_0_25px_rgba(255,215,0,0.15)]
                   transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,215,0,0.3)]"
      >
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                        from-yellow-400/10 via-transparent to-yellow-400/10 
                        pointer-events-none"
        ></div>

        <h2 className="text-4xl font-extrabold text-white text-center mb-10 drop-shadow-[0_0_10px_#00ffff]">
          Contattami ✉️
        </h2>

        <div className="mb-6">
          <label className="block mb-2 text-yellow-300 font-semibold uppercase text-sm tracking-widest">
            Nome
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Il tuo nome completo"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white 
                       border border-transparent focus:outline-none 
                       focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400/50 
                       placeholder-gray-400 transition-all duration-200"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-yellow-300 font-semibold uppercase text-sm tracking-widest">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="nome.cognome@esempio.it"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white 
                       border border-transparent focus:outline-none 
                       focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400/50 
                       placeholder-gray-400 transition-all duration-200"
          />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-yellow-300 font-semibold uppercase text-sm tracking-widest">
            Messaggio
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Cosa hai in mente?"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white h-32 
                       border border-transparent focus:outline-none 
                       focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400/50 
                       placeholder-gray-400 transition-all duration-200 resize-none"
          />
        </div>
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={loading || success}
          className={`bg-gradient-to-r from-yellow-400 to-yellow-300 
                     text-blue-900 font-extrabold w-full py-3 rounded-xl 
                     uppercase text-lg tracking-wider shadow-[0_0_20px_rgba(255,215,0,0.4)] 
                     transition-all duration-300 
                     hover:shadow-[0_0_35px_rgba(255,215,0,0.7)] hover:scale-[1.02]
                     disabled:opacity-50 disabled:scale-100 
                     ${success ? "bg-green-400 text-green-900" : ""}`}
        >
          {loading ? "Invio..." : success ? "Inviato!☑" : "Invia Messaggio"}
        </button>
      </form>
    </section>
  );
}
