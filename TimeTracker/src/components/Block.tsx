import { Children } from "react"

export default function Block({children} : {children: JSX.Element | JSX.Element[]}){
    return (
        <div className={`rounded-xl border-2 border-solid border-slate-300`}>
        <div
          className={`bg-white flex-column text-left p-4 drop-shadow-md rounded-b-xl`}
        >
          {Children.toArray(children)}
        </div>
        </div>
    )
}