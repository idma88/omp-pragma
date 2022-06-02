Specifies that code under a parallelized `for` loop should be executed like a sequential loop.

```cpp
#pragma omp ordered
   structured-block
```

### Remarks

The `ordered` directive must be within the dynamic extent of a `for` or `parallel for` construct with an `ordered` clause.

The `ordered` directive supports no clauses.