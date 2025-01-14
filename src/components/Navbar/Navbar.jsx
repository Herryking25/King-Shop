import React from 'react'

const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop',
  },
  {
    id: 3,
    name: 'About',
    link: '/#about',
  },
  {
    id: 4,
    name: 'Blogs',
    link: '/#blogs',
  },
]

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className="container">
            {/* Logo and Links Section */}
                <div className='flex items-center gap-8'>
                    <a href className='text-primary font-semibold tracking-widest 
                    text-2xl sm:text-3xl'>
                        King-Shop
                    </a>
                    {/* Menu Items */}
                    <div className='hidden lg:block'>
                      <ul className='flex items-center gap-4'>
                        {
                          MenuLinks.map((data, index) =>(
                            <li key={index}>
                              <a href={data.link}
                              className='inline-block px-4 font-semibold text-gray-500
                              hover:text-black dark:hover:text-white duration-200'
                              > {data.name}</a>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                </div>

            {/* Navbar Right Section */}
              <div>
                {/* Search Bar Section */}
                <div>
                    <input type="text" placeholder='Search' className='' />
                    <IoMdSearch/>
                </div>
                {/* Dark mode Section */}
                <div></div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
