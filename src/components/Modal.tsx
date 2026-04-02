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
        "fixed inset-0 z-50 items-center justify-center bg-black/40",
        openModal ? "flex" : "hidden",
      )}
      onClick={onClose}
    >
      <div className="w-full max-w-md p-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-background-secondary rounded-2xl shadow-lg p-8">
          <button
            id="close-modal"
            type="button"
            className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 text-text/60 hover:bg-third/10 hover:text-third rounded-full transition-all cursor-pointer"
            onClick={onClose}
          >
            <i className="ri-close-line text-xl" />
            <span className="sr-only">Close modal</span>
          </button>

          <div className={clsx("text-center", className)}>
            <div className="mb-4 flex justify-center text-4xl text-third">
              {icono || <i className="ri-information-line" />}
            </div>

            <div className="mb-8 text-text">{children}</div>

            <div className="flex justify-end gap-3">
              {buttons || (
                <>
                  <button
                    className="text-primary bg-background-secondary border border-primary hover:bg-[#667EEA]/20 transition-colors rounded-lg text-sm px-6 py-2.5 font-medium disabled:opacity-50 cursor-pointer"
                    onClick={onClose}
                    disabled={loading}
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-white bg-primary hover:bg-[#667EEA]/90 transition-colors rounded-lg text-sm px-6 py-2.5 font-medium disabled:opacity-50 cursor-pointer"
                    onClick={onConfirm}
                    disabled={loading}
                  >
                    Confirmar
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
