// Interface for token
interface AuthToken {
    accessToken: string;
  }
  
  // Save token to localStorage
  export const saveAuthToken = (token: AuthToken): void => {
    localStorage.setItem('authToken', JSON.stringify(token));
  };
  
  // Get token from localStorage
  export const getAuthToken = (): AuthToken | null => {
    const storedToken = localStorage.getItem('authToken');
    return storedToken ? JSON.parse(storedToken) : null;
  };
  
  // Remove token from localStorage
  export const removeAuthToken = (): void => {
    localStorage.removeItem('authToken');
  };