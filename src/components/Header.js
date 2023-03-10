/* header component */
/* 모듈 전용CSS를 사용할 경우 CSS를 변수로 정하고 그 변수의 원하는 CSS를 불러옴.  */
import myStyle from './Header.module.css';

export default function Header() {
  return (
    <header>
        <h1 className={myStyle.textPrimary}><img src='/images/logo.png'/></h1>
        <nav>
            <a href="#title">디즈니플러스</a>
            <a href="#disney">디즈니</a>
            <a href="#marvel">마블</a>
            <a href="#starwars">스타워즈</a>
            <a href="#NGG">네셔널지오그래픽</a>
            <a href="#20th">20세기폭스사</a>
        </nav>
    </header>
  )
}
