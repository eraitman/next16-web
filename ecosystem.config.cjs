module.exports = {
    apps: [{
        name: 'next16-web',
        cwd: './dist',             // standalone 서버가 자신의 .next를 찾을 수 있도록 작업 디렉토리 설정
        script: './server.js',     // cwd 내의 server.js 실행
        instances: 'max',
        exec_mode: 'cluster',
        env: {
            NODE_ENV: 'production',
            PORT: 3000,
        },
        watch: false,
        max_memory_restart: '1G'
    }]
};
