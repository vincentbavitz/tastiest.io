import { NextComponentType, NextPageContext } from 'next';
import { Router } from 'next/router';
import LayoutDefault from './LayoutDefault';
import LayoutRestaurant from './LayoutRestaurant';

export enum Layouts {
  DEFAULT = 'default',
  RESTAURANT = 'restaurant',
}

const layouts = {
  [Layouts.DEFAULT]: LayoutDefault,
  [Layouts.RESTAURANT]: LayoutRestaurant,
};

type ChildrenWithLayout = { layout?: Layouts } & NextComponentType<
  NextPageContext
>;

export type LayoutProps<T = any> = {
  pageProps: T;
  router: Router;
  children: ChildrenWithLayout;
};

const LayoutHandler = (props: LayoutProps) => {
  // To get the text value of the assigned layout of each component
  const Layout = layouts[props.children?.layout];

  // If we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }

  // If not render children with fragment
  return <LayoutDefault {...props}>{props.children}</LayoutDefault>;
};

export default LayoutHandler;
