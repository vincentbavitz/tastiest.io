import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Contained } from './Contained';
import Tabs, { Tab, useTabs } from './Tabs';

type TabWithContent = Tab & { content: ReactNode };

interface Props {
  contained?: boolean;
  children: TabWithContent[];

  // If you want manual control over the tabs
  manualSelected?: string; // the selected tab
  setManualSelected?: (tabId: string) => void;
}

export default function TabbedContent(props: Props) {
  const {
    children,
    contained = false,
    manualSelected,
    setManualSelected,
  } = props;

  const {
    tabs,
    selectedTab: _selectedTab,
    setSelectedTab: _setSelectedTab,
  } = useTabs(children.map(t => ({ id: t.id, label: t.label })));

  const selectedTab = manualSelected ?? _selectedTab;
  const setSelectedTab = setManualSelected ?? _setSelectedTab;

  return (
    <div>
      {contained ? (
        <Contained maxWidth={900}>
          <Tabs
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </Contained>
      ) : (
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      )}

      <div className="relative pt-6">
        {children.map(tab => {
          const selected = tab.id === selectedTab;

          return selected ? (
            <div key={tab.id} className={clsx('duration-300')}>
              {tab.content}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
