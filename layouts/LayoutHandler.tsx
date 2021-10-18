import { dlog } from '@tastiest-io/tastiest-utils';
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

const LayoutHandler = props => {
  dlog('LayoutHandler ➡️ props:', props);

  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children?.layout];
  // if we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }

  // if not render children with fragment
  return <LayoutDefault {...props}>{props.children}</LayoutDefault>;
};

export default LayoutHandler;
