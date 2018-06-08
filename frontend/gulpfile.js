var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var proxy = require('http-proxy-middleware')    // 需要安装这个中间件

// Static server
gulp.task('browser-sync', function() {
    var files = [
    '**/*.html',
    '**/*.css',
    '**/*.js'
    ];
    browserSync.init(files,{
            server: {
            baseDir: './',      
            middleware: proxy('/api', {
                target: 'http://10.10.92.32:8082',    // 这里是你要代理的接口
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/api': ''
                }
            })
        },
        port: 3000
    });
});

// Domain server
//gulp.task('browser-sync', function() {
//    browserSync.init({
//        proxy: "yourlocal.dev"
//    });
//});
gulp.task('default',['browser-sync']); //定义默认任务
