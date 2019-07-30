# HTML

Hypertext Markup Language (HTML) adalah sebuah
bahasa markah yang digunakan untuk membuat sebuah
halaman web, menampilkan berbagai informasi di dalam
sebuah penjelajah web Internet dan pemformatan
hiperteks sederhana yang ditulis dalam berkas format
ASCII agar dapat menghasilkan tampilan wujud yang
terintegerasi.

## Most commontly used html tags

- html, head, title, body
- heading tag
- paragraph tag
- list tag
- img tag
- link tag
- form tag
- input

## Block statements

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

[read more](https://www.w3schools.com/html/html_blocks.asp)

## Inline statements

An inline element does not start on a new line and only takes up as much width as necessary.

[read more](https://www.w3schools.com/html/html_blocks.asp)

# CSS

![selector-properties-values](https://www.w3schools.com/css/selector.gif)

## Font styling

- font-family
- font-size
- font-weight
- font-style

## Measurement units

1. Absolute units -> px, cm, mm, etc
2. Relative units -> em, rem

[read more here](https://www.tutorialrepublic.com/css-tutorial/css-units.php)

## Dimention

- height
- width

## Box model

- margin
- padding
- border

## Positioning

- static
- relative
- absolute
- fixed
- stiky

[read more here](https://www.w3schools.com/css/css_positioning.asp)

## Layouting

### 1. Floating

![floating](https://css-tricks.com/wp-content/csstricks-uploads/web-text-wrap.png)

- right
- left

### 2. Flex

![flexbox](https://assets.wordpress.envato-static.com/uploads/2015/06/02-flex-justify-content-design-style.jpg)

#### Parent elements

- display: flex
- flex-direction: row | row-reverse | column | column-reverse;
- flex-wrap: nowrap | wrap | wrap-reverse
- justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
- align-items: stretch | flex-start | flex-end | center | baseline;
- align-content: flex-start | flex-end | center | space-between | space-around | stretch;

#### Items

- order : number
- flex-grow: number
- flex-shrink: number
- flex-basis: number
- flex
- align-self

[read more here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### 3. Grid

![grid](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/05/960-12-col-grid.jpg)

![diff](https://static.cdn-cdpl.com/700x350/2dd7d3ba70bcbe34f8b0d7242c773a78/grid_flex.png)

#### Parent elements

- display: grid;
- grid-template-column
- grid-template-rows
- grid-colomn-gap
- grid-rows-gap
- grid-gap

#### Items

- grid-row-start
- grid-column-start
- grid-row
- grid-column : 1 / span 3
- grid-area
