#!/usr/bin/env bash
#
#  S3 static webSite configuration file
#   * content copy definitions
#
declare AWS_REGION='us-west-2'
declare AWS_PROFILE='jenkins'

declare SITE_DIR=~/Sites/gmilligan.github.io
declare RESUME_FILE=Greg.Milligan-DevOps-Resume.docx
declare RESUME_DEST_FILE=greg.milligan.devops.resume.docx
declare LETTER_FILE=Greg.Milligan-DevOps-Cover-Letter.docx
declare LETTER_DEST_FILE=greg.milligan.devops.cover.letter.docx
declare RESUME_DIR=~/Documents/Resume/
declare RESUME_PATH=${RESUME_DIR}/${RESUME_FILE}
declare LETTER_PATH=${RESUME_DIR}/${LETTER_FILE}

declare SITE_BUCKET='xybersolve.io2'
declare LOG_BUCKET='logs.xybersolve.io'

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
