# Layout System
A **layout** is a wrapper for content. It can be `flex`-, `grid`- or `column-count`-based.  
This is a system to manage layouts … and spacing — both _between_ and _within_ layouts.

---

## Install and run

```
$npm i
$npm run dev
```

---

## Build and Test

```
$npm run build
$npm run preview
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

## Main Grid
The system adds `display:grid` to the `<main>`-element, and uses the `--layout-block-gap`-property as `row-gap`. Since `row-gap` is **not** added to the end of a grid, the same value is used for `margin-block-end`.


---

## Layout Types
To add a layout, add a child directly to the `<main>`-tag, with a `class` containing one of the allowed types:

- `ly-column`. Use `column-count` (with column-classes)
- `ly-flex`. Use `display:flex`
- `ly-grid`. Use `display:grid`. If no column-classes are defined, use "auto-columns".
- `ly-slider`. Same as `ly-flex`, but adss `scroll-snap` and more. Requires a wrapper with `ly-wrapper` 
- `ly-subgrid`. Use `display:grid` for children of a grid-layout
- `ly-wrapper`. Needed for overflowing content, such as `ly-slider`

### Modifiers

- `ly-flex-cols`. Use column-classes with `ly-flex`
- `ly-grow`. Expands a layout's `max-inline-size` with it's `padding-inline`-values. Use this to add a gap between the layout and device-edge on smaller devices.
- `ly-flex-wrap`. Use `flex-wrap:wrap` with `ly-flex`
- `ly-slider-next`. use to show a preview of next item with `ly-slider`

---

## Multiplier Classes
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

> **MOBILE FIRST:** You should _always_ start with defining the `xs-`-classes. These values will be inherited by larger breakpoints, unless you overwrite them with — as an example — `lg-`classes.

---

## Block gap
To fine-control the gap _between_ layouts on a page, you can use the multiplier-classes: 

- `xs-bg-1` ... `xs-bg-5`
- `sm-bg-1` ... `sm-bg-5`
- `md-bg-1` ... `md-bg-5`
- `lg-bg-1` ... `lg-bg-5`
- `xl-bg-1` ... `xl-bg-5`

To use **negative** row-gaps, prefix the numeric value in the multiplier-class with an "n":

- `xs-bg-n1` ... `xs-bg-n5`

---

## Columns
To control the number of columns in one of the _layout types_, use:

- `xs-cl-1` ... `xs-cl-12`
- `sm-cl-1` ... `sm-cl-12`
- `md-cl-1` ... `md-cl-12`
- `lg-cl-1` ... `lg-cl-12`
- `xl-cl-1` ... `xl-cl-12`

---

## Column Gaps
To fine-control the gap _between_ components _within__ a layout, you can use the multiplier-classes: 

- `xs-cg-1` ... `xs-cg-8`
- `sm-cg-1` ... `sm-cg-8`
- `md-cg-1` ... `md-cg-8`
- `lg-cg-1` ... `lg-cg-8`
- `xl-cg-1` ... `xl-cg-8`

---

## Row Gaps
To fine-control the gap _between_ rows of components _within__ a layout, you can use the multiplier-classes: 

- `xs-rg-1` ... `xs-rg-8`
- `sm-rg-1` ... `sm-rg-8`
- `md-rg-1` ... `md-rg-8`
- `lg-rg-1` ... `lg-rg-8`
- `xl-rg-1` ... `xl-rg-8`

---

## Padding
To control padding for _any_ element, you can use the multiplier-classes — which in this case is a bit more complicated than the previous examples.

For each breakpoint:
- `xs`
- `sm`
- `md`
- `lg`
- `xl`

You can add a modifier, that'll control:

- `-p-`. Padding on **all** sides
- `-pb-`. Sets `padding-block`
- `-pi-`. Sets `padding-inline`
- `-pbs-`. Sets `padding-block-start`
- `-pbe-`. Sets `padding-block-end`
- `-pis-`. Sets `padding-inline-start`
- `-pie-`. Sets `padding-inline-end`

These can then have a numeric value from `1` and `8`.

**Example.** Set padding on all sides to multiplier-factor `1` for `xs`-breakpoint, then update `padding-block` to multiplier-factor `2` for the `lg`-breakpoint:

```html
class="xs-p-1 lg-pb-2"
```

---

## Alignment
To control `align-content`, `justify-content` and `text-align`, use these classes:


### align-content
- `ly-ac-bal`. baseline
- `ly-ac-fib`. first baseline
- `ly-ac-lab`. last baseline
- `ly-ac-cen`. center
- `ly-ac-end`. end
- `ly-ac-fle`. flex-end
- `ly-ac-fls`. flex-start
- `ly-ac-spa`. space-around
- `ly-ac-spb`. space-between
- `ly-ac-spe`. space-evenly
- `ly-ac-sta`. start
- `ly-ac-str`. stretch

### justify-content
- `ly-jc-cen`. center
- `ly-jc-end`. end
- `ly-jc-fle`. flex-end
- `ly-jc-fls`. flex-start
- `ly-jc-lft`. left
- `ly-jc-rgt`. right
- `ly-jc-spa`. space-around
- `ly-jc-spb`. space-between
- `ly-jc-spe`. space-evenly
- `ly-jc-sta`. start
- `ly-jc-str`. stretch

### text-align
- `ly-ta-cen`. center
- `ly-ta-end`. end
- `ly-ta-jus`. justify
- `ly-ta-jua`. justify-all
- `ly-ta-lft`. left
- `ly-ta-map`. match-parent
- `ly-ta-rgt`. right
- `ly-ta-sta`. start

---

## Aspect Ratio
To fine-control `aspect-ratio` for a layout or content-item, you can use these classes: 

- `xs-ar-1_1`
- `xs-ar-3_4`
- `xs-ar-4_3`
- `xs-ar-16_9`
- `xs-ar-16_10`
- `xs-ar-18_5`
- `xs-ar-19_9`

To **update** `aspect-ratio` for a given breakpoint, change the prefix to one of the breakpoints: `xs-`, `sm-`, `md-`, `lg-` or `xl-`.

**Example.** Use widescreen `aspect-ratio` for smaller screens, but change to square on larger devices:

```html
class="xs-ar-16_9 lg-ar-1_1"
```

---

## Object Position
When using different `aspect-ratio`’s, it can sometimes be nessecary to move use `object-position` (or "focal point"), typically with images. For these cases, use these classes:

- `xs-op-tl`. **top left**
- `xs-op-tc`. **top center**
- `xs-op-tr`. **top right**
- `xs-op-cl`. **center left**
- `xs-op-cc`. **center center**
- `xs-op-cr`. **center right**
- `xs-op-bl`. **bottom left**
- `xs-op-bc`. **bottom center**
- `xs-op-br`. **bottom right**

To **update** `object-position` for a given breakpoint, change the prefix to one of the breakpoints: `xs-`, `sm-`, `md-`, `lg-` or `xl-`.

---

## Widths
By default, a layout is **full width** of the parent-container (`<main>`). You can change this by adding a `wd-`-class. The widths are specified in `props.sizes.css`.

- `wd-xxs`
- `wd-xs`
- `wd-sm`
- `wd-md`
- `wd-lg`
- `wd-xl`
- `wd-xxl`

---

## Templates
The system comes with a lot of "ready-to-use" layouts. 

**TODO**