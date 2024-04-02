import { useState } from 'react';
import Button from './Button';
import CreateProject from './CreateProject';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn, userData, refreshKey } = useAuth();
  const [projects, setProejcts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3002/projects')
      .then((response) => response.json())
      .then((data) => {
        setProejcts(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refreshKey]);

  const Loading = () => {
    return <span>Loading</span>;
  };

  return (
    <article className='child:m-6'>
      <h2 className='font-hanna text-center text-xl'>프로젝트</h2>
      <div className='flex justify-end'>
        <Button
          className={''}
          value='추가'
          onClick={() => setModalOpen(true)}
        ></Button>
        {isModalOpen && <CreateProject onClose={() => setModalOpen(false)} />}
      </div>
      <ul>
        {projects.map((project) => (
          <li className='border-2 m-2' key={project.id}>
            <p>프로젝트 이름 : {project.name}</p>
            <p>프로젝트 버전 : {project.version}</p>
            <p>프로젝트 이름 : {project.repository}</p>
            <p>프로젝트 이름 : {project.url}</p>
            <p>프로젝트 이름 : {project.created_at}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Projects;
