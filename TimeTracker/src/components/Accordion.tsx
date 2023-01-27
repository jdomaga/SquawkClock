import ItemCard from './ItemCard';

export interface AccordionItem {
  title: string,
  openStart: boolean,
  titleIconPath?: string,
  content: JSX.Element
}

export default function Accordion({items} : {items: AccordionItem[]}): JSX.Element {

  return (
    <div className="w-full flex flex-col gap-16">
      {
        items.map( (item) => {
          return <ItemCard
              key={item.title}
              title={item.title}
              openStart={item.openStart}
              titleIconPath={item.titleIconPath}
            >
            {item.content}
            </ItemCard>
          
        })
      }
    </div>
  );
}
