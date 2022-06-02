Specifies that the enclosing context's version of the variable is set equal to the private version of whichever thread executes the final iteration (for-loop construct) or last section (#pragma sections).

```cpp
lastprivate(var)
```

### Parameters

*var*<br/>
The variable that is set equal to the private version of whichever thread executes the final iteration (for-loop construct) or last section (#pragma sections).

### Remarks

`lastprivate` applies to the following directives:

- `for`
- `sections`