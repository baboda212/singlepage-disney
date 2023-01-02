import './App.css';
import Header from './components/Header';
import Section from './components/Section';

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
        />
      {/* 마블 */}
      <Section 
        title="Marvel" 
        logo='/logo-m.png' 
        bg='/bg-m.jpg' 
        id="marvel"
        />
      {/* 스타워즈 */}
      <Section 
        title="Starwars" 
        logo='/logo-s.png' 
        bg='/bg-s.jpg' 
        id="starwars"
        />
      {/* 네셔널지오그래픽 */}
      <Section 
        title="National Geographic" 
        logo='/logo-ng.png' 
        bg='/bg-ng.jpg' 
        id="NGG"
        />
      {/* 20세기폭스사 */}
      <Section 
        title="20th CENTURY STUDIOS" 
        logo='/logo-20.png' 
        bg='/bg-20.jpg' 
        id="20th"
        />
    </>
    
    
  );
}

export default App;