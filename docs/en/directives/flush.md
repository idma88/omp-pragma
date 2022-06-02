Specifies that all threads have the same view of memory for all shared objects.

```cpp
#pragma omp flush [(var)]
```

### Parameters

*var*<br/>
(Optional) A comma-separated list of variables that represent objects you want to synchronize. If *var* isn't specified, all memory is flushed.

### Remarks

The `flush` directive supports no clauses.