# xybersolve.github.com

> Angular company shield, began life as a Github Page. It now resides as
static AWS S3 website.

### Deploy script to keep code in sync on S3


```sh

$ ./deploy --help

  Script: deploy
  Purpose: Manage content on S3
  Usage: deploy [options]

  Options:
    --help:  help and usage
    --version: show version info

    --sync=<directory>: Synchronize files between project and S3
    --upload: Upload all pertinent files and directories
    --updoad-file=<file>: TODO
    --upload-dir=<directory>: Upload a given directory
    --delete-file=<file>: TODO
    --delete-dir=<directory>: Delete a directory
    --delete-all: Delete all content
    --delete-logs: Delete all logs
    --remove-log: Remove the log bucket
    --list: List all the content
    --size: Show sizes

```

> `deploy.conf.sh` is expected but not provided for security reasons. Expected 
variable are as follows:

```sh
declare -r SITE_DIR=
declare -r RESUME_FILE=
declare -r RESUME_DIR=
declare -r RESUME_PATH=
declare -r SITE_BUCKET=
declare -r LOG_BUCKET=
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

```

* [xybersolve.io](http://xybersolve.io)
* [xybersolve.github.com](http://xybersolve.github.com)
