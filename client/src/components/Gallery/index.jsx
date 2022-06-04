import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

const data = [
  {
   image: "https://www.flowermountain.com/media/wysiwyg/1920x660/about.jpg", 
   caption:"Shoes",
   description:"Speak Louder Than Words"
  },
  {
    image:"https://www.flowermountain.com/media/wysiwyg/1190x476/yamano.jpg", 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:"https://cdn.shopify.com/s/files/1/0087/2539/7561/products/FOOTER_623d2679-8784-4d93-8831-2db9fa9cbede.jpg?v=1592411039", 
    caption:"Caption",
    description:"Description Here"
   } 
]

export default function Gallery()  {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          {/* <h3>{slide.caption}</h3>
          <p>{slide.description}</p> */}
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}