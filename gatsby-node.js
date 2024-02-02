const path = require('path');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // Додайте маршрут для /admin/
  createPage({
    path: '/admin',
    component: path.resolve('./src/admin/admin.tsx'),
  });

  // Додайте маршрут для /login/
  createPage({
    path: '/login',
    component: path.resolve('./src/admin/components/Login/Login.tsx'),
  });
};
