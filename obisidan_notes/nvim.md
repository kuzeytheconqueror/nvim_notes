---
tags:
  - nvim
  - moc
aliases:
  - Neovim
  - Neovim Hub
status: learning
started: 2026-09-01
---

# 🧭 Neovim

> [!abstract] What this vault is
> My notes for learning **Neovim** from the ground up, starting with the built‑in `:Tutor`.
> Every lesson has its own note, and everything I keep forgetting lives in the [[Cheatsheet]].

## 🚀 Start here

```sh
nvim            # open the editor
:Tutor          # start the interactive tutorial (inside nvim)
```

> [!tip] Remember the escape hatch
> Lost? Press `<Esc>` to get back to Normal mode, then `u` to undo the last change.
> Want out? `:q!` quits without saving.

## 📚 Tutor lessons

| # | Note | Topic | Done |
|:-:|------|-------|:----:|
| 0 | [[Lesson 0 - Orientation]] | How the tutor works | ⬜ |
| 1 | [[Lesson 1 - Basics]] | Moving, quitting, `x`, `i`, `A`, `:wq` | ⬜ |
| 2 | [[Lesson 2 - Deleting]] | Operators + motions, counts, `dd`, undo | ⬜ |
| 3 | [[Lesson 3 - Put Replace Change]] | `p`, `r`, `c` | ⬜ |
| 4 | [[Lesson 4 - Navigation and Search]] | `G`, `/`, `%`, `:s` | ⬜ |
| 5 | [[Lesson 5 - Shell and Files]] | `:!`, `:w`, `:r`, visual write | ⬜ |
| 6 | [[Lesson 6 - Open Append Replace Yank]] | `o`, `a`, `R`, `y`, `:set` | ⬜ |
| 7 | [[Lesson 7 - Help and Config]] | `:help`, `init.vim`, completion | ⬜ |

> [!todo] Progress
> - [ ] Finish all seven `:Tutor` lessons
> - [ ] Rebuild the [[Cheatsheet]] from memory
> - [ ] Write my own `init.lua`
> - [ ] Use nvim for a real project (the `trials/express-api` server was the first try)

## 🗂️ Other notes

- [[Cheatsheet]] – every command from the tutor, in tables
- [[classic/tutorial_for_nvim|Raw :Tutor text]] – the untouched original, kept for reference

## 🔗 Resources

- `:help user-manual` – the manual, inside nvim
- [Learn Vim Progressively](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/)
- [Vimcasts](http://vimcasts.org/)
- [vim-galore](https://github.com/mhinz/vim-galore)
- *Practical Vim* by Drew Neil (book), sequel *Modern Vim* covers Neovim specifics
