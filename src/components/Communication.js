const Communication = () => {
  return (
    <article className='child:m-2'>
      <h2 className='font-hanna text-center text-xl'>커뮤니케이션</h2>
      <div
        className='flex flex-col justify-center items-center text-2xl font-hanna
                  child:border-2 child:w-60 child:h-18 child:m-2
                  child:flex child:justify-center child:items-center '
      >
        <div>블로그</div>
        <div>GitHub</div>
        <div>메일보내기</div>
        <div>글남기기</div>
      </div>
    </article>
  );
};

export default Communication;
