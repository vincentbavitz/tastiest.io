import { NextComponentType, NextPageContext } from 'next';
import { Router } from 'next/router';
import LayoutAssociatesInfluencers from './LayoutAssociatesInfluencers';
import LayoutBlank from './LayoutBlank';
import LayoutCheckout from './LayoutCheckout';
import LayoutDefault from './LayoutDefault';
import LayoutExperience from './LayoutExperience';
import LayoutHome from './LayoutHome';
import LayoutInvite from './LayoutInvite';
import LayoutRestaurant from './LayoutRestaurant';

export enum Layouts {
  DEFAULT = 'default',
  INVITE = 'invite',
  BLANK = 'blank',
  HOME = 'home',
  CHECKOUT = 'checkout',
  RESTAURANT = 'restaurant',
  EXPERIENCE = 'experience',
  ASSOCIATES_INFLUENCERS = 'associates-inflights',
}

const layouts = {
  [Layouts.DEFAULT]: LayoutDefault,
  [Layouts.INVITE]: LayoutInvite,
  [Layouts.BLANK]: LayoutBlank,
  [Layouts.HOME]: LayoutHome,
  [Layouts.CHECKOUT]: LayoutCheckout,
  [Layouts.RESTAURANT]: LayoutRestaurant,
  [Layouts.EXPERIENCE]: LayoutExperience,
  [Layouts.ASSOCIATES_INFLUENCERS]: LayoutAssociatesInfluencers,
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
