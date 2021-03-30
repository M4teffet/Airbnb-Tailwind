const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                host: resolve(__dirname, 'page/host.html'),
                mainexplore: resolve(__dirname, 'page/main-explore.html'),
                profile: resolve(__dirname, 'page/profile.html'),
                explore: resolve(__dirname, 'page/explore.html'),
                show: resolve(__dirname, 'page/show.html')
            }
        }
    }
}