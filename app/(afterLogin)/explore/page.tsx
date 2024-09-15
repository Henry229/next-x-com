import SearchForm from '../_component/SearchForm';
import Trend from '../_component/Trend';

export default function ExplorePage() {
  return (
    <main className='flex flex-col w-full border border-gray-200'>
      <div className='flex pl-8 mb-14'>
        <SearchForm />
      </div>
      <div className='w-full border-b border-gray-200 mt-2'></div>
      <div className='flex flex-col w-full'>
        <Trend />
      </div>
    </main>
  );
}
