export default function SearchForm() {
  return (
    <div className='fixed w-[350px]'>
      <form className='h-12 w-full mt-2 mb-3 flex items-center p-2'>
        <div className='h-full w-full flex items-center bg-gray-100 rounded-full'>
          <svg
            width={20}
            viewBox='0 0 24 24'
            aria-hidden='true'
            className='ml-4 text-gray-500'
          >
            <g>
              <path d='M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z'></path>
            </g>
          </svg>
          <input
            type='search'
            className='w-full py-2 pl-2 pr-4 bg-transparent text-gray-700'
            placeholder='Search'
          />
        </div>
      </form>
    </div>
  );
}
