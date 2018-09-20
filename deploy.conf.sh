#!/usr/bin/env bash
#
#  S3 static webSite configuration file
#   * content copy definitions
#
declare -r SITE_DIR=~/Sites/gmilligan.github.io
declare -r RESUME_FILE=Greg.Milligan-DevOps-Resume.docx
declare -r RESUME_DEST_FILE=greg.milligan.devops.resume.docx
declare -r LETTER_FILE=Greg.Milligan-DevOps-Cover-Letter.docx
declare -r LETTER_DEST_FILE=greg.milligan.devops.cover.letter.docx
declare -r RESUME_DIR=~/Documents/Resume/
declare -r RESUME_PATH=${RESUME_DIR}/${RESUME_FILE}
declare -r LETTER_PATH=${RESUME_DIR}/${LETTER_FILE}

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
