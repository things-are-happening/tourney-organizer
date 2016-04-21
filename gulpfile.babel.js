import gulp from 'gulp'
import jade from 'gulp-jade'
import babel from 'gulp-babel'
import source from 'vinyl-source-stream'
import stylus from 'gulp-stylus'
import nodemon from 'gulp-nodemon'
import watchify from 'watchify'
import browserify from 'browserify'
import sourcemaps from 'gulp-sourcemaps'
import runSequence from 'run-sequence'

gulp.task(`move`, () => {
  gulp.src('./src/client/js/**/*.js')
    .pipe(gulp.dest('./build/client/js'))
})

gulp.task(`styles`, () => {
  gulp.src(`./src/client/style.styl`)
    .pipe(stylus())
    .pipe(gulp.dest(`./build/client`))
})

gulp.task(`jade`, () => {
  gulp.src(`./src/client/**/*.jade`)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(`./build/client`))
})

gulp.task(`babel`, () => {
  gulp.src([`src/**/*.js`])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [`es2015`]
    }))
    .on(`error`, err => {
      console.log(`BABEL ERROR >>>> ${err.message}`)
      this.emit(`end`)
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`./build`))
})

gulp.task(`nodemon`, () => {
  nodemon({
    script: `./build/server/index.js`,
    delay: 500
  })
})

const bundle = (bundler) =>{
  bundler
    .bundle()
    .on(`error`, err =>{
      console.log(`BUNDLE ERROR >>>> ${err.message}`);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/client/'))
}

gulp.task(`bundle`, () => {
  bundle(browserify(`./src/client/**/*.js`))
})

gulp.task('watchify', () =>{
  let watcher = watchify(browserify({
    entries:'./build/client/js/app.js',
    debug:true
  }, watchify.args))
  bundle(watcher)
  watcher
    .on(`update`, () => {
      console.log(`Watchify Updating...`);
      bundle(watcher)
    })
    .on(`log`, log =>{
      console.log(`Watchify Log...`);
      console.log(log);
    })
})

gulp.task(`watch`, [`styles`, `jade`, `babel`, `move`], () =>{
  gulp.watch(`./src/**/*.styl`, [`styles`]);
  gulp.watch(`./src/**/*.jade`, [`jade`]);
  gulp.watch([`./src/**/*.js`], [`babel`]);
});

gulp.task(`default`, () => {
  runSequence(
    `bundle`,
    [`nodemon`, `watchify`, `watch`]
  )
})
