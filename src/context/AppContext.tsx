import React, { createContext, useContext, useReducer, useCallback, type ReactNode } from 'react';
import type { User, AuthState, NotificationPrefs } from '../types';

interface AppState {
  auth: AuthState;
  navExpanded: boolean;
  onboardingStep: number;
  showOnboarding: boolean;
  notificationPrefs: NotificationPrefs;
  darkMode: boolean;
  activeTab: 'accounts' | 'wallet' | 'robots' | 'settings';
}

type Action =
  | { type: 'SET_VIEW'; payload: AuthState['currentView'] }
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'TOGGLE_NAV' }
  | { type: 'SET_NAV'; payload: boolean }
  | { type: 'SET_ONBOARDING_STEP'; payload: number }
  | { type: 'SET_SHOW_ONBOARDING'; payload: boolean }
  | { type: 'UPDATE_NOTIFICATION_PREFS'; payload: Partial<NotificationPrefs> }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_ACTIVE_TAB'; payload: 'accounts' | 'wallet' | 'robots' | 'settings' };

const initialState: AppState = {
  auth: { user: null, isAuthenticated: false, currentView: 'landing' },
  navExpanded: true,
  onboardingStep: 0,
  showOnboarding: false,
  notificationPrefs: { email: true, push: true, tradeAlerts: true, priceAlerts: false, depositAlerts: true },
  darkMode: true,
  activeTab: 'accounts',
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, auth: { ...state.auth, currentView: action.payload } };
    case 'LOGIN':
      return { ...state, auth: { user: action.payload, isAuthenticated: true, currentView: 'onboarding' } };
    case 'LOGOUT':
      return { ...state, auth: { user: null, isAuthenticated: false, currentView: 'landing' } };
    case 'TOGGLE_NAV':
      return { ...state, navExpanded: !state.navExpanded };
    case 'SET_NAV':
      return { ...state, navExpanded: action.payload };
    case 'SET_ONBOARDING_STEP':
      return { ...state, onboardingStep: action.payload };
    case 'SET_SHOW_ONBOARDING':
      return { ...state, showOnboarding: action.payload };
    case 'UPDATE_NOTIFICATION_PREFS':
      return { ...state, notificationPrefs: { ...state.notificationPrefs, ...action.payload } };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  navigateTo: (view: AuthState['currentView']) => void;
  toggleNav: () => void;
  setNavExpanded: (expanded: boolean) => void;
  completeOnboarding: () => void;
  updateNotificationPrefs: (prefs: Partial<NotificationPrefs>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const MOCK_USER: User = {
  id: '1',
  email: 'demo@hercules.ai',
  name: 'Alex Morgan',
  createdAt: '2024-01-01T00:00:00Z',
  twoFAEnabled: true,
  referralCode: 'HER0X3',
  referralCount: 12,
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = useCallback(async (_email: string, _password: string) => {
    await new Promise((r) => setTimeout(r, 800));
    dispatch({ type: 'LOGIN', payload: MOCK_USER });
  }, []);

  const signup = useCallback(async (_email: string, _password: string, _name: string) => {
    await new Promise((r) => setTimeout(r, 1000));
    dispatch({ type: 'LOGIN', payload: { ...MOCK_USER, email: _email, name: _name } });
  }, []);

  const logout = useCallback(() => dispatch({ type: 'LOGOUT' }), []);
  const navigateTo = useCallback((view: AuthState['currentView']) => dispatch({ type: 'SET_VIEW', payload: view }), []);
  const toggleNav = useCallback(() => dispatch({ type: 'TOGGLE_NAV' }), []);
  const setNavExpanded = useCallback((expanded: boolean) => dispatch({ type: 'SET_NAV', payload: expanded }), []);
  const completeOnboarding = useCallback(() => {
    dispatch({ type: 'SET_SHOW_ONBOARDING', payload: true });
    dispatch({ type: 'SET_VIEW', payload: 'dashboard' });
  }, []);
  const updateNotificationPrefs = useCallback((prefs: Partial<NotificationPrefs>) => {
    dispatch({ type: 'UPDATE_NOTIFICATION_PREFS', payload: prefs });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, login, signup, logout, navigateTo, toggleNav, setNavExpanded, completeOnboarding, updateNotificationPrefs }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}