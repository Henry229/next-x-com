import Post from '../_component/Post';
import PostForm from './_component/PostForm';
import Tab from './_component/Tab';

export default function HomePage() {
  return (
    <div className='flex flex-col h-screen'>
      <Tab />
      <div className='overflow-y-auto flex-1'>
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
