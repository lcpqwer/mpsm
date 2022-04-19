const env = {
    test: {
        Root: 'https://mpsm-test.fuiou.com/mpsm/'
    },
    dev: {
        Root: ''
    }
}

module.exports = {
    ...env.test
    // ...env.dev
}