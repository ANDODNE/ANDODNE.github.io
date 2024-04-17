// 获取悬浮按钮元素
const floatingButton = document.getElementById('floating-button');

// 添加滚动事件监听器
window.addEventListener('scroll', function() {
  // 获取页面滚动距离
  const scrollDistance = window.scrollY;

  // 设置触发条件，比如页面滚动到距离顶部 500px 的位置时显示按钮
  const triggerDistance = 100; // 假设页面滚动到距离顶部 500px 的位置时显示按钮

  // 判断是否达到触发条件，显示或隐藏按钮
  if (scrollDistance >= triggerDistance) {
    floatingButton.style.bottom = '20px'; // 显示按钮
  } else {
    floatingButton.style.bottom = '-60px'; // 隐藏按钮
  }
});

// 悬浮按钮点击事件，滚动到页面顶部
floatingButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 使用平滑滚动效果
  });
});
