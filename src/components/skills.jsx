// "use client";



// export function ThreeDCardDemo() {
//   const techImages = [
//     { src: 'src/assets/react.png', alt: 'React' },
//     { src: 'src/assets/chakra1.jpg', alt: 'Chakra UI' },
//     { src: 'src/assets/flutter.svg', alt: 'Flutter' },
//     { src: 'src/assets/firebase.png', alt: 'Firebase' },
//     { src: 'src/assets/C_Logo.png', alt: 'C' },
//     { src: 'src/assets/c++.png', alt: 'C++' },
//     { src: 'src/assets/python.jpeg', alt: 'Python' },
//     { src: 'src/assets/html.png', alt: 'HTML' },
//     { src: 'src/assets/css.svg', alt: 'CSS' },
//     { src: 'src/assets/javascript.png', alt: 'JavaScript' },
//     { src: 'src/assets/java.webp', alt: 'Java' },
//     { src: 'src/assets/tailwind.png', alt: 'Tailwind CSS' },
//     { src: 'src/assets/figma.png', alt: 'Figma' },
//     { src: 'src/assets/canva.jpg', alt: 'Canva' },
//   ];

//   return (
//     <div className="card1 flex justify-center mt-0 px-4">
//       <div className="bg-white dark:bg-black dark:border-white/20 border-black/10 border rounded-xl mt-20 w-full max-w-3xl p-6 relative group/card">
//         <div className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
//           TECH STACK
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
//           {techImages.map((tech, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center bg-transparent border border-gray-300 p-3 rounded-lg"
//             >
//               <img
//                 src={tech.src}
//                 alt={tech.alt}
//                 className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }






import { CardBody, CardContainer, CardItem } from './3dcard'; // Adjust the path if necessary

function CombinedCardDemo() {
  const techImages = [
    { src: 'src/assets/react.svg', alt: 'React' },
    { src: 'src/assets/chakra1.jpg', alt: 'Chakra UI' },
    { src: 'src/assets/flutter.svg', alt: 'Flutter' },
    { src: 'src/assets/firebase.png', alt: 'Firebase' },
    { src: 'src/assets/C_Logo.png', alt: 'C' },
    { src: 'src/assets/c++.png', alt: 'C++' },
    { src: 'src/assets/python.jpeg', alt: 'Python' },
    { src: 'src/assets/html.png', alt: 'HTML' },
    { src: 'src/assets/css.svg', alt: 'CSS' },
    { src: 'src/assets/javascript.png', alt: 'JavaScript' },
    { src: 'src/assets/java.webp', alt: 'Java' },
    { src: 'src/assets/tailwind.png', alt: 'Tailwind CSS' },
    { src: 'src/assets/figma.png', alt: 'Figma' },
    { src: 'src/assets/canva.jpg', alt: 'Canva' },
    { src: 'src/assets/Bootstrap_logo.svg.png', alt: 'Bootstrap' },
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
         
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
            {techImages.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-transparent border border-gray-300 p-2 rounded-lg"
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
