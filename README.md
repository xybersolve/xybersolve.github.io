# xybersolve.github.com

> Angular company shield, began life as a Github Page. It now resides as
static AWS S3 website.

Deploy script to keep code in sync on S3

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

* [xybersolve.io](http://xybersolve.io)
* [xybersolve.github.com](http://xybersolve.github.com)
