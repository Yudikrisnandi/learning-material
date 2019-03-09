# CSS PREPROCESSOR

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
