---
tags:
  - nvim
  - tutor
lesson: 7
status: todo
---

# Lesson 7 · Help, Config, Completion

> [!abstract] Goal
> Find answers inside Neovim, create a startup script, and let the command line complete things for you.

## 7.1 Getting help · `:help`

```vim
:help               " open the help window (or press <F1>)
:help w             " help on the w motion
:help c_CTRL-D      " help on <C-d> in command-line mode
:help insert-index  " every Insert-mode command
:help user-manual   " the full manual
```

| Keys | Effect |
|:----:|--------|
| `<C-w><C-w>` | jump to the other window |
| `:q` | close the help window |

> [!tip] `:help TOPIC` works for almost anything. Combine it with `<Tab>` completion (7.3).

## 7.2 Startup script · `init.vim`

```vim
:call mkdir(stdpath('config'), 'p')
:exe 'edit' stdpath('config') . '/init.vim'
:w
```

Everything you `:set` by hand can live there permanently. See `:help init.vim`.

> [!note] Lua alternative
> Modern Neovim configs are usually `init.lua` in the same folder. Same idea, different language.

## 7.3 Completion · `<C-d>` `<Tab>`

1. `:e` then `<C-d>` — lists every command starting with **e**.
2. `<Tab>` — completes to `:edit`.
3. `:edit FIL` then `<Tab>` — completes the file name if it is unique.

## Summary

| Command | What it does |
|---------|--------------|
| `:help` / `<F1>` | open help |
| `:help TOPIC` | help on TOPIC |
| `<C-w><C-w>` | switch window |
| `:q` | close help |
| `init.vim` | startup script for your settings |
| `<C-d>` | list completions in command mode |
| `<Tab>` | use a completion |

## 🎓 Conclusion

> [!success] That's the whole tutor
> Enough to use Neovim comfortably. It is far from everything; consult `:help` often.

More to read:

- [Learn Vim Progressively](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/)
- [Learning Vim in 2014](http://benmccormick.org/learning-vim-in-2014/)
- [Vimcasts](http://vimcasts.org/)
- [Vim video tutorials by Derek Wyatt](http://derekwyatt.org/vim/tutorials/)
- [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/)
- [7 Habits of Effective Text Editing](http://www.moolenaar.net/habits.html)
- [vim-galore](https://github.com/mhinz/vim-galore)
- *Practical Vim* and *Modern Vim* by Drew Neil

---

⬅️ [[Lesson 6 - Open Append Replace Yank]] · 🏠 [[nvim]] · 📋 [[Cheatsheet]]
