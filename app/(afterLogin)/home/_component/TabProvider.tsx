'use client';

import { createContext, useState } from 'react';

export const TabContext = createContext<{
  tab: 'recommend' | 'following';
  setTab: (tab: 'recommend' | 'following') => void;
}>({
  tab: 'recommend',
  setTab: () => {},
});

type TabProviderProps = {
  children: React.ReactNode;
};

export default function TabProvider({ children }: TabProviderProps) {
  const [tab, setTab] = useState<'recommend' | 'following'>('recommend');
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
