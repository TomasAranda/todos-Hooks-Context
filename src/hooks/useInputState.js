import { useState } from 'react';

function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue);
  const setInputValue = e => {
    setValue(e.target.value);
  }
  const reset = () => {
    setValue('');
  }
  return [value, setInputValue, reset];
}

export default useInputState;