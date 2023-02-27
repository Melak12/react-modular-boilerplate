export const getSessionUser = () => {
    const userStr = localStorage.getItem('REACT-APP-USER');
  
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  };
  
  export const getSessionToken = () => {
    const tokenStr = localStorage.getItem('REACT-APP-ACCESS-TOKEN');
  
    if (tokenStr) {
      return tokenStr;
    }
    return null;
  };
  
  export const setSessionUserAndToken = (user:unknown, token:string) => {
    localStorage.setItem('REACT-APP-USER', JSON.stringify(user));
    localStorage.setItem('REACT-APP-ACCESS-TOKEN', token);
  };
  
  export const removeSessionUserAndToken = () => {
    localStorage.removeItem('REACT-APP-USER');
    localStorage.removeItem('REACT-APP-ACCESS-TOKEN');
  };
  