import downtime from './downtime/index.vue';

const domComponents = [
  downtime,
];
const install = (Vue) => {
  // dom组件注册
  domComponents.map((component) => Vue.component(component.name, component));
};

export default {
  install,
};
