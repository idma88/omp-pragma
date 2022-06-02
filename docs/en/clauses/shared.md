Specifies that one or more variables should be shared among all threads.

```cpp
shared(var)
```

### Parameters

*var*<br/>
One or more variables to share. If more than one variable is specified, separate variable names with a comma.

### Remarks

Another way to share variables among threads is with the `copyprivate` clause.

`shared` applies to the following directives:

- `parallel`
- `for`
- `sections`