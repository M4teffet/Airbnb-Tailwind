const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'host.html'),
                // nested: resolve(__dirname, 'page/explore.html'),
                // nested: resolve(__dirname, 'page/main-explore.html'),
                // nested: resolve(__dirname, 'page/profile.html'),
                // nested: resolve(__dirname, 'page//show.html')
            }
        }
    }
}