import './Content-main.css'
import ShopNow from './ShopBtn';
import CategoryBtn from './CategoryBtn';
import Availablesection from './Avalablesection';

function ContentMain(){
    return (
        <>
        <div className="main-con">
            <div className="smain-con">
                <div className="main-header-title">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                </div>
                <div className="main-content-description">
                    <p className="decriptionmain-par"> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. </p>
                </div>
                <div className="shopcatbtn">
                    <ShopNow/>
                    <CategoryBtn/>
                </div>
                
                <Availablesection/>
            </div>
            <div className="shoes-logo">
                <img src="shoe_image.png" className='logo-shoeimage' alt="Red Shoe" />
            </div>
            
        </div>
        
        </>
    );
}

export default ContentMain;