import { useState } from 'react';
import { supabaseCreate } from '../utils';
import { useNavigate } from 'react-router-dom';
const LabelInput = ({
  type = null,
  labelName,
  attribute,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <label
        htmlFor={attribute}
        class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {labelName}
      </label>
      {type ? (
        <textarea
          rows={4}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          name={attribute}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          name={attribute}
          type='text'
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

const CreateProject = ({ onClose }) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('1.0.0.0');
  const [description, setDescription] = useState('');
  const [repository, setRepository] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-5 rounded-lg shadow-lg max-w-sm w-full'>
        <h2 className='font-bold text-xl mb-4'>프로젝트 생성</h2>

        <div class='grid gap-6 mb-6 md:grid-cols-1`'>
          <div>
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
        </div>
        <div className='grid grid-cols-4 gap-2'>
          <button
            onClick={() => {
              const formData = { name, version, repository, url, description };
              supabaseCreate('projects/create/', formData, navigate('/'));
            }}
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

export default CreateProject;
