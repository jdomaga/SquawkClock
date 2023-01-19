
export default function Hero({bgUrl, title, children} : {bgUrl:string, title: string, children : JSX.Element[]}) : JSX.Element {
    
    return (
        <div className="rounded-2xl h-56" style={{backgroundImage: `url(${bgUrl})`}}>
            <h1 className="text-white pt-12 pb-6">{title}</h1>
            <div className="flex gap-x-4 justify-center">
                {children}
            </div>
        </div>
    )
}