Specifies whether a loop should be executed in parallel or in serial.

```cpp
if(expression)
```

### Parameters

*expression*<br/>
An integral expression that, if it evaluates to true (nonzero), causes the code in the parallel region to execute in parallel. If the expression evaluates to false (zero), the parallel region is executed in serial (by a single thread).

### Remarks

`if` applies to the following directives:

- `parallel`
- `for`
- `sections`