Applies to the `for` directive.

```cpp
schedule(type[,size])
```

### Parameters

*type*<br/>
The kind of scheduling, either `dynamic`, `guided`, `runtime`, or `static`.

*size*<br/>
(Optional) Specifies the size of iterations. *size* must be an integer. Not valid when *type* is `runtime`.