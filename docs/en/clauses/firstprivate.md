Specifies that each thread should have its own instance of a variable, and that the variable should be initialized with the value of the variable, because it exists before the parallel construct.

```cpp
firstprivate(var)
```

### Parameters

*var*<br/>
The variable to have instances in each thread and that will be initialized with the variable's value, because it exists before the parallel construct. If more than one variable is specified, separate variable names with a comma.

### Remarks

`firstprivate` applies to the following directives:

- `for`
- `parallel`
- `sections`
- `single`