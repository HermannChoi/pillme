export const vibrate = (value: number) => {
  window.navigator.vibrate && window.navigator.vibrate(value);
};