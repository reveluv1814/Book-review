import clsx from "clsx";
import React from "react";

const Modal = ({
  children,
  buttons,
  openModal,
  loading,
  onClose,
  onConfirm,
  icono,
  className,
}: {
  children: React.ReactNode;
  icono?: React.ReactNode;
  openModal: boolean;
  loading?: boolean;
  buttons?: React.ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 items-center justify-center bg-black/50",
        openModal ? "flex" : "hidden",
      )}
      onClick={onClose}
    >
      <div className="w-full max-w-md p-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <button
            type="button"
            className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-md"
            onClick={onClose}
          >
            <i className="ri-close-circle-line" />
            <span className="sr-only">Close modal</span>
          </button>

          <div className={clsx("text-center", className)}>
            {icono || <i className="ri-information-line" />}

            {children}

            <div className="flex justify-center gap-4">
              {buttons || (
                <>
                  <button
                    className="text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:ring-rose-300 rounded-md text-sm px-4 py-2.5 font-medium"
                    onClick={onConfirm}
                    disabled={loading}
                  >
                    Confirmar
                  </button>

                  {/* <!-- Cancel --> */}
                  <button
                    className="text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 rounded-md text-sm px-4 py-2.5 font-medium"
                    onClick={onClose}
                    disabled={loading}
                  >
                    Cancelar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
