const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'public/page/host.html'),
                nested: resolve(__dirname, 'public/page/explore.html'),
                nested: resolve(__dirname, 'public/page/main-explore.html'),
                nested: resolve(__dirname, 'public/page/profile.html'),
                nested: resolve(__dirname, 'public/page//show.html')
            }
        }
    }
}