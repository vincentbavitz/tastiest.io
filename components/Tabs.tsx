import clsx from 'clsx';
import React, { useState } from 'react';

export type Tab = {
  id: string;
  label: string;
  href?: string;
  as?: string;
};

interface Props {
  tabs: Tab[];
  selectedTab: string;
  setSelectedTab: (selected: string) => void;
}

/**
 *
 * @param tabs
 * @param initiallySelected - the ID of the initially selected item
 */
export const useTabs = (tabs: Tab[], initiallySelected?: string) => {
  const [selectedTab, setSelectedTab] = useState<string>(
    initiallySelected
      ? tabs.find(t => t.id === initiallySelected).id
      : tabs[0].id,
  );

  return { tabs, selectedTab, setSelectedTab };
};

/**
 * Intended to be given props directly form useTabs
 */
export default function Tabs(props: Props) {
  const { tabs, selectedTab, setSelectedTab } = props;

  return (
    <div className="flex border-b border-gray-300">
      {tabs.map((tab, key) => {
        const selected = selectedTab === tab.id;

        return (
          <div
            key={key}
            onClick={() => {
              setSelectedTab(tab.id);
            }}
            className={clsx(
              'flex-1 px-2 py-2 text-center duration-300 cursor-pointer border-b-2 select-none',
              selected
                ? 'font-medium border-primary text-primary'
                : 'border-transparent opacity-75',
            )}
          >
            {tab.label}
          </div>
        );
      })}
    </div>
  );
}
