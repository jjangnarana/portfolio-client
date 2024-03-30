import portfolio from '../assets/images/projects/portfolio.png';
const Projects = () => {
  return (
    <article className='child:m-6'>
      <h2 className='font-hanna text-center text-xl'>프로젝트</h2>
      <div>
        <img
          className='border-2'
          width={960}
          src={portfolio}
          alt='portfolio project'
        />
      </div>
      <ul>
        <li>
          <h6>서비스명</h6>
          <p>{'김토끼 포트폴리오'}</p>
        </li>
        <li>
          <h6>제작기간</h6>
          <p>{'2024. 3. 21 ~'}</p>
        </li>
        <li>
          <h6>버전</h6>
          <p>{'1.0.0.0'}</p>
        </li>
        <li>
          <h6>설명</h6>
          <p>
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            cumque mollitia assumenda dignissimos sequi esse. Explicabo
            molestiae quae ipsum, iusto pariatur facilis repudiandae laboriosam
            rerum expedita, consectetur debitis harum modi.`}
          </p>
        </li>
        <li>
          <h6>소스코드</h6>
          <p>{'https://github.com/jjangnarana/number-baseball-frontend.git'}</p>
        </li>
        <li>
          <h6>사이트주소</h6>
          <p>{'http://localhost:3000/'}</p>
        </li>
      </ul>
    </article>
  );
};

export default Projects;
