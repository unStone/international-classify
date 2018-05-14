import Loadable from 'react-loadable';

const pageLoading = () => <div>Loading...</div>;
const componentLoading = () => <div>Loading...</div>;

export const pageLoadable = (importPath) => Loadable({
  loader: () => import(importPath),
  loading: pageLoading,
});