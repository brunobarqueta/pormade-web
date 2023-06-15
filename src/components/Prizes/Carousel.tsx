import { useState, useContext } from 'react';
import { PrizesContext } from '../../contexts/prizesContext';
import CardsCarousel from './CardsCarousel';
import { IoIosArrowRoundForward, IoIosArrowRoundBack} from "react-icons/io";

const Carousel = ({ current }: { current: number }) => {
  const { prizes } = useContext(PrizesContext);
  const newPrizes = prizes.filter(prize => prize.id != current);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNextTransition, setIsNextTransition] = useState(false);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? newPrizes.length - 1 : prevIndex - 1));
    setIsNextTransition(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === newPrizes.length - 1 ? 0 : prevIndex + 1));
    setIsNextTransition(true);
  };

  return (
    <div className="relative">
      <div className="flex gap-8 ml-8">
        <CardsCarousel prizes={newPrizes} isNextTransition={isNextTransition} currentImageIndex={currentImageIndex} isFirst={true}/>
        <CardsCarousel prizes={newPrizes} isNextTransition={isNextTransition} currentImageIndex={currentImageIndex} isFirst={false}/>
      </div>

      <button
        className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full"
        onClick={goToPreviousImage}
      >
        <IoIosArrowRoundBack size={24} className="text-white" />
      </button>

      <button
        className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full"
        onClick={goToNextImage}
      >
        <IoIosArrowRoundForward size={24} className="text-white" />
      </button>
      
    </div>
  );
};

export default Carousel;
