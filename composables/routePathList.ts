export function routePathList(pathName: string) {
  let route = '/';
  switch (pathName) {
    case 'about':
      route = '/about';
      break;
    case 'register_input':
      route = '/register/input';
      break;
    case 'question_list':
      route = '/question/list';
      break;
    case 'serch_input':
      route = '/serch/input';
      break;
    case 'information_list':
      route = '/information/list';
      break;
    case 'my_page':
      route = '/my_page/my_page';
      break;
    default:
      route = '/';
  }
  return route;
}
