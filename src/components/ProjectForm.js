import { useState, useRef, forwardRef, useEffect } from 'react';
import { supabaseCreate } from '../utils';
import { useNavigate } from 'react-router-dom';

const LabelInput = forwardRef(
  (
    {
      type = null,
      labelName,
      attribute,
      value,
      onChange,
      placeholder,
      className,
      onDrop,
      onDragOver,
      handleClick,
      preview,
    },
    ref
  ) => {
    return (
      <div className={`${className}`}>
        <label
          htmlFor={attribute}
          class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          {labelName}
        </label>
        {type === 'textarea' && (
          <textarea
            rows={6}
            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            name={attribute}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          ></textarea>
        )}
        {!type && (
          <input
            className={`bg-gray-50 border border-gray-300 text-gray900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border: '2px dashed #ccc',
          padding: '30px',
          marginTop: '20px',`}
            name={attribute}
            type='text'
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
        {type === 'image' && (
          <div>
            <input
              className={`hidden`}
              ref={ref}
              type='file'
              multiple
              onChange={onChange}
            />
            <div className='grid grid-cols-2'>
              {preview ? (
                <img
                  className='col-span-2 object-cover w-36 h-36'
                  src={preview}
                  alt='Preview'
                />
              ) : (
                <div
                  className='flex justify-center items-center p-10 border-dashed border-2 col-span-2 cursor-pointer text-5xl'
                  onClick={handleClick}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                >
                  +
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

const ProjectForm = ({ mode, onClose }) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('1.0.0.0');
  const [description, setDescription] = useState('');
  const [repository, setRepository] = useState('');
  const [url, setUrl] = useState('');
  const [image_path, setImage_path] = useState('');
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState();
  const [formSubmited, setFormSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (formSubmited && image_path) {
      const formData = {
        name,
        version,
        repository,
        url,
        description,
        image_path, // Now this will have the updated value
      };
      // Now call the API with the formData
      supabaseCreate('projects/create/', formData, () => navigate('/'));
      setFormSubmitted(false); // Reset the form submitted flag
    }
  }, [image_path, formSubmited]);
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const newFiles = [...event.target.files];
    setFiles(newFiles);
    if (newFiles[0] && newFiles[0].type.substr(0, 5) === 'image') {
      const reader = new FileReader();

      reader.onloadend = () => {
        // 파일 읽기가 완료되면 preview 상태를 업데이트합니다.
        setPreview(reader.result);
      };

      reader.readAsDataURL(newFiles[0]);
    } else {
      setPreview('');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = [...event.dataTransfer.files];
    setFiles(droppedFiles);
    if (droppedFiles[0] && droppedFiles[0].type.substr(0, 5) === 'image') {
      const reader = new FileReader();

      reader.onloadend = () => {
        // 파일 읽기가 완료되면 preview 상태를 업데이트합니다.
        setPreview(reader.result);
      };

      reader.readAsDataURL(droppedFiles[0]);
    } else {
      setPreview('');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSave = async () => {
    const imgPath = await uploadImg();
    if (imgPath) {
      setImage_path(imgPath);
      setFormSubmitted(true);
    } else {
      // Handle the error if imgPath is not returned
      console.error('Failed to upload image');
    }
  };
  const uploadImg = async () => {
    const formData = new FormData();
    formData.append('image', files[0]); // 'files' 상태에서 첫 번째 파일을 선택

    const response = await fetch('http://localhost:3002/uploadimg', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.imgPath) {
      return data.imgPath;
    }
    return null;
  };
  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-5 rounded-lg shadow-lg max-w-2xl w-full'>
        <h2 className='font-bold text-xl mb-4'>프로젝트 생성</h2>

        <div className='grid grid-cols-2	gap-2 mb-6'>
          <LabelInput
            labelName={'프로젝트명'}
            attribute={'name'}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={'프로젝트의 이름을 입력하세요'}
          ></LabelInput>
          <LabelInput
            className={'row-span-2'}
            type={'image'}
            handleClick={handleClick}
            labelName={'이미지'}
            attribute={'image'}
            value={image_path}
            onChange={handleFileChange}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            preview={preview}
            ref={fileInputRef}
          ></LabelInput>
          <LabelInput
            labelName={'버전'}
            attribute={'version'}
            value={version}
            onChange={(e) => {
              setVersion(e.target.value);
            }}
            placeholder={'버전 정보는 1.0.0.0이 어떤가요?'}
          ></LabelInput>
          <LabelInput
            labelName={'소스코드'}
            attribute={'repository'}
            value={repository}
            onChange={(e) => {
              setRepository(e.target.value);
            }}
            placeholder={'github repository 주소를 입력하세요'}
          ></LabelInput>
          <LabelInput
            labelName={'사이트URL'}
            attribute={'url'}
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            placeholder={'호스팅 url을 입력하세요'}
          ></LabelInput>
          <LabelInput
            className={'col-span-2'}
            type={'textarea'}
            labelName={'프로젝트내용'}
            attribute={'description'}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder={'프로젝트의 내용을 입력하세요'}
          ></LabelInput>
        </div>
        <div className='grid grid-cols-4 gap-2'>
          <button
            onClick={handleSave}
            className='col-start-3 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150'
          >
            저장
          </button>
          <button
            onClick={onClose}
            className='py-2 px-4 bg-gray-500 text-white rounded hover:bg-blue-700 transition duration-150'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
