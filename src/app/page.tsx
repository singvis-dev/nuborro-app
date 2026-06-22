export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-paper">
      <div className="text-center px-4">
        <h1 className="font-display font-black text-5xl text-ink mb-4 tracking-tight">
          Nu<span className="text-accent">borro</span>
        </h1>
        <p className="text-muted text-lg mb-8">
          Borrow anything, from anyone around you.
        </p>
        <div className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium">
          🚀 MVP in progress
        </div>
      </div>
    </main>
  )
}
