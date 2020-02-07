import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode() {
  const [value, setValue] = useLocalStorage('name');

  useEffect(() => {
    const body = document.querySelector(`body`);
    const firstDiv = body.querySelector(`#dark`);
    // console.log(firstDiv)
    if (value) {
      return firstDiv.classList.add(`dark-mode`)
    } else {
      return firstDiv.classList.remove(`dark-mode`)
    }
  }, [value]);

  useEffect(() => {
    const body = document.querySelector(`body`);
    const secondDiv = body.querySelector(`#mode`);
    // console.log(secondDiv)
    if (value) {
      return secondDiv.classList.add(`dark-mode`)
    } else {
      return secondDiv.classList.remove(`dark-mode`)
    }
  }, [value]);

  return [value, setValue];
}

const message = localStorage.getItem(`message`);
export function changeText() {
  var x = document.getElementById('change-text');
  // console.log(x)
  if (x.innerHTML === message) {
    x.innerHTML = `What are you working on today?`;
  } else {
    x.innerHTML = message;
  }
}