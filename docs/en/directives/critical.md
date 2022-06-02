Specifies that code is only be executed on one thread at a time.

```cpp
#pragma omp critical [(name)]
{
   code_block
}
```

### Parameters

*name*<br/>
(Optional) A name to identify the critical code. The name must be enclosed in parentheses.

### Remarks

The `critical` directive supports no clauses.