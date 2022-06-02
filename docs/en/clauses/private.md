Specifies that each thread should have its own instance of a variable.

```cpp
private(var)
```

### Parameters

*var*<br/>
The variable to have instances in each thread.

### Remarks

`private` applies to the following directives:

- `for`
- `parallel`
- `sections`
- `single`