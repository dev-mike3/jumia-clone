<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
import gif from './assets/free.gif'
import gift from './assets/freemobile.gif'
import gen from './assets/retele.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleQuestion, faCartShopping, faStarOfDavid } from '@fortawesome/free-solid-svg-icons'
export default function nav() {
  return (
    <div className='contain'>

      <img className='gif' src={gif} />
      <img className='gift' src={gift} />
      <div className='navi'>
        <span className='navbar'>
          <div className='sell'>
            Sell on Jumia
          </div>
          <nav className='nav'>
            <span className='jumia'>JUMIA</span>
            <span className='item'>PAY</span>
            <span className='items'>FOOD</span>
            <span className='items'>PARTY</span>
            <span className='items'>LOGISTICS</span>
          </nav>

        </span>

      </div>

      <div className='bigSearch'>
        <nav className='search'>
          <span className='tabi'>JUMIA
            <span><FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#ea7210", }} /></span></span>
          <nav className='find'>
            <span ><input className='textarea' placeholder='Search products, brands and categories' required /></span>
            <span className='searchbtn'><button>SEARCH</button></span>
          </nav>
          <nav className='user'>
            <div className='span'>
              <span className='acc' ><span id='account'>Account</span>
                <span className='env'>
                  <FontAwesomeIcon icon={faUser} style={{ color: "#000000", }} />
                  <FontAwesomeIcon icon="fa-regular fa-user" />

                </span>
              </span>
              <span className='acc' id='help'>Help
                <span className='env'>
                  <FontAwesomeIcon icon={faCircleQuestion} /></span>
              </span>
              <span className='acc' id='cart'>Cart</span>
              <span><FontAwesomeIcon icon={faCartShopping} /></span>
            </div>


          </nav>

        </nav>

      </div>
      <div className='smallSearch'>
        <nav className='search'>
          <span className='tabi'>JUMIA
            <span><FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#ea7210", }} /></span></span>

          <nav className='user'>
            <div className='span'>
              <span className='acc' ><span id='account'>Account</span>
                <span className='env'>
                  <FontAwesomeIcon icon={faUser} />

                </span>
              </span>
              <span className='acc' id='help'>Help
                <span className='env'>
                  <FontAwesomeIcon icon={faCircleQuestion} /></span>
              </span>
              <span className='acc' id='cart'>Cart</span>
              <span><FontAwesomeIcon icon={faCartShopping} /></span>
            </div>


          </nav>

        </nav>
        <nav className='find'>
          <span ><input className='smalltext' placeholder='Search products, brands and categories' required /></span>

        </nav>

        <div className='call'>
          CALL TO ORDER : 070 600 0000
        </div>



      </div>

      


   <div class = "parent">
      <div class = "slides">
         <div class = "element">
            <img src= "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcHZ6MN34K6PMgj-qYl1Fq2fCYSP4d7RLRBdXAkjB1QEgvg1OnH4RBg7vFJf189doX9_44_bx73I3s8VJa1eEjXpzcE-mOAGYoaSFw5GbDsjyoMGWgbO00S5sFVIzgxB3ouIJnkfKeNg&usqp=CAc" alt = "image 1"/>
         </div>
         <div class = "element">
            <img src = "https://www.stockvault.net//data/2007/03/01/101359/thumb16.jpg" alt = "image 2"/>
         </div>
         <div class = "element">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaMj7ixYyJmKR7JMZOivSrMGwwnOqh92piw&usqp=CAU"  alt = "image 3"/>
         </div>
         <div class = "element">
            <img src = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRO7_CZ0-BO1K3PDMs6sUIqtNw-vQT7D3hFLeXeC3SGZSoUV3bQLoCffv3ACWQ87j-ecLEDiHk5i0ojgKIHXrYt6tGWC_DR30Lr8-ZD6LfavnV2P14azkq_FBevOVjcosPAosS-TvWyRw&usqp=CAc" alt = "image 4"/>
         </div>
      </div>
   </div>



      <div className='container'>
        <header className='head'>
          <div className='list'>Supermarket</div>
          <div className='list'>Health & Beauty</div>
          <div className='list'>Home & Office</div>
          <div className='list'>Appliances</div>
          <div className='list'>Phones & Tablets</div>
          <div className='list'>Computing</div>
          <div className='list'>Electronics</div>
          <div className='list'>Fashion</div>
          <div className='list'>Baby Products</div>
          <div className='list'>Gaming</div>
          <div className='list'>Sporting Goods</div>
          <div className='list'>Other categories</div>
        </header>
        <nav></nav>
        <main></main>
        <footer></footer>

      </div>






    </div>


  )

}