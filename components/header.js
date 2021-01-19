import "tailwindcss/tailwind.css";
export default function Header() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-indigo-100 p-3'>
      <div className='flex items-center flex-no-shrink text-white mr-6'>
        <span className='font-semibold text-xl tracking-widest'>Tomarigi</span>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4'
          >
            HOME
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4'
          >
            PERSON
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4'
          >
            SERVICE
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white'
          >
            PORTFOLIO
          </a>
        </div>
      </div>
      <div className='block'>
        <button className='items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white'>
          <div className="border-t-2 w-8 pb-2 border-white"></div>
          <div className="border-t-2 w-8 pb-2 border-white"></div>
          <div className="border-t-2 w-6 border-white"></div>
        </button>
      </div>
    </nav>
  );
}
