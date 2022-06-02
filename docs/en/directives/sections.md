Identifies code sections to be divided among all threads.

```cpp
#pragma omp [parallel] sections [clauses]
{
   #pragma omp section
   {
      code_block
   }
}
```

### Parameters

*clauses*<br/>
(Optional) Zero or more clauses, see the **Remarks** section.

### Remarks

The `sections` directive can contain zero or more `section` directives.

The `sections` directive supports the following clauses:

- `private`
- `firstprivate`
- `lastprivate`
- `reduction`
- `nowait`

If `parallel` is also specified, `clauses` can be any clause accepted by the `parallel` or `sections` directives, except `nowait`.