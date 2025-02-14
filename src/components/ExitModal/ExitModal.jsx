import { useEffect } from "react";
import './ExitModal.scss';

// eslint-disable-next-line react/prop-types
export const ExitModal = ({ isOpen, onClose, onConfirm }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      const currentState = window.history.state;
      window.history.pushState({ modal: true }, '');

      const handlePopState = () => {
        if (window.history.state?.modal) {
          onClose();
        }
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener('popstate', handlePopState);
        if (currentState) {
          window.history.pushState(currentState, '');
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <h2 className="modal__title">Don&apos;t leave us 🥺</h2>
          <p className="modal__text">Do you really want to leave this page? Any unsaved changes will be lost.</p>

          <div className="modal__buttons">
            <button
              className="modal__button modal__button--cancel"
              onClick={onClose}
            >
              Stay on page
            </button>
            <button
              className="modal__button modal__button--confirm"
              onClick={() => {
                onConfirm();
                const confirmExit = window.confirm("See you next time");
                if (confirmExit) {
                  window.close();
                }
              }}
            >
              Leave page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};