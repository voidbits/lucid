module.exports = {
  apps: [
    {
      name: 'Tailwind',
      script: 'tailwindcss -w -i ./styles/app.css -o app/styles/app.css',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development'
      }
    },
    {
      name: 'Lucid',
      script: 'remix dev',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
}
