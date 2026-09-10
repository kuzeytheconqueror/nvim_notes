---
tags:
  - nvim
  - cheatsheet
aliases:
  - nvim cheatsheet
---

# 📋 Neovim Cheatsheet

> [!abstract] Everything from `:Tutor`, on one page
> Details and practice lines live in the lesson notes. Start at [[nvim]].

> [!important] The grammar
> ```
> operator   [count]   motion
> ```
> `d2w` → **delete** **two** **words**. Every operator below accepts every motion below.

## Modes

| Key | Enters |
|:---:|--------|
| `<Esc>` | Normal mode (always safe to press) |
| `i` / `a` | Insert before / after cursor |
| `I` / `A` | Insert at start / end of line |
| `o` / `O` | Insert on a new line below / above |
| `R` | Replace mode |
| `v` | Visual mode |
| `:` | Command‑line mode |

## Motions

| Key | Moves |
|:---:|-------|
| `h` `j` `k` `l` | left, down, up, right |
| `w` | start of next word |
| `e` | end of current word |
| `0` | start of line |
| `$` | end of line |
| `gg` / `G` | first / last line |
| `nG` | line n |
| `%` | matching `(` `[` `{` |
| `<C-o>` / `<C-i>` | older / newer position |
| `2w`, `3e`, … | any motion × count |

## Operators

| Key | Does |
|:---:|------|
| `d` | delete |
| `c` | change (delete + Insert mode) |
| `y` | yank (copy) |

| Combo | Does |
|:-----:|------|
| `dw` / `d$` / `dd` | delete word / to end of line / line |
| `ce` / `c$` | change to end of word / line |
| `yw` / `yy` | yank word / line |
| `2dd` | delete two lines |

## Editing

| Key | Does |
|:---:|------|
| `x` | delete character under cursor |
| `rX` | replace character with X |
| `p` / `P` | put after / before cursor |
| `u` | undo |
| `U` | undo all changes on the line |
| `<C-r>` | redo |

## Search & replace

| Command | Does |
|---------|------|
| `/x` / `?x` | search forward / backward |
| `n` / `N` | next / previous match |
| `/x\c` | ignore case for this search |
| `:s/old/new/` | first match on line |
| `:s/old/new/g` | all matches on line |
| `:1,3s/old/new/g` | lines 1 to 3 |
| `:%s/old/new/g` | whole file |
| `:%s/old/new/gc` | whole file, confirm each |

## Files & shell

| Command | Does |
|---------|------|
| `nvim FILE` | open FILE |
| `:w` | write |
| `:w FILE` | write as FILE |
| `:wq` | write and quit |
| `:q!` | quit, discard changes |
| `v` … `:w FILE` | write selection to FILE |
| `:r FILE` | read FILE in below cursor |
| `:r !cmd` | read command output in |
| `:!cmd` | run a shell command |
| `<C-g>` | show file name and position |

## Options & help

| Command | Does |
|---------|------|
| `:set ic` | ignore case |
| `:set hls is` | highlight + incremental search |
| `:set noic` | switch off |
| `:set invic` | toggle |
| `:nohlsearch` | clear highlights |
| `:help TOPIC` | help |
| `<C-w><C-w>` | switch window |
| `<C-d>` / `<Tab>` | list / use completion in command mode |
| `:Tutor` | the tutorial |

---

🏠 [[nvim]]
