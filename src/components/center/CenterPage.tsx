
type Props = {
    children: JSX.Element
}

export const CenterPage: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className="flex" >
                <div className="lg:basis-1/4" ></div>
                <div className="basis-full" >
                    {children}
                </div>
                <div className="lg:basis-1/4" ></div>
            </div>

        </>
    )
}