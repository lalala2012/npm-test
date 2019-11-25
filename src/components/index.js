import test from './test/index.vue';

const domComponents = [
  test,
];
const install = (Vue) => {
  // dom组件注册
  domComponents.map((component) => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  test
};
