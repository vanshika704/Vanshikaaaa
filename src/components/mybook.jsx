import HTMLFlipBook from "react-pageflip";
import { Grid, GridItem } from '@chakra-ui/react';
import img1 from '../assets/whatsapp/Screenshot_2024-08-08-20-05-29-42_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg'
import img2 from '../assets/whatsapp/Screenshot_2024-08-08-20-05-44-46_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg'
import img3 from '../assets/whatsapp/Screenshot_2024-08-08-20-05-52-27_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg'
import img4 from '../assets/whatsapp/Screenshot_2024-08-08-20-05-59-14_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg'
import img5 from '../assets/foresthill/Screenshot (74).png'
import img6 from '../assets/foresthill/Screenshot (75).png'
import img7 from '../assets/foresthill/Screenshot (76).png'
import img8 from '../assets/foresthill/Screenshot (77).png'
import img9 from '../assets/foresthill/Screenshot (78).png'
import img10 from '../assets/foresthill/Screenshot (79).png'
import img11 from '../assets/foresthill/Screenshot (80).png'
import img12 from '../assets/foresthill/Screenshot (81).png'
import img13 from '../assets/foresthill/Screenshot (82).png'
import img14 from '../assets/foresthill/Screenshot (83).png'
import img15 from '../assets/foresthill/Screenshot (84).png'
import img16 from '../assets/foresthill/Screenshot (85).png'
import img17 from '../assets/foresthill/Screenshot (86).png'
import img18 from '../assets/foresthill/Screenshot (87).png'
import img19 from '../assets/foresthill/Screenshot (73).png'
import img20 from '../assets/pratishtha/Screenshot (53).png'
import img21 from '../assets/pratishtha/Screenshot (54).png' 
import img22 from '../assets/pratishtha/Screenshot (55).png' 
import img23 from '../assets/pratishtha/Screenshot (56).png'
import img24 from '../assets/pratishtha/Screenshot (57).png'
import img25 from '../assets/pratishtha/Screenshot (58).png' 
import img26 from '../assets/gdscweather/Screenshot (88).png'  
import img27 from '../assets/gdscweather/Screenshot (89).png'  
import img28 from '../assets/gdscweather/Screenshot (90).png'
import img29 from '../assets/gdscweather/Screenshot (91).png'   
import img30 from '../assets/exponentially/Screenshot (59).png' 
import img31 from '../assets/exponentially/Screenshot (60).png'
import img32 from '../assets/exponentially/Screenshot (61).png'  
import img33 from '../assets/exponentially/Screenshot (62).png' 
import img34 from '../assets/exponentially/Screenshot (63).png' 
import img35 from '../assets/social media/Screenshot (65).png'
import img36 from '../assets/social media/Screenshot (66).png'
import img37 from '../assets/social media/Screenshot (67).png'
import img38 from '../assets/social media/Screenshot (68).png'
import img39 from '../assets/social media/Screenshot (69).png'
import img40 from  '../assets/todo/Screenshot (72).png'
import img41 from '../assets/todo/Screenshot (71).png'
import img42 from '../assets/Youtube/Screenshot (233).png'
import img43 from '../assets/Youtube/Screenshot (232).png'
function MyBook() {
  return (
    <div className='Projectgrid bg-slate-800 mt-0 mb-0 ' style={{ height: '180vh' }} >
      <Grid
        h={{ base: 'auto', sm: '300px', md: '400px', lg: '500px' }}
        templateRows={{ base: 'repeat(5, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
        gap={2}
        marginTop={{ base: '10px', sm: '20px', md: '30px', lg: '0px' }}
        marginX={{ base: '5px', sm: '10px', md: '20px', lg: '30px' }}
      >
        <GridItem 
          rowSpan={{ base: 1, sm: 2, md: 2 }} 
          colSpan={{ base: 2, sm: 3, md: 1 }} 
          bg='rgba(255, 255, 255, 0.5)'// Update the bgImage prop
          bgSize="cover" // Ensure the image covers the entire area
          bgPosition="center" // Center the background image
          bgRepeat="no-repeat"

          display="flex" 
          alignItems="center" 
          justifyContent="center"
          overflow="hidden"
        >
          <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={1150} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
            <div className="demoPage demopage1"> <img className="gridimage1" src={img1}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            <div className="demoPage demopage1"> <img className="gridimage1" src= {img2}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            <div className="demoPage demopage1"> <img className="gridimage1" src= {img3}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            <div className="demoPage demopage1"> <img className="gridimage1" src= {img4}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>

            </HTMLFlipBook>
          </div>
        </GridItem>
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='rgba(255, 255, 255, 0.5)' // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
        > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage3">
              <img className="gridimage" src={img19}   style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
              </div>
              <div className="demoPage demopage1"> <img className="gridimage" src={img5}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage2"> <img className="gridimage" src={img6} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img7}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img8}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img9}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img10}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img11}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img12} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img13}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img14}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img15}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img16} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage" src={img17}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage4"> <img className="gridimage"  src={img18}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)' // Update the bgImage prop
          bgSize="cover" // Ensure the image covers the entire area
          bgPosition="center" // Center the background image
          bgRepeat="no-repeat"
          > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
             <div className="demoPage ">
             <img className="gridimage" src = {img20}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
              </div>
             
              <div className="demoPage demopage1">   <img src = {img20} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = {img21} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = {img22} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = {img23}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = {img24}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
              <div className="demoPage demopage1">   <img src = {img25}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="gridimage"></img></div>
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)' // Update the bgImage prop
          bgSize="cover" // Ensure the image covers the entire area
          bgPosition="center" // Center the background image
          bgRepeat="no-repeat"
          > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
           <div className="demoPage demopage1"> <img className="gridimage" src={img26}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src={img27}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src={img28} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src={img29}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)'  // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
          > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
             <div className="demoPage demopage1"> <img className="gridimage" src={img30}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src={img31}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src={img32} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src={img33}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             <div className="demoPage demopage1"> <img className="gridimage" src={img34} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
            </HTMLFlipBook>
          </div></GridItem>
      </Grid>

      <Grid
        h={{ base: 'auto', sm: '300px', md: '400px', lg: '400px' }}
        templateRows={{ base: 'repeat(5, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }}
        gap={2}
        marginTop={{ base: '10px', sm: '20px', md: '30px', lg: '100px' }}
        marginX={{ base: '5px', sm: '10px', md: '20px', lg: '30px' }}
      >
        <GridItem 
          rowSpan={{ base: 1, sm: 2, md: 2 }} 
          colSpan={{ base: 2, sm: 3, md: 1 }} 
          bg='rgba(255, 255, 255, 0.5)'// Update the bgImage prop
          bgSize="cover" // Ensure the image covers the entire area
          bgPosition="center" // Center the background image
          bgRepeat="no-repeat"

          display="flex" 
          alignItems="center" 
          justifyContent="center"
          overflow="hidden"
        > <div style={{ width: '100%', height: '100%' }}><div className="demoPage demopage1"> <img className="gridimage1" src="src/assets/all/Screenshot_2024-08-08-20-15-06-51_000775a16687df9cd9dc66211acfb8da.jpg" height="400px"></img></div>
       
      </div></GridItem>
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)'
       
         backgroundSize="cover"
         backgroundPosition="center"  // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
 ><div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage1"> <img className="gridimage" src={img36} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src={img37} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src={img38}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src={img39}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src={img35}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              <div className="demoPage demopage1"> <img className="gridimage" src={img35}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
           
            </HTMLFlipBook>
          </div></GridItem>
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }}  bg='rgba(255, 255, 255, 0.5)'   
  backgroundSize="cover"
  backgroundPosition="center" // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
 ><div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
               <div className="demoPage demopage1"> <img className="gridimage" src={img40}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
               <div className="demoPage demopage1"> <img className="gridimage" src={img41}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
              
            </HTMLFlipBook>
          </div></GridItem>
          <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='rgba(255, 255, 255, 0.5)' // Update the bgImage prop
  bgSize="cover" // Ensure the image covers the entire area
  bgPosition="center" // Center the background image
  bgRepeat="no-repeat"
        > <div style={{ width: '100%', height: '100%' }}>
            <HTMLFlipBook
              width={300} // Define fixed width
              height={280} // Define fixed height
              size="stretch"
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={false}
            >
              <div className="demoPage demopage3">
              <img className="gridimage" src={img43}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
              </div>
              <div className="demoPage demopage1"> <img className="gridimage" src={img42}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div>
             
              
            </HTMLFlipBook>
          </div></GridItem>
        <GridItem colSpan={{ base: 2, sm: 3, md: 2 }} bg='rgba(255, 255, 255, 0.5)'  
  backgroundSize="cover"
  backgroundPosition="center" // Update the bgImage prop

 ><div style={{ width: '100%', height: '100%' }}>
           
             {/* <div><img src = "src/assets/connection.gif" className="gridimage2"  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img></div> */}
            
          </div></GridItem>
      </Grid>
    </div>
  );
}

export default MyBook;