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
    h1 {
        text-align: center;
    }
}
```

## Mixin