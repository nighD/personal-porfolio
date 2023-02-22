import type { NextPage } from 'next';
import SideBar from '../components/sidebar';
const Home: NextPage = () => {


  return (
    <div className="flex bg-dark-purple">
      <SideBar />
      <div className="py-7 pr-7 w-full">
        <div className="rounded-2xl bg-gray-300 h-full p-4 pl-8">
          <h1>Homepage</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
