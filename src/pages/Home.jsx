import TextType from '../components/TextType'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 text-black flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl  font-bold">
          <span className='text-yellow-100'>SiteGen</span>  <span className="text-purple-500">Technology</span>
        </h1>

        <TextType
          text={[
            'SiteGen, Your Only Digital Business Partner',
            'for your websites',
            'Happy coding!'
          ]}
          className="mt-4 text-lg md:text-xl font-semibold text-white"
        />
        <Link to="/services">
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Get Started
          </button>
        </Link>

      </div>

    </div>
  )
}

export default Home
