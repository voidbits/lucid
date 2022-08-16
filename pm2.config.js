module.exports = {
  apps: [
    {
      name: 'Tailwind',
      script: 'npm run build:css',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Lucid',
      script: 'remix dev',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
