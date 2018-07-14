#!/usr/bin/env bash
#
#  S3 static webSite configuration file
#   * content copy definitions
#
declare -r SITE_DIR=~/Sites/gmilligan.github.io
declare -r SITE_BUCKET='xybersolve.io'
declare -r LOG_BUCKET='logs.xybersolve.io'
declare -ar FILES=(
  'index.html'
  '404.html'
  'favicon.ico'
)

declare -ar DIRS=(
  'app'
  'build'
  'documents'
  'image'
)
