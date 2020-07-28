const render = ($) => {
  $('#example').html("Hello, render with jQuery");
  return Promise.resolve();
}
(global => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: (prop) => {
      console.log('purehtml mount', prop);
      return render($);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);

if (!window.__POWERED_BY_QIANKUN__) { // 如果是独立运行，则手动调用渲染
  render($);
}