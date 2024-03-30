import kimtokki from '../assets/images/kimtokkis/증명사진.jpeg';
// import { useState, useEffect } from 'react';

const About = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   setPosts([
  //     {
  //       id: 1,
  //       title: '성취와 혁신을 추구하는 집문가',
  //       desc: `저는 어려운 문제를 해결하고 반복되는 업무를 효율적으로 개선하는 데 큰 성취감을 느낍니다.
  //       코딩은 이러한 개선을 위해 필수적인 요소로, 광고 운영과 매체 관리 업무에서 얻은 경험을 통해 프로그래밍의
  //       놀라운 능력에 매료되었습니다. 생각을 현실로 전환하고 복잡한 업무를 단순화하는 프로그래밍의 매력에 빠져
  //       현재는 독학으로 코딩을 공부하고 있습니다.`,
  //     },
  //     {
  //       id: 2,
  //       title: '균형 잡힌 일상, 긍정적인 생활',
  //       desc: `제 하루는 건강한 습관으로 시작됩니다. 아침에 일어나 이불을 정리하고 코딩을 하며 하루를 시작합니다.
  //       이어 아내의 출근을 돕고, 공원에서 달리기를 하며 에너지를 충전합니다.
  //       이런 일상은 저에게 긍정적인 사고와 행동력을 부여하며, 매일 조금씩 발전하는 것의 중요성을 일깨워 줍니다.
  //       이는 일, 가정, 자기 관리를 포함한 생활 전반에 긍정적인 영향을 미칩니다.`,
  //     },
  //   ]);
  // }, []);

  return (
    <article className='child:m-10'>
      <h2 className='font-hanna text-center text-xl'>김토끼's</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>이름 : 김현석</div>
        <div>생년월일 : 1986. 2. 13</div>
        <div>연락처 : 010-3081-7615</div>
        <div>이메일 : jjangnarana@gmail.com</div>
      </div>
      <div className='flex flex-col justify-center'>
        <h6>자기소개</h6>
        <img src={kimtokki} width='250' alt='증명사진' />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          magni excepturi, aspernatur vel quis doloribus eaque tempora saepe hic
          porro, dicta ex! Nam delectus expedita nobis repellendus laboriosam,
          aliquam harum!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          magni excepturi, aspernatur vel quis doloribus eaque tempora saepe hic
          porro, dicta ex! Nam delectus expedita nobis repellendus laboriosam,
          aliquam harum!
        </p>
      </div>
      <div>이력서</div>
    </article>
  );
};

export default About;
