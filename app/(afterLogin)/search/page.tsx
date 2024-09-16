import BackButtons from '../_component/BackButtons';
import Post from '../_component/Post';
import SearchForm from '../_component/SearchForm';
import Tab from './_component/Tab';

interface SearchProps {
  searchParams: { q?: string; f?: string; pf?: string };
}

export default function SearchPage({ searchParams }: SearchProps) {
  return (
    <main className='w-full max-w-[600px] border-x border-gray-200 mt-2'>
      <div className='bg-white/85 backdrop-blur-md border-b border-[#eff3f4] sticky top-0 z-10'>
        <div className='flex items-center h-[53px] px-4'>
          <div className='w-[56px] flex items-center'>
            <BackButtons />
          </div>
          <div className='flex-1'>
            <SearchForm q={searchParams.q || ''} />
          </div>
        </div>
        <Tab />
      </div>
      <div className='flex flex-col'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
