import { Children, useEffect, useState } from "react";

import downChar from "/assets/img/downchar.svg";
import upChar from "/assets/img/upchar.svg";

function ItemCard({
  title,
  titleIconPath,
  children,
  openStart = false
}: {
  title: string;
  titleIconPath?: string;
  children?: JSX.Element[] | JSX.Element;
  openStart?: boolean;
}) {
  const [hidden, setHidden] = useState(!openStart);

  function toggleHidden() {
    setHidden(!hidden);
  }
  useEffect(() => {
    setHidden(!openStart);
  }, [openStart]);

  return (
    <div className={`rounded-xl border-2 border-solid border-slate-300`}>
      <h2 className="w-full">
        <button
          className={`bg-white w-full flex text-xl place-content-between`}
          onClick={toggleHidden}
        >
          <div className="flex">
            {titleIconPath && <img className="h-12 w-12 pr-2" src={titleIconPath} />}
            <div className="p-2">{title}</div>
          </div>
          {hidden ? <img src={upChar}></img> : <img src={downChar}></img>}
        </button>
      </h2>
      {!hidden && (
        <div
          className={`bg-white flex-column text-left p-4 drop-shadow-md rounded-b-xl`}
        >
          {Children.toArray(children)}
        </div>
      )}
    </div>
  );
}

export default ItemCard;
