export default function Trend() {
  const trends = Array.from({ length: 10 }, (_, i) => ({
    trendName: `트렌드 ${i + 1}`,
    posts: Math.floor(Math.random() * 10000) + 1,
  }));
  return (
    <div className='p-2'>
      {trends.map((trend, index) => (
        <div key={index} className='mt-4 px-2'>
          <p>Real time Trend</p>
          <span className='font-bold'>{trend.trendName}</span>
          <p>{trend.posts.toLocaleString()} posts</p>
        </div>
      ))}
    </div>
  );
}
