#!/usr/bin/env bash
# Commits the prepared tree (including .next) and force-pushes it to "deploy".
set -euo pipefail
git config user.name "${GIT_AUTHOR_NAME:-github-actions[bot]}"
git config user.email "${GIT_AUTHOR_EMAIL:-41898282+github-actions[bot]@users.noreply.github.com}"
SRC=$(git rev-parse --short HEAD)
git checkout -q -B deploy
git add -A
git commit -q -m "Prebuilt site from ${SRC}"
git push -f origin deploy
