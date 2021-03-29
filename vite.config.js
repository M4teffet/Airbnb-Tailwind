const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'public/pages/host.html'),
                nested: resolve(__dirname, 'public/pages/explore.html'),
                nested: resolve(__dirname, 'public/pages/main-explore.html'),
                nested: resolve(__dirname, 'public/pages/profile.html'),
                nested: resolve(__dirname, 'public/pages/show.html')
            }
        }
    }
}