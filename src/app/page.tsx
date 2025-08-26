export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Il Mio Percorso
        </h1>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Setup Completato
          </h2>
          <p className="text-gray-600">
            Progetto Next.js con Tailwind pronto per il timeline.
          </p>
        </div>
      </div>
    </main>
  );
}
