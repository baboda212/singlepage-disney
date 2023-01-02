import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      {/* header +  nav */}
      <Header />

      {/* 디즈니 대표 섹션 */}
      <Section 
        title="Disney+" 
        logo='/logo-dp.png' 
        bg='/bg-dp.jpg' 
        id="title"
        />
      {/* 디즈니 */}
      <Section 
        title="Disney" 
        logo='/logo-d.png' 
        bg='/bg-d.jpg' 
        id="disney"
        isns= "인스타그램"
        iurl= "https://www.instagram.com/disneykorea/"
        fsns="페이스북"
        furl="https://www.facebook.com/DisneyKorea"
        ysns="유튜브"
        yurl="https://www.youtube.com/channel/UCbv7Dcn5iNrAyd3GwgVHkIQ"
      />   
      
      {/* 마블 */}
      <Section 
        title="Marvel" 
        logo='/logo-m.png' 
        bg='/bg-m.jpg' 
        id="marvel"
        isns= "인스타그램"
        iurl= "https://www.instagram.com/marvelkorea/"
        fsns="페이스북"
        furl="https://www.facebook.com/marvel.kr"
        ysns="유튜브"
        yurl="https://www.youtube.com/MarvelKorea"
        />
      {/* 스타워즈 */}
      <Section 
        title="Starwars" 
        logo='/logo-s.png' 
        bg='/bg-s.jpg' 
        id="starwars"
        isns= "인스타그램"
        iurl= "https://www.instagram.com/starwarskorea/"
        fsns="페이스북"
        furl="https://www.facebook.com/StarWars.kr/"
        ysns="유튜브"
        yurl="https://www.youtube.com/channel/UCGf-sXt1hwYeqLh9Y6m5obQ"
        />
      {/* 네셔널지오그래픽 */}
      <Section 
        title="National Geographic" 
        logo='/logo-ng.png' 
        bg='/bg-ng.jpg' 
        id="NGG"
        isns= "인스타그램"
        iurl= "https://www.instagram.com/natgeokorea/"
        fsns="페이스북"
        furl="https://www.facebook.com/NatGeoKorea"
        ysns="유튜브"
        yurl="https://www.youtube.com/user/natgeokorea"
        />
      {/* 20세기폭스사 */}
      <Section 
        title="20th CENTURY STUDIOS" 
        logo='/logo-20.png' 
        bg='/bg-20.jpg' 
        id="20th"
        isns= "인스타그램"
        iurl= "https://www.instagram.com/20thcenturystudioskr/"
        fsns="페이스북"
        furl="https://www.facebook.com/20thCenturyStudios.KR"
        ysns="유튜브"
        yurl="https://www.youtube.com/20thCenturyStudiosKorea"
        />
        {/* footer */}
      <Footer />  
    </>
    
    
  );
}

export default App;