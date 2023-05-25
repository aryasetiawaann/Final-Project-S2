import { useEffect } from "react";

function TrailerPopup({ selectedTrailer, closeModal }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          {selectedTrailer && (
            <iframe
              className="youtube-trailer"
              src={`https://www.youtube.com/embed/${selectedTrailer}`}
              title="YouTube Trailer"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrailerPopup;
