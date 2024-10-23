interface ItemsList {
  name: string;
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
}

export default function ListWithTitle({
  title,
  itemsList,
}: {
  title: string;
  itemsList: ItemsList[];
}) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2 lg:text-3xl">{title}</h2>
      {itemsList.map((item) => (
        <ul className="space-y-0 lg:text-xl lg:tracking-wider hover:font-bold hover:tracking-wide">
          <li className="">{item.name}</li>
        </ul>
      ))}
    </div>
  );
}
