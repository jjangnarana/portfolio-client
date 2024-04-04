const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-20 bg-black bg-opacity-75 flex justify-center items-center'>
      <div className='relative'>
        <button
          onClick={onClose}
          className='absolute right-2 top-2 px-2 pb-1 rounded text-white text-2xl bg-black'
        >
          &times;
        </button>
        <img src={imageSrc} alt='Portfolio' />
      </div>
    </div>
  );
};

export default ImageModal;
