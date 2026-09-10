---
tags:
  - nvim
  - tutor
lesson: 5
status: todo
---

# Lesson 5 · Shell Commands and Files

> [!abstract] Goal
> Run shell commands without leaving the editor, write parts of a file, and pull files or command output in.

## 5.1 External commands · `:!`

```vim
:!ls
```

Type `:`, then `!`, then any shell command. Arguments are fine.

> [!note] Every `:` command runs when you press `<Enter>`.

## 5.2 Writing to a new name · `:w FILE`

```vim
:!ls          " look around
:w TEST       " save this buffer as TEST
:!ls          " TEST is there now
:!rm TEST     " clean up
```

> [!info] `nvim TEST` would open an exact copy of the tutorial as it was when you saved.

## 5.3 Writing a selection · `v` … `:w FILE`

1. Press `v` to start **Visual** mode and move to extend the selection.
2. Press `:` — the command line shows `:'<,'>` (the selected range).
3. Type `w TEST` so it reads `:'<,'>w TEST`, then `<Enter>`.

> [!tip] Visual mode + operator
> Once text is selected, any operator works on it. `d` deletes the selection, for example.

## 5.4 Reading files in · `:r`

```vim
:r TEST       " insert the file below the cursor line
:r !ls        " insert the OUTPUT of a shell command below the cursor
```

## Summary

| Command | What it does |
|---------|--------------|
| `:!cmd` | run an external command |
| `:!ls` | list the directory |
| `:!rm FILE` | delete FILE |
| `:w FILE` | write the buffer to FILE |
| `v` motion `:w FILE` | write only the selected lines |
| `:r FILE` | read FILE in below the cursor |
| `:r !cmd` | read a command's output in below the cursor |

---

⬅️ [[Lesson 4 - Navigation and Search]] · 🏠 [[nvim]] · ➡️ [[Lesson 6 - Open Append Replace Yank]]
