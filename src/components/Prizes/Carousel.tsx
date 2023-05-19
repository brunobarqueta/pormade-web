// import React, { useState } from 'react';

// const Carousel: React.FC = () => {
//   const [currentCard, setCurrentCard] = useState(0);
//   const cards = [
//     { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//     { id: 2, title: 'Card 2', content: 'Pellentesque euismod ipsum non dui gravida, vel pulvinar arcu fringilla.' },
//     // Adicione mais cards conforme necessário
//   ];

//   const handleNext = () => {
//     setCurrentCard((prev) => (prev + 1) % cards.length);
//   };

//   const handlePrev = () => {
//     setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
//   };

//   return (
//     <div className="relative flex items-center justify-center h-200 w-170">
//       {/* Card atual */}
//       <div className="absolute transition-all duration-500 ease-in-out transform -translate-x-full translate-x-0">
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-lg font-bold mb-2">{cards[currentCard].title}</h3>
//           <p>{cards[currentCard].content}</p>
//         </div>
//       </div>
//       {/* Próximo card */}
//       <div className="absolute transition-all duration-500 ease-in-out transform translate-x-full translate-x-0">
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-lg font-bold mb-2">{cards[(currentCard + 1) % cards.length].title}</h3>
//           <p>{cards[(currentCard + 1) % cards.length].content}</p>
//         </div>
//       </div>
//       {/* Botões de navegação */}
//       <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
//         <button
//           className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full text-white"
//           onClick={handleNext}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;