# CSS PREPROCESSOR WITH SASS

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax

Preprocessor is a program that processes its input data to produce output that is used as input to another program. The output is said to be a preprocessed form of the input data, which is often used by some subsequent programs like compilers

## Variable

```scss
$red-color-primary: rgb(255, 0, 0);
$blue-color-primary: rgb(0, 0, 233);

.classname {
    color: $red-color-primary;
}
```

## Nesting

```scss
$red-color-primary: rgb(255, 0, 0);
$blue-color-primary: rgb(0, 0, 233);

.container {
    background-color: $red-color-primary;
    .child-class {
        font-size: 40px;
    }
    .another-child {
        color: $blue-color-primary;
    }
    a {
        text-align: center;
        &:hover {
            color: $red-color-primary;
        }
    }
}
```

## Mixin

```scss
@mixin linkgan {
   text-decoration: none;
   text-transform: toUpperCase;
   color: $red-color-primary;
}

a:link {
    @include linkgan;
}
```

## Function

```scss
@function lebar($a, $b) {
  @return $a / $b;
}

.className {
    width: lebar(100, 2) * 1px;
}
```

## Partials & Import

Sass memungkinkan kamu membuat sebagian file sass yang dapat Anda sertakan dalam file Sass lainnya

Membuat partial sass file dengan format berikut _filename.scss

Untuk menggunakan partial file sass yang telah kamu buat di file sass line, kamu bisa memanggilnya dengan keyword @import 'filename';




