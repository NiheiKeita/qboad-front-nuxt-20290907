export function routePathList(pathName: string) {
  let route = '/';
  switch (pathName) {
    case 'about':
      route = '/about';
      break;
    case 'register_input':
      route = '/register/input';
      break;
    default:
      route = '/';
  }
  return route;
}
