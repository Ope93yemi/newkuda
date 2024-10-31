// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import Styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css'; // Custom styles for images and text

// Import slider images
import image1 from '../../assets/client1.svg';
import image2 from '../../assets/client2.svg';

// Import client image
import client1 from '../../assets/clients/1.svg';
import Client2 from '../../assets/clients/2.svg';
import client3 from '../../assets/clients/3.svg';
import Client4 from '../../assets/clients/4.svg';
import client5 from '../../assets/clients/5.svg';
import Client6 from '../../assets/clients/6.svg';

const SliderComponent = () => {
  const settings = {
    dots: false, // Hide dots for a smoother experience
    infinite: true,
    speed: 9000, // Higher speed for a slower transition
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 to prevent any delays
    cssEase: 'linear', // Linear easing for a constant speed
    pauseOnHover: true, // Disable pausing on hover
    pauseOnFocus: false, // Disable pausing on focus
  };

  const slides = [
    { image: image1, name: 'Idis P', text: 'Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah' },
    { image: image2, name: 'Precious Adetunji', text: 'I just joined the best Digital Bank in Nigeria I have no complaints whatsoever since i started using Kuda' },
    { image: image1, name: 'Pelumi Oyekan', text: 'Never thought an app would stylish become my everyday way to bank and have access to physical cash.@kudabank is sleek' },
    { image: image2, name: 'Person', text: 'This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!' },
    { image: image1, name: 'Adebambo Oyekan', text: 'I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!' },
    { image: image2, name: '@RealSOK_', text: 'I highly recommend this app, it does what it says "The bank of the free". I have received my kuda card.' },
    { image: image1, name: 'Babajide Duroshola', text: 'Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah' },
    // Add more slides up to 12
  ];

  return (
    <div className="slider-container">
      <h2>Don’t just take our word for it</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
                <p className="slide-text">{slide.text}</p>
              <div className='foot'>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="profile-image" />
              <p className="slide-name">{slide.name}</p></div>
            </div>
          </div>
        ))}
      </Slider>
      <ImageBox>
        <img width={92} src={client1} alt=''/>
        <img width={92} src={Client2} alt=''/>
        <img width={92} src={client3} alt=''/>
        <img width={92} src={Client4} alt=''/>
        <img width={92} src={client5} alt=''/>
        <img width={95} src={Client6} alt=''/>

      </ImageBox>
    </div>
  );
};

export default SliderComponent;

const ImageBox = Styled.div`
display: flex;
justify-content: space-between;
height: 7vh;
margin: 0 7%;`



