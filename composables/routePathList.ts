export function routePathList(pathName: string) {
  let route = '/';
  switch (pathName) {
    case 'about':
      route = '/about';
      break;
    default:
      route = '/';
  }
  return route;
}
