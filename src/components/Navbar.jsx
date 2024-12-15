import { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0); // Tracks current scroll position
  const [scrollDirection, setScrollDirection] = useState("up"); // Tracks scroll direction
  const [isVisible, setIsVisible] = useState(true); // Tracks visibility of navbar
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);

      if (direction === "down") {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      lastScrollY = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar bg-base-100 shadow-sm container px-4 mx-auto sticky top-0 z-[100] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-7" src={logo} alt="" />
          <span className="font-bold">SoloSphere</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">All Jobs</Link>
          </li>

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/add-job" className="justify-between">
                  Add Job
                </Link>
              </li>
              <li>
                <Link to="/my-posted-jobs">My Posted Jobs</Link>
              </li>
              <li>
                <Link to="/my-bids">My Bids</Link>
              </li>
              <li>
                <Link to="/bid-requests">Bid Requests</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


// import { useContext, useEffect, useState } from 'react'
// import logo from '../assets/images/logo.png'
// import { AuthContext } from '../providers/AuthProvider'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   const [scroll, setScroll] = useState(0);
//   const { user, logOut } = useContext(AuthContext)
//   console.log(scroll)
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       setScroll(window.scrollY)
//     if(scroll === 1000){
      
//     }
//     })
//   }, [])

//   return (
//     <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto sticky top-0 z-[100]'>
//       <div className='flex-1'>
//         <Link to='/' className='flex gap-2 items-center'>
//           <img className='w-auto h-7' src={logo} alt='' />
//           <span className='font-bold'>SoloSphere</span>
//         </Link>
//       </div>
//       <div className='flex-none'>
//         <ul className='menu menu-horizontal px-1'>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/jobs'>All Jobs</Link>
//           </li>

//           {!user && (
//             <li>
//               <Link to='/login'>Login</Link>
//             </li>
//           )}
//         </ul>

//         {user && (
//           <div className='dropdown dropdown-end z-50'>
//             <div
//               tabIndex={0}
//               role='button'
//               className='btn btn-ghost btn-circle avatar'
//             >
//               <div title={user?.displayName} className='w-10 rounded-full'>
//                 <img
//                   referrerPolicy='no-referrer'
//                   alt='User Profile Photo'
//                   src={user?.photoURL}
//                 />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
//             >
//               <li>
//                 <Link to='/add-job' className='justify-between'>
//                   Add Job
//                 </Link>
//               </li>
//               <li>
//                 <Link to='/my-posted-jobs'>My Posted Jobs</Link>
//               </li>
//               <li>
//                 <Link to='/my-bids'>My Bids</Link>
//               </li>
//               <li>
//                 <Link to='/bid-requests'>Bid Requests</Link>
//               </li>
//               <li className='mt-2'>
//                 <button
//                   onClick={logOut}
//                   className='bg-gray-200 block text-center'
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar


