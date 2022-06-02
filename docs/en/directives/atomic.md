Specifies that a memory location that will be updated atomically.

```cpp
#pragma omp atomic
   expression
```

### Parameters

*expression*<br/>
The statement that has the *lvalue*, whose memory location you want to protect against more than one write.

### Remarks

The `atomic` directive supports no clauses.