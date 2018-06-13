#!/usr.bin.env bash

declare -a PID

PID=($(ps aux | grep http-server | grep -v grep | awk '{print $2}'))

if [[ -n ${PID} ]]; then
  for pid in "${PID[@]}"; do
    kill "${pid}"
  done
fi
