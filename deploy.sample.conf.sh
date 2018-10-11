#!/usr/bin/env bash
#
#  S3 static webSite configuration file
#  * content copy definitions
#  * this is a sample of working configuration for deploy - fill per requirement
#
declare SITE_DIR=
declare RESUME_FILE=
declare RESUME_DEST_FILE=
declare LETTER_FILE=
declare LETTER_DEST_FILE=
declare RESUME_DIR=
declare RESUME_PATH=
declare LETTER_PATH=

declare SITE_BUCKET=''
declare LOG_BUCKET=''

declare -ar FILES=(
  'index.html'
  '404.html'
  'favicon.ico'
)

declare -ar DIRS=(
  'build'
  'documents'
  'image'
)
