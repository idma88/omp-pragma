Lets you specify that a section of code should be executed on a single thread, not necessarily the main thread.

```cpp
#pragma omp single [clauses]
{
   code_block
}
```

### Parameters

*clauses*<br/>
(Optional) Zero or more clauses, see the **Remarks** section.

### Remarks

The `single` directive supports the following clauses:

- `private`
- `firstprivate`
- `copyprivate`
- `nowait`

To specify that a section of code should only be executed on the main thread, use the `master` directive instead.