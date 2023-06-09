import React from 'react'
import s from "./Navbar.module.scss"
import "../../index.css"
import { Dropdown, ButtonToolbar } from 'rsuite';
const Header = () => {

  
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  return (
    
  
  <nav className={s.navigation}>
  
  <button
    className={s.hamburger}
    onClick={() => {
      setIsNavExpanded(!isNavExpanded);
    }}
  >
    {/* icon from Heroicons.com */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={s.h5 + " " + s.w5}
      viewBox="0 0 20 20"
      fill="white"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  </button>
  <div
    className={
      isNavExpanded ? s.navigationMenu + " " + s.expanded : s.navigationMenu
    }
  >

<ul>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Услуги</a>

            <ul>
                <li><a href="#">ФФФФФф</a></li>
                <li><a href="#">AAAAAA</a></li>
                <li><a href="#">Aaasaas</a></li>
            </ul>        
            </li>
            <li><a href="#">Cтатьи и Новости</a>

            <ul>
                <li><a href="#">Что то</a></li>
                <li><a href="#">Может ссылки</a></li>
                <li><a href="#">Ещё что то</a>

                <ul>
                    <li><a href="#">Дальше</a></li>
                    <li><a href="#">Язык</a></li>
                    <li><a href="#">ПРимер</a>

                        <ul>
                            <li><a href="#">Stuff</a></li>
                            <li><a href="#">Things</a></li>
                            <li><a href="#">Other Stuff</a></li>
                        </ul>
                    </li>
                </ul>
                </li>
            </ul>
            </li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Партнёрам</a></li>
        </ul>

  </div>
  <div className={s.brandName}>
	<select>
		<option disabled selected value="Option 1">RUS/中国人</option>
		<option value="Option 2">Russian</option>
		<option value="Option 3">中国人</option>
	</select>
</div>

</nav>


  )
}

export default Header