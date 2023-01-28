import { Header } from "../components/header/Header";
import { CenterPage } from "../components/center/CenterPage";
import { Button } from "flowbite-react";
import { CardFood } from "../components/cardfood/CardFood";
import { useEffect } from "react";
import geekSalad from "../assets/icons_assets/greek salad.jpg";
import bruchetta from "../assets/icons_assets/bruchetta.png";
import lemonDessert from "../assets/icons_assets/lemon dessert.png";
import { fetchAPI } from "../components/utils/meta_api";

export const HomeView = () => {
    const dishes = [
        {
            title: "Greek Sala",
            img: geekSalad,
            price: "12.99",
            description:
                "The famous greek salad of cripty lettuce, peppers, olives and our Chicago style teta cheese.",
        },
        {
            title: "Bruchetta",
            price: "5.99",
            img: bruchetta,
            description:
                "Our Bruschetta is made from grilled bread that has been smeare with garlic and seasoned ",
        },
        {
            title: "Lemon Dessert",
            price: "5.00",
            img: lemonDessert,
            description:
                "This comes straight from grandma's recipe book, every last ingredient has been sourced.",
        },
    ];

    const showDishes = dishes.map((el) => {
        return (
            <article>
                <CardFood
                    key={el.title}
                    title={el.title}
                    price={el.price}
                    description={el.description}
                    img={el.img}
                />
            </article>
        );
    });

    return (
        <>
            <Header />
            <CenterPage>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-48 py-32">
                        <h1 aria-label="special weeks dishes" className="text-center lg:text-start font-extrabold lg:text-4xl md:text-2xl text-xl font-Markazi">
                            This Weeks Specials!
                        </h1>
                        <div
                            className="
                          
                        flex justify-center lg:justify-start"
                        >
                            <button
                            
                                className="
                                    rounded-2xl
                                    py-2
                                    text-black font-bold px-10 
                                    hover:bg-yellow-500
                                    bg-yellow-300
                                    "
                            >
                                <span className="text-base">Online Menu</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1   lg:grid-cols-3 gap-2">
                        {showDishes}
                    </div>
                </div>
            </CenterPage>
        </>
    );
};
