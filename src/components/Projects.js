import { useState } from 'react';
import Button from './Button';
import ProjectForm from './ProjectForm';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';
import portfolio from '../assets/images/projects/portfolio.png';
import ImageModal from './ImageModal';
const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModifyMode, setModifyMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { isLoggedIn, userData, refreshKey } = useAuth();
  const [projects, setProejcts] = useState([]);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3002/projects')
      .then((response) => response.json())
      .then((data) => {
        setProejcts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshKey]);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setImageModalOpen(true);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    // 추가적으로 수정 모드 종료 또는 다음 단계로 넘어가는 로직 구현
  };
  return (
    <article className='child:m-6'>
      <h2 className='font-hanna text-center text-xl'>프로젝트</h2>
      <div className='flex justify-end gap-2'>
        <Button
          color='gray'
          value={!isModifyMode ? 'MODE' : '해제'}
          onClick={() => setModifyMode((current) => !current)}
        ></Button>
        <Button value='추가' onClick={() => setModalOpen(true)}></Button>
        {isModalOpen && <ProjectForm onClose={() => setModalOpen(false)} />}
      </div>
      <ul className={''}>
        {projects.map((project) => (
          <div className='relative'>
            <li
              className={`${
                isModifyMode
                  ? `transition duration-150 bg-black ${
                      isModifyMode && selectedProject === project
                        ? 'bg-opacity-50'
                        : 'bg-opacity-10'
                    }`
                  : ''
              } grid gap-2 grid-cols-2 items-center border-2 m-2 child:block child:mb-2 child:text-sm child:font-medium child:text-gray-900 child:dark:text-white project`}
              key={project.id}
              onClick={() => handleProjectSelect(project)}
            >
              <div>프로젝트 이름 : {project.name}</div>
              <div className='relative group row-span-5 cursor-pointer'>
                <img
                  src={project.image_path}
                  alt={`${project.name}에 대한 그림설명`}
                  className={`${isModifyMode ? 'opacity-0' : 'opacity-100'}`}
                />
                {isModifyMode ? (
                  ''
                ) : (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleImageClick(portfolio);
                    }}
                    className={''}
                  >
                    <span className='text-white text-lg absolute inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
                      크게 보기
                    </span>
                  </div>
                )}
              </div>
              <div>버전 : {project.version}</div>
              <div>소스코드 : {project.repository}</div>
              <div>호스팅 : {project.url}</div>
              <div>생성일 : {project.created_at}</div>
              <div className='col-span-2'>설명 : {project.description}</div>
            </li>
            {isModifyMode && selectedProject === project && (
              <div className='absolute inset-0 z-20 flex justify-center items-center gap-2'>
                <Button
                  onClick={() => setModalOpen(true)}
                  color='green'
                  value='수정'
                ></Button>
                {isModalOpen && (
                  <ProjectForm
                    mode={'modify'}
                    onClose={() => setModalOpen(false)}
                  />
                )}
                <Button color='red' value='삭제'></Button>
              </div>
            )}
          </div>
        ))}
      </ul>
      <ImageModal
        isOpen={isImageModalOpen}
        imageSrc={selectedImage}
        onClose={() => setImageModalOpen(false)}
      />
    </article>
  );
};

export default Projects;
