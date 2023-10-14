
type PropsButton = {
  name: string;
  selected: boolean
  setFilter():void
};

export default function ButtonFilter(props: PropsButton) {

  return (
    <button onClick={props.setFilter} className={`py-[5px] px-[10px] dark:border-[#737373] border-[1px] rounded-[5px] text-[14px] font-bold tracking-wider mx-[4px] ${props.selected ? 'bg-[#4C1D95]' : ''}`}>
      {props.name}
    </button>
  );
}
