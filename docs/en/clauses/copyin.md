Allows threads to access the main thread's value, for a `threadprivate` variable.

```cpp
copyin(var)
```

### Parameters

*var*<br/>
The `threadprivate` variable that will be initialized with the variable's value in the main thread, as it exists before the parallel construct.

### Remarks

`copyin` applies to the following directives:

- `parallel`
- `for`
- `sections`