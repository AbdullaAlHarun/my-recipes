
const Navbar = () => {
    return (
      
    //   navbar section 
    <header>
      <div className="navbar bg-base-100 flex justify-around">
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
            </ul>
          </div>
          {/* Logo */}
          <a className="btn btn-ghost text-xl">Recipe Calories</a>
        </div>
        
        {/* Navbar Center (Hidden on small screens) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
              <li><a>Recepies</a></li>
              <li><a>About</a></li>
          </ul>
        </div>
  
        {/* Navbar End */}
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>

          </div>
        </div>
      </div>
    
      <div className="hero h-[550px] rounded-3xl mt-7 hero-background" style={{ backgroundImage: "url(../assets/bg.png)" }}>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[600px]">
          <h1 className="mb-5 text-5xl font-extrabold text-[#fff]">End-to-End Travel with</h1>
          <h1 className="mb-5 text-4xl font-extrabold text-[#1DD100]">Flixbus</h1>
          <p className="mb-5 font-bold">
            Journey Beyond Expectations: Your Ride, Your Way!
            Seamless Travel, Boundless Adventure - Book Your Bus Ticket Today!
          </p>
          <button className="btn bg-[#1DD100] border-0">
            <a href="#buy-ticket">Buy Ticket</a>
          </button>
        </div>
      </div>
    </div>
      
     </header> 
    );
  };
  
  export default Navbar;

