import { useState } from 'react';

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
      }
    }
  };
};

export default useInput;
