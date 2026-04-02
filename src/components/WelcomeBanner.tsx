"use client";

const WelcomeBanner = ({ userName }: { userName: string | null }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-background-secondary p-8 shadow-lg sm:p-10 text-custom">
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm">
            <i className="ri-book-fill text-xl " />
          </div>
          <h2 className="text-2xl font-bold ">
            ¡Bienvenido, {userName || ""}!
          </h2>
          <i className="ri-hand text-2xl"></i>
        </div>

        <p className=" text-sm leading-relaxed text-custom/90">
          Aquí puedes descubrir, compartir y explorar las mejores reseñas de
          libros. Mantén un registro de tus lecturas favoritas y conecta con
          otros apasionados por la lectura.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
