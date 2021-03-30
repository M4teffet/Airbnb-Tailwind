const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                host: resolve(__dirname, 'page/host.html'),
                mainexplore: resolve(__dirname, 'page/main-explore.html')
            }
        }
    }
}