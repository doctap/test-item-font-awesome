import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export const icons = Object.keys(fas).map(key => fas[key].iconName);
console.log(icons);
