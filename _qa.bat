@echo off

docker-compose -f util/qa/docker-compose.yml up %*
pause
