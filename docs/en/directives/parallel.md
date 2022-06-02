Defines a parallel region, which is code that will be executed by multiple threads in parallel.

```cpp
#pragma omp parallel [clauses]
{
   code_block
}
```

### Parameters

*clauses*<br/>
(Optional) Zero or more clauses, see the **Remarks** section.

### Remarks

The `parallel` directive supports the following clauses:

- `if`
- `private`
- `firstprivate`
- `default`
- `shared`
- `copyin`
- `reduction`
- `num_threads`

`parallel` can also be used with the `for` and `sections` directives.