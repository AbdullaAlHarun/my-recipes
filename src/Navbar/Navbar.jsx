import './navbar.css';
const Navbar = () => {
    return (
      
    //   navbar section 
    <header className='ml-4 mr-4 lg:ml-32 lg:mr-32'>
      <div className="navbar bg-base-100 ">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for Mobile */}
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {/* Dropdown Content */}
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Recepies</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>
          {/* Logo */}
          <a className="btn btn-ghost text-xl">Recipe Calories</a>
        </div>
        
        {/* Navbar Center (Hidden on small screens) */}
        <div className="navbar-center hidden lg:flex text-center">
          <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
              <li><a>Recepies</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
          </ul>
        </div>
  
        {/* Navbar End */}
        <div className="navbar-end flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>

          </div>
        </div>
      </div>
    
      <div className="hero h-[550px] rounded-3xl mt-7 hero-background p-8">
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[600px]">
                <h1 className="mb-5 text-3xl lg:text-5xl font-extrabold text-[#fff]">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5">
                Dive into a world of culinary delights with our customized cooking classes, crafted to suit your taste and skill level. Unlock your culinary potential and embark on an unforgettable gastronomic adventure.
                </p>
                <div className="flex gap-4 text-center justify-center">
                <button className="btn bg-[#0BE58A] border-0 rounded-full">
                    <a href="#buy-ticket">Explore Now</a>
                </button>
                <button className="btn btn-outline rounded-full border-[#fff]">
                    <a className='text-[#fff]' href="#buy-ticket">Our Feedback</a>
                </button>
                </div>
                </div>
            </div>
        </div>
     </header> 
    );
  };
  
  export default Navbar;

