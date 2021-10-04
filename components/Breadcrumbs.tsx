import { HomeIcon } from '@tastiest-io/tastiest-icons';
import { dlog } from '@tastiest-io/tastiest-utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export function Breadcrumbs() {
  const router = useRouter();
  const path = router.asPath.split('/').filter(i => Boolean(i));

  dlog('Breadcrumbs ➡️   path:', path);

  return (
    <div className="flex items-center font-secondary">
      <HomeIcon className="w-4 h-4 mr-1 fill-current text-primary" />
      <span className="children:last:font-medium">
        {path.map((item, index) => (
          <Link key={item} href={`/${path.slice(0, index + 1)?.join('/')}`}>
            <a>
              <span className="font-normal opacity-75"> {'>'} </span>
              <span className="text-primary">{item}</span>
            </a>
          </Link>
        ))}
      </span>
    </div>
  );
}
