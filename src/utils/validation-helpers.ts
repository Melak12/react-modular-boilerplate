/* eslint-disable no-useless-escape */
export const isNameInputValid = (value: string): boolean => {
    const regex = /^[a-z ,.'-]+$/i;
  
    return regex.test(value);
  };
  
  export const isEmailInputValid = (email: string): boolean => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  
    return regex.test(email);
  };
  
  export const isPasswordInputValid = (password: string): boolean => {
    if (password.length < 8) return false;
  
    return true;
  };