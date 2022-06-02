Specifies that only the main thread should execute a section of the program.

```cpp
#pragma omp master
{
   code_block
}
```

### Remarks

The `master` directive supports no clauses.

To specify that a section of code should be executed on a single thread, not necessarily the main thread, use the `single` directive instead.