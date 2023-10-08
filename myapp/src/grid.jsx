import phone from './assets/phones.png'
import gross from './assets/groceries.png'
import computer from './assets/computers.jpg'
import roll from './assets/rollon.jpg'
import tele from './assets/tele.png'
import hood from './assets/hood.jpg'
import fridge from './assets/fridge.png'
import pods from './assets/oraimo.png'
import gen from './assets/generator.gif'
import shoe from './assets/shoes.png'
import watch from './assets/watch.png'
import clear from './assets/Clearance.gif'
export default function grid(){
    return(
        <div className="goods">
            <main className='hov'>
            <div><img src={phone} className='images'/></div>    
                <br/><br/>
            <div className='write'>Phones & Tablets</div>
            </main>
            
            <header className='hov'>
            <div><img src={gross} className='images'/></div>    
                <br/><br/>
            <div className='write'>Groceries</div>
            </header>
            <nav className='hov'>
            <div><img src={computer} className='images'/></div>    
                <br/><br/>
            <div className='write'>Competing Deals</div>
            </nav>
            <footer className='hov'>
            <div><img src={roll} className='images'/></div>    
                <br/><br/>
            <div className='write'>Health & Beauty</div>
            </footer>
            <cam className='hov'>
            <div><img src={tele} className='images'/></div>    
                <br/><br/>
            <div className='write'>Television</div>
            </cam>
            <fish className='hov'>
            <div><img src={hood} className='images'/></div>    
                <br/><br/>
            <div className='write'>Fashion</div>
            </fish>
            <cow className='hov'>
            <div><img src={fridge} className='images'/></div>    
                <br/><br/>
            <div className='write'>Refrigerators</div>
            </cow>
            <dog className='hov'>
            <div><img src={pods} className='images'/></div>    
                <br/><br/>
            <div className='write'>Mobile Accessories</div>
            </dog>
            <car className='hov'>
            <div><img src={gen} className='images'/></div>    
                <br/><br/>
            <div className='write'>Generator</div>
            </car>
            <jeep className='hov'>
            <div><img src={shoe} className='images'/></div>    
                <br/><br/>
            <div className='write'>Men's sneakers</div>
            </jeep>
            <laptop className='hov'>
            <div><img src={watch} className='images'/></div>    
                <br/><br/>
            <div className='write'>Watches</div>
            </laptop>
            <phone className='hov'>
            <div><img src={clear} className='images'/></div>    
                <br/><br/>
            <div className='write'>Clearance Sales</div>
            </phone>
        </div>

    )
}