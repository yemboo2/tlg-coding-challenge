import { useCallback, useRef, useState } from 'react';

interface IInputProps {
  searchFunc?: (input: string) => void;
}

const Input = ({ searchFunc }: IInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const debounceRef = useRef<number>();

  const handleChange = useCallback(
    (event: any) => {
      debounceRef.current && clearTimeout(debounceRef.current);

      setInputValue(event.target.value);
      if (event.target.value.length < 3) return;

      debounceRef.current = window.setTimeout(() => {
        searchFunc!(event.target.value);
      }, 1000);
    },
    [searchFunc]
  );

  return <input type="text" value={inputValue} onChange={handleChange} />;
};

export default Input;
