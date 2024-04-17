// 获取汉堡按钮
const burger = document.querySelector(".burger");
// 获取导航菜单
const navMenu = document.querySelector(".nav-menu");

//获取菜单项
const navMenuItems1 = document.querySelectorAll(".nav-menu li");

//注册监听
burger.addEventListener("click", () => {
  // 汉堡按钮
  burger.classList.toggle("active");
  // 导航菜单开关
  navMenu.classList.toggle("open");

  // 菜单项动画
  navMenuItems1.forEach((item, index) => {
    // 如果已添加animation,先取消
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `0.3s ease-in slideIn forwards ${index * 0.1 +
        0.3}s`;
    }
  });
});


  // 导航
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-menu li');

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
