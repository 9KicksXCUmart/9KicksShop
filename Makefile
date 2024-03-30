.DEFAULT_GOAL := build

.PHONY:fmt build
fmt:
	pnpm run format

build: fmt
	pnpm run dev

setup:
	git config core.hooksPath .githooks
	pnpm install
