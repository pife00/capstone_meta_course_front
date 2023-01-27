import { Card } from "flowbite-react"
import eye from '../../assets/icons_assets/🦆 icon _eye_.svg'

type Props = {
    title: string,
    price: string,
    img: string,
    description: string,
}


export const CardFood: React.FC<Props> = ({ title, price, img, description }) => {
    return (
        <>
            <div className="max-w-sm">
                <Card
                imgSrc={img}
               
                    className="bg-gray-300"
                >

                    <div className="flex justify-between" >
                        <h5 className=" mb-8 font-Markazi lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                        <h5 className="font-bold text-yellow-600" >
                            {price}
                        </h5>
                    </div>
                    <p className=" mb-8 font-Markazi text-gray-600 dark:text-gray-400">
                        {description}
                    </p>


                    <p className=" font-bold font-Markazi text-gray-900 ">
                        Order a delivery.
                    </p>
                </Card>
            </div>
        </>
    )
}