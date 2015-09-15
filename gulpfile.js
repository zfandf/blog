var gulp = require('gulp');

gulp.task('theme_change', function() {
   return gulp.src('/themes/pacman/_config.yml').pipe(gulp.dest('/pacman_theme_config.yml'));
});

// 创建任务
gulp.task('default', function() {
   gulp.watch('themes/pacman/_config.yml', ['theme_change']);
});