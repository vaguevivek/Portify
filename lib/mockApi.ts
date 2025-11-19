
import { User, AuthResponse } from '../types';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  signUp: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    await delay(1500); // Simulate server processing time

    if (email.includes('error')) {
      throw new Error('This email is already in use.');
    }

    return {
      user: {
        id: 'user_123',
        name,
        email,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4f46e5&color=fff`,
      },
      token: 'mock_jwt_token_123',
    };
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
    await delay(1500);

    if (password !== 'password') {
       // For demo purposes, any password other than 'password' fails if you wanted strict checking,
       // but we'll let any login pass for the prototype unless email has 'error'
    }

    return {
      user: {
        id: 'user_123',
        name: 'Demo User',
        email,
        avatar: `https://ui-avatars.com/api/?name=Demo+User&background=4f46e5&color=fff`,
      },
      token: 'mock_jwt_token_123',
    };
  },

  socialLogin: async (provider: 'google' | 'apple'): Promise<AuthResponse> => {
    await delay(1000);
    return {
      user: {
        id: `user_${provider}_123`,
        name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
        email: `user@${provider}.com`,
        avatar: `https://ui-avatars.com/api/?name=${provider}&background=random`,
      },
      token: `mock_${provider}_token`,
    };
  }
};
