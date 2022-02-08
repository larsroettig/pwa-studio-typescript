yarn concurrently \
  --kill-others-on-fail \
  --prefix "[{name}]" \
  --names "test,lint,typecheck,build" \
  --prefix-colors "bgRed.bold.white,bgGreen.bold.white,bgBlue.bold.white,bgPurple.bold.white" \
    "yarn run lint" \
    "yarn run prettier:check" \
    "yarn run typecheck" \
    "yarn run test" \
