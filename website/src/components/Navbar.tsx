import useThemeStore from '../store/useThemeStore';

function Navbar() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  return (
    <div>
      <div className={`flex gap-x-5 px-3 py-2 fixed w-full font-semibold
        ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className='py-2'>LOGO</div>
        <div className='py-2'>Login</div>
        <div className='py-2'>MEN</div>
        <div className='py-2'>WOMEN</div>
        <div className='py-2'>KIDS</div>
      </div>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-700 text-white px-4 py-2 rounded-full absolute right-4 font-normal bottom-4"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default Navbar