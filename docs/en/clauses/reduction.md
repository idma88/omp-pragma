Specifies that one or more variables that are private to each thread are the subject of a reduction operation at the end of the parallel region.

```cpp
reduction(operation:var)
```

### Parameters

*operation*<br/>
The operator for the operation to do on the variables *var* at the end of the parallel region.

*var*<br/>
One or more variables on which to do scalar reduction. If more than one variable is specified, separate variable names with a comma.

### Remarks

`reduction` applies to the following directives:

- `parallel`
- `for`
- `sections`