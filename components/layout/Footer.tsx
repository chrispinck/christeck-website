export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div>
          <h3 className="text-xl font-bold text-white">
            CHRISTECK
          </h3>

          <p className="text-sm">
            Engineering Knowledge + Engineering Services
          </p>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} CHRISTECK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}