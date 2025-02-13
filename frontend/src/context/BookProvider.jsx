import { createContext, useContext, useState } from "react";

// Create Book Context
const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "story book",
      title: "The Secret of the Hidden Kingdom",
      price: 0,
      category: "simple story",
      image: "https://th.bing.com/th/id/OIP.iXcthThSludKCo7Giuo8bwHaLk?w=119&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      name: "comedy book",
      title: "The Day My Cat Became My Boss",
      price: 23,
      category: "entertainment",
      image: "https://th.bing.com/th/id/OIP.xQYPKAt5XIZVTdn5yeYEWQHaJU?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "adventure",
      title: "The Time-Traveling Notebook",
      price: 23,
      category: "adventure",
      image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481403757/the-adventures-of-huckleberry-finn-9781481403757_hr.jpg",
    },
    {
      id: 4,
      name: "Sci-Fi & Futuristic",
      title: "The Last City on Earth",
      price: 54,
      category: "future",
      image: "https://th.bing.com/th/id/OIP.zsvI6Idj08o9KC_SBiGMSQHaLS?rs=1&pid=ImgDetMain",
    },
    {
      id: 5,
      name: "Romance & Drama",
      title: "A Love Story in 88 Days",
      price: 31,
      category: "romance",
      image: "https://th.bing.com/th/id/OIP.Ugpdk_k4H4XEKB8Mllu2AwAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: 6,
      name: "adventure",
      title: "The Time-Traveling Notebook",
      price: 780,
      category: "travel",
      image: "https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg?t=st=1738729096~exp=1738732696~hmac=7c0fcaa94e16533d38ab54807467fbfddcd20ab560549af2a47e02c10bc1239b&w=740",
    },
    {
      id: 7,
      name: "Fantasy",
      title: "The Whispering Forest",
      price: 430,
      category: "all fantasy",
      image: "https://th.bing.com/th/id/OIP.Rl0-gUsOwiS_l4TqZ99kGAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 8,
      name: "music book",
      title: "The Song That Changed Everything",
      price: 300,
      category: "free",
      image: "https://th.bing.com/th/id/OIP.vwbbyWAZiaFGI55iFMHTxgHaIr?w=157&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 9,
      name: "food book",
      title: "The Great Pancake Mystery",
      price: 12,
      category: "free",
      image: "https://th.bing.com/th/id/OIP.J8GmoX7EdinlHOVhrH6aOQHaJl?rs=1&pid=ImgDetMain",
    },
    {
      id: 10,
      name: "Fantasy stardam",
      title: "The lost Forest",
      price: 43,
      category: "free",
      image: "https://i.pinimg.com/originals/6c/ba/66/6cba6642364064d3958e96fad9e5627d.jpg",
    },
    {
      id: 11,
      name: "lost ideas",
      title: "The dream into another dream",
      price: 30,
      category: "free",
      image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781416542759/the-book-of-lost-things-9781416542759_hr.jpg",
    },
    {
      id: 12,
      name: "hope",
      title: "the last hope",
      price: 14,
      category: "free",
      image: "https://th.bing.com/th/id/OIP.-KDlWNFm3hXuaJimtZgyQwHaLH?rs=1&pid=ImgDetMain",
    },
  ]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};

// Custom Hook for Using Books
export const useBooks = () => useContext(BookContext);
