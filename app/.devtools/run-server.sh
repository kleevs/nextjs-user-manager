#!/bin/bash
yarn workspace nextjs run dev &
yarn workspace user-manager-storybook storybook &
wait -n
