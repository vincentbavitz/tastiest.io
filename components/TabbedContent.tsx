import clsx from 'clsx';
import React, { ReactNode } from 'react';
import Tabs, { Tab, useTabs } from './Tabs';

type TabWithContent = Tab & { content: ReactNode };

interface Props {
  children: TabWithContent[];
}

export default function TabbedContent(props: Props) {
  const { children } = props;
  const tabContext = useTabs(children.map(t => ({ id: t.id, label: t.label })));

  return (
    <div>
      <Tabs {...tabContext} />

      <div className="relative pt-6">
        {children.map(tab => {
          const selected = tab.id === tabContext.selectedTab;

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
