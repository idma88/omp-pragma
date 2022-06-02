Specifies that one or more variables should be shared among all threads.

```cpp
copyprivate(var)
```

### Parameters

*var*<br/>
One or more variables to share. If more than one variable is specified, separate variable names with a comma.

### Remarks

`copyprivate` applies to the `single` directive.