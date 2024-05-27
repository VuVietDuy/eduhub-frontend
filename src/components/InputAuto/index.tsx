import React, {useState} from 'react';

interface IProps {
  label?: string;
  pholder: string;
  data: string[];
  value?: string;
  name?: string;
  onSelected: (value: string) => void;
  onChange: (value: string) => void;
}

const InputAuto: React.FC<IProps> = ({
  label,
  pholder,
  data,
  value,
  name,
  onSelected,
  onChange,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isHideSuggs, setIsHideSuggs] = useState(true);
  const [selectedVal, setSelectedVal] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setIsHideSuggs(false);
    setSelectedVal(input);
    onChange(input);
    setSuggestions(
      data.filter((item) => item.toLowerCase().startsWith(input.toLowerCase())),
    );
  };

  const hideSuggestions = (value: string) => {
    onSelected(value);
    setSelectedVal(value);
    setIsHideSuggs(true);
  };

  return (
    <div className="block rounded-lg relative transition-all duration-300">
      <div className="  flex justify-center items-center rounded">
        <input
          id="tag-input"
          placeholder={pholder}
          type="text"
          name={name}
          value={selectedVal || value}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div
        className={`${
          isHideSuggs ? 'hidden' : 'border'
        } absolute top-14 left-0 z-50 cursor-pointer w-full max-h-[200px] overflow-y-auto shadow-lg  rounded-lg`}
      >
        {suggestions.map((item, idx) => (
          <div
            key={item + idx}
            onClick={() => hideSuggestions(item)}
            className="px-6 py-3 border-b cursor-pointer transition-all duration-300 ease-in-out bg-white hover:bg-gray-200"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputAuto;
