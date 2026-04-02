import LoginForm from "@/src/components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <i className="ri-book-fill text-2xl text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">BookReview App</h1>
          <p className="mt-2 text-sm text-white/80">
            Comparte tus reseñas y descubre nuevos libros.
          </p>
        </div>

        <div className="rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl">
          <div className="p-8">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Iniciar sesión
            </h2>

            <LoginForm />
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/70">
          © 2026 BookReview La Paz - Bolivia
        </p>
      </div>
    </div>
  );
};

export default Login;
