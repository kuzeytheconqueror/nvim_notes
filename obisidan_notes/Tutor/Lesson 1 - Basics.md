---
tags:
  - nvim
  - tutor
lesson: 1
status: todo
---

# Lesson 1 · The Basics

> [!abstract] Goal
> Move around, get out of Neovim, delete and insert characters, and save a file.

## 1.1 Moving the cursor

```
        ↑
        k          h  is on the left  → moves left
   ← h     l →     l  is on the right → moves right
        j          j  looks like a down arrow
        ↓
```

| Key | Moves |
|:---:|-------|
| `h` | left |
| `j` | down |
| `k` | up |
| `l` | right |

> [!tip] Arrow keys work too
> But `hjkl` keeps your hands on the home row. It feels slow for a week and then it never does again.

> [!note] Unsure what you typed?
> Press `<Esc>` to return to Normal mode, then retype the command.

## 1.2 Exiting Neovim

> [!warning] Read the whole lesson before doing it
> 1. `<Esc>` to make sure you are in Normal mode.
> 2. Type `:q!` `<Enter>` — quits and **discards** all changes.
> 3. Reopen with `nvim`, then `:Tutor` `<Enter>` to come back here.

## 1.3 Deleting · `x`

Press `x` to delete the character under the cursor.

```text
✗  The ccow jumpedd ovverr thhe mooon.
```

> [!note] Do not try to memorise everything
> Your vocabulary grows with use. Come back to the tutor for a refresher now and then.

## 1.4 Inserting · `i`

Press `i` to insert text **before** the cursor. `<Esc>` when done.

```text
✗  There is text misng this .
✓  There is some text missing from this line.
```

## 1.5 Appending · `A`

Press `A` to append text at the **end of the line**, no matter where the cursor is.

```text
✗  There is some text missing from th
✓  There is some text missing from this line.
✗  There is also some text miss
✓  There is also some text missing here.
```

## 1.6 Editing a real file · `:wq`

> [!warning] Read the whole lesson before doing it
> 1. Quit the tutor with `:q!` (or open a second terminal).
> 2. Start editing a file:
>    ```sh
>    nvim tutor
>    ```
> 3. Insert and delete some text.
> 4. Save and exit:
>    ```vim
>    :wq
>    ```

## Summary

| Command | What it does |
|---------|--------------|
| `h` `j` `k` `l` | Move left / down / up / right |
| `nvim FILE` | Open FILE from the shell |
| `:q!` | Quit, throw away changes |
| `:wq` | Write and quit |
| `x` | Delete the character under the cursor |
| `i` … `<Esc>` | Insert before the cursor |
| `A` … `<Esc>` | Append at the end of the line |

> [!tip] `<Esc>` is your reset button
> It puts you in Normal mode and cancels any half‑typed command.

---

⬅️ [[Lesson 0 - Orientation]] · 🏠 [[nvim]] · ➡️ [[Lesson 2 - Deleting]]
