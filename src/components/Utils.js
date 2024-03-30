import { useState, useRef } from 'react';

const Utils = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = [...event.dataTransfer.files];
    setFiles(droppedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const onConvertButtonClick = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await fetch('http://localhost:3002/convert', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Server response wasn't OK");
      }
      const data = await response.blob();
      const downloadUrl = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'converted.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
    return;
  };

  return (
    <article className='flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-hanna'>이미지 변환</h2>
      <div className='flex flex-col justify-center items-center'>
        <input
          className='hidden'
          ref={fileInputRef}
          type='file'
          multiple
          onChange={handleFileChange}
        />
        <button
          className='border-2 border-black p-2 bg-stone-100 text-xs font-inter'
          onClick={handleClick}
        >
          파일 업로드
        </button>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            border: '2px dashed #ccc',
            padding: '20px',
            marginTop: '20px',
          }}
        >
          여기 파일을 끌어와도 돼요
        </div>
        {files.length > 0 ? (
          <ul className='border-2 p-2 text-xs m-2'>
            {files.map((file, index) => (
              <li key={index}>
                {index + 1}. {file.name}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
        {files.length > 0 ? (
          <button
            onClick={onConvertButtonClick}
            class='border-2 p-2 border-indigo-600 rounded-md
      text-xl font-inter animate-blink bg-blue-200'
          >
            변환하기
          </button>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};

export default Utils;
