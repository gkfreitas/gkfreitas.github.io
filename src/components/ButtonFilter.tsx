
type PropsButton = {
  name: string;
  selected: boolean
  setFilter():void
};

export default function ButtonFilter(props: PropsButton) {

  return (
    <button onClick={props.setFilter} className={`py-[5px] px-[10px] uppercase dark:border-[#737373] border-[1px] rounded-[5px] text-[14px] sm:text-[14px] sm:mx-[6px] md:mx-[15px] font-bold tracking-wider mx-[4px] md:py-[10px] md:px-[16px] ${props.selected ? 'bg-[#4C1D95] text-[#fff]' : ''}`}>
      {props.name}
    </button>
  );
}
