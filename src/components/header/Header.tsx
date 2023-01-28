import { Button } from "flowbite-react"
import imgFood from '../../assets/icons_assets/restauranfood.jpg'
import { Link } from "react-router-dom"
import { CenterPage } from "../center/CenterPage"
export const Header = () => {
    return (
        <>
        <header role="banner" >
            <div className="bg-myGreen " >
                <CenterPage>
                    <div className=" text-center 
                    lg:text-start
                    grid  lg:grid-cols-2 gap-20 py-4 px-8" >
                        <div className="" >
                            <h1 className="
                            text-myYellow
                            text-2xl
                            md:text-3xl
                            lg:text-4xl 
                            font-extrabold
                            font-Markazi
                            
                           " >Little Lemon</h1>
                            <h2 className="text-white 
                            lg:text-2xl 
                            md:text-xl
                            font-Markazi
                            text-lg
                            mb-4" >Chicago</h2>
                            <div className="max-w-sm sm:max-w-fit ">
                                <p className="text-white 
                                text-lg
                                font-Markazi
                                lg:text-xl" >We are a family owner mediterranean restaurant, focused on taditional recipes served with a modern twist.</p>
                            </div>
                            <div className="mt-2 flex justify-center lg:justify-start">
                                <Link to="/reserve-table" >
                                <button
                                aria-label="go to booking table button"
                                    className="             
                                    rounded-2xl
                                    py-2
                                    text-black font-bold px-10 
                                    hover:bg-yellow-500
                                    bg-yellow-300
                                    "
                                >
                                    <span className="text-base" >Reserve Table</span>
                                </button>
                                
                                </Link>
                            </div>
                        </div>

                        <div className="hidden lg:block" >
                            <img className="w-64 h-80 rounded-md absolute" src={imgFood} alt="" />
                        </div>

                    </div>
                </CenterPage>
            </div>

        </header>
        </>
    )
}