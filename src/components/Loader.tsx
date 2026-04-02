"use client";

const Loader = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-700 shadow-sm">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
        <p>Verificando sesion...</p>
      </div>
    </div>
  );
};

export default Loader;
