import "../App.css"
import MediumPic from "../assets/medium_pic.png"
import Footer from "./Footer";
import Header from "./Header";
const MediumLandingPage = () => {
    return (
        <div className="bg-slate-50 w-full  h-full">
          <Header/>
          <section>
            <div className="text-center color_grad p-3 text-sm ">
                <p>Be part of a better internet. 
                    <span className="text-grey  font-light underline cursor-pointer">
                        <a
                            href="https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2Fplans%3FisOnboardingUpsell%3D1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                        {" "}Get 20% off membership for a limited time.
                        </a>
                    </span>
                </p>
            </div>
          </section>

          <div className="flex justify-between ">
            <div className=" sm:text-center md:text-left pl-10">
                <p className="text-8xl py-10">Human <br/> stories & ideas</p>
                <p>A place to read, write, and deepen your understanding</p>
                <button className="p-3 rounded-3xl bg-black text-white text-md my-4 hover:bg-slate-900">Start reading</button>
            </div>
            <div>
                <img className=" size object-cover " src={MediumPic} alt="medium_pic"/>
            </div>
            
          </div>
          <hr className="bg-black"/>
          <Footer/>
        </div>
    )
}


export default MediumLandingPage;