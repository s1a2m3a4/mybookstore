
import Login from './Login';
import { useEffect, useState } from 'react';
import Logout from './Logout';
import { UseAuth } from '../context/AuthProvider';
import { useBooks } from '../context/BookProvider';

const Navbar = () => {
  const [authUser, setAuthUser] = UseAuth();
  const { books } = useBooks();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const [darkMode, setDarkMode] = useState(false); // Theme controller

  useEffect(() => {
    setFilteredBooks(
      books.filter((book) => 
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, books]);

  // Theme Toggle Handler
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navitems = (
    <>
      <li><a href='/'>Home</a></li>
      <li><a href='/course'>Course</a></li>
      <li><a href='/contact'>Contact</a></li>
      <li><a href='/about'>About</a></li>
    </>
  );

  return (
    <div className={`max-w-screen-2xl container mx-auto px-4 fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-slate-600'}`}>
      <div className="navbar text-white rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            {/* Mobile Menu Button */}
            <button 
              className="btn btn-ghost lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>

            {/* Mobile Menu Items */}
            {menuOpen && (
              <ul className="absolute bg-slate-500 text-white rounded-md shadow-lg mt-2 w-52 p-2">
                {navitems}
                
                {/* Mobile Search Box */}
                <li className="p-2">
                  <input 
                    type="text" 
                    className="w-full p-2 rounded-md text-black" 
                    placeholder="Search books..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </li>

                {/* Mobile Search Results */}
                {searchTerm && (
                  <li className="bg-white text-black w-full rounded-md shadow-md p-2">
                    {filteredBooks.length > 0 ? (
                      filteredBooks.map((book) => (
                        <div key={book.id} className="p-2 border-b border-gray-200 flex items-center">
                          <img src={book.image} alt={book.title} className="h-10 w-10 mr-2" />
                          <span>{book.title}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-600">No results found</p>
                    )}
                  </li>
                )}

                {/* Mobile Theme Controller */}
                <li className="p-2">
                  <button 
                    className="w-full bg-gray-700 p-2 rounded-md text-white"
                    onClick={toggleTheme}
                  >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </li>
              </ul>
            )}
          </div>
          <a className="text-2xl font-bold cursor-pointer px-7">BookStore</a>
        </div>

        {/* Desktop Navbar */}
        <div className="navbar-end space-x-5">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navitems}
            </ul>
          </div>

          {/* Desktop Search Box */}
          <div className='hidden md:block relative'>
            <input 
              type="text" 
              className="input input-bordered text-black p-2 rounded-md" 
              placeholder="Search books..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Search Dropdown for Desktop */}
            {searchTerm && (
              <div className="absolute bg-white text-black w-full max-w-md rounded-md shadow-md p-2 mt-1">
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <div key={book.id} className="p-2 border-b border-gray-200 flex items-center">
                      <img src={book.image} alt={book.title} className="h-10 w-10 mr-2" />
                      <span>{book.title}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-600">No results found</p>
                )}
              </div>
            )}
          </div>

          {/* Theme Controller (Desktop) */}
          <button 
            className="bg- px-2 py-2  text-white hidden lg:block text-3xl"
            onClick={toggleTheme}
          >
            {darkMode ? "🌙" : "☀"}
          </button>

          {/* Auth Section */}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <button className="bg-black text-white px-4 py-2 mr-7 rounded-md hover:bg-slate-500 duration-300" 
                onClick={() => document.getElementById("my_modal_3").showModal()}>
                Login
              </button>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

