// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   return (
//     <section className="bg-slate-500 py-16 px-6 md:px-16 text-center h-screen">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={visible ? { opacity: 3, y: 1 } : {}}
//         transition={{ duration: 1 }}
//         className="max-w-3xl mx-auto"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//           About Our Bookstore
//         </h2>
//         <p className="text-gray-900 text-lg leading-relaxed">
//           Welcome to our bookstore, a haven for book lovers! We offer a diverse
//           collection of books across various genres, from fiction to self-help,
//           ensuring there's something for everyone. Our passion for reading
//           drives us to provide the best selections and a cozy atmosphere for
//           fellow readers.
//         </p>
//         <p className="text-white text-lg mt-4">
//           Come visit us and embark on a literary adventure today!
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default About;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:py-20 sm:px-6 md:px-16 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto p-6 sm:p-8 bg-white bg-opacity-10 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
          Welcome to Our Bookstore
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md">
          Step into a world of knowledge and imagination! Our bookstore offers a
          curated collection of books across various genres, from classic
          literature to modern bestsellers. Whether you're a fiction enthusiast
          or a self-help seeker, you'll find something that captivates you.
        </p>
        <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 drop-shadow-md">
          Join our community of book lovers and embark on a literary adventure
          today!
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all">
            Explore More
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition-all"
          >
            Go to Home
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;




