module.exports = {
    apps: [{
        name: 'next16-web',
        script: './dist/server.js', // dist 심볼릭 링크 내의 standalone server.js 실행
        instances: 'max',
        exec_mode: 'cluster',
        env: {
            NODE_ENV: 'production',
            PORT: 3000, // 필요에 따라 변경
        },
        watch: false,
        max_memory_restart: '1G'
    }]
};
