


import { CardBody, CardContainer, CardItem } from './3dcard'; // Adjust the path if necessary

 // Adjust the path if necessary
import img5 from '../assets/react.svg';
import img6 from '../assets/chakra1.jpg';
import img7 from '../assets/flutter.svg';
import img8 from '../assets/firebase.png';
import img9 from '../assets/C_Logo.png';
import img10 from '../assets/c++.png';
import img11 from '../assets/python.jpeg';
import img12 from '../assets/html.png';
import img13 from '../assets/css.svg';
import img14 from '../assets/javascript.png';
import img15 from '../assets/java.webp';
import img16 from '../assets/tailwind.png';
import img17 from '../assets/figma.png';
import img18 from '../assets/canva.jpg';
import img19 from '../assets/Bootstrap_logo.svg.png';

function CombinedCardDemo() {
  const techImages = [
    { src: img5, alt: 'React' },
    { src: img6, alt: 'Chakra UI' },
    { src: img7, alt: 'Flutter' },
    { src: img8, alt: 'Firebase' },
    { src: img9, alt: 'C' },
    { src: img10, alt: 'C++' },
    { src: img11, alt: 'Python' },
    { src: img12, alt: 'HTML' },
    { src: img13, alt: 'CSS' },
    { src: img14, alt: 'JavaScript' },
    { src: img15, alt: 'Java' },
    { src: img16, alt: 'Tailwind CSS' },
    { src: img17, alt: 'Figma' },
    { src: img18, alt: 'Canva' },
    { src: img19, alt: 'Bootstrap' },
  ];

  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
      >
        <CardItem
          translateZ={50}
          className="text-4xl font-bold text-neutral-800 dark:text-white"
        >
          TECH STACK
        </CardItem>
       
        <CardItem translateZ={100} className="w-full mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-2">
            {techImages.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-transparent border border-gray-300 p-3 rounded-lg"
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  width="85" // Adjust the width as needed
                  height="80" // Adjust the height as needed
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}

export default CombinedCardDemo;
