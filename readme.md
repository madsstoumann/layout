# Layout System

## Install and run

```
$npm i
$npm run dev
```

---

## Configuration
Before you get started, you might want to change the default **spacing units**, defined in `props.layout.css`:

 - `--layout-block-gap`. The vertical distance between layouts on a page.
 - `--layout-col-gap`.  The horizontal distance between components _within_ a layout.
 - `--layout-padding-unit`. Padding unit, used for padding within **any** element. 
 - `--layout-row-gap`. The vertictal distance between components _within_ a layout.

In `props.sizes.css`, you'll find a lits of breakpoints/widths: 

```css
:where(html) {
  --size-xxs: 240px;
  --size-xs: 360px;
  --size-sm: 480px;
  --size-md: 768px;
  --size-lg: 1024px;
  --size-xl: 1440px;
  --size-xxl: 1920px;
}
```

These double as widths, you can set on a given layout. More on that later.

---

## Multiplier and Modifier Classes
Throughout the system, classes are used, that **multiply** a given spacing unit.

These are prefixed with a breakpoint-suffix:

- `xs`
- `sm`
- `md`
- `lg`
- `xl`

The prefix is then followed by a short description:

- `bg`. **block-gap**. Row-gap between layouts (direct children of  `<main>`)
- `cg`. **column-gap**. Column-gap between components _within_ a layout
- `cl`. **columns**. Updates a private property, `--_c`, that sets number of columns in a layout
- `p`. **padding**
- `pb`. **padding-block**
- `pi`. **padding-inline**
- `pbs`. **padding-block-start**
- `pbe`. **padding-block-end**
- `pis`. **padding-inline-start**
- `pie`. **padding-inline-end**
- `rg`. **row-gap**. Row-gap between components _within_ a layout

_Example:_
```html
class="xs-cl-1 lg-cl-3"
```

This sets the number of columns to **1** on smaller devices (the `xs`-breakpoint), then updates the value to **2** on larger devices (the `lg`-breakpoint).

---

> **MOBILE FIRST:** You should _always_ start with defining the `xs-`-classes. These values will be inherited by larger breakpoints, unless you overwrite them with, as an example, a `lg-`classes.

---

## Main Grid
The system adds `display:grid` to the `<main>`-element, and uses the `--layout-block-gap`-property as `row-gap`. Since `row-gap` is **not** added to the end of a grid, the same value is used as `margin-block-end`.

### Block gap
To fine-control the gap between layouts on a page, you can use the multiplier-classes: 

- `xs-bg-1` ... `xs-bg-5`
- `sm-bg-1` ... `sm-bg-5`
- `md-bg-1` ... `md-bg-5`
- `lg-bg-1` ... `lg-bg-5`
- `xl-bg-1` ... `xl-bg-5`

To use **negative** row-gaps, prefix the numeric value in the multiplier-class with an "n":

- `xs-bg-n1` ... `xs-bg-n5`

---

## Layout Types

- `ly-column`
- `ly-flex`
- `ly-grid`
- `ly-slider`
- `ly-subgrid`
- `ly-wrapper`


Modifiers

.ly-flex-cols
.ly-flex-wrap

.ly-slider-next


## Page-Gap and Grow
If set on a layout (using one of the `inline-padding`-multiplier-classes), this is the distance between a layout and the edges of the device-screen.

## Columns

Columns and gaps
Padding
Breakpoints

## Aspect Ratio
## Object Position
## Widths
## Templates