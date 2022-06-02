Causes the work done in a `for` loop inside a parallel region to be divided among threads.

```cpp
#pragma omp [parallel] for [clauses]
   for_statement
```

### Parameters

*clauses*<br/>
(Optional) Zero or more clauses, see the **Remarks** section.

*for_statement*<br/>
A `for` loop. Undefined behavior will result if user code in the `for` loop changes the index variable.

### Remarks

The `for` directive supports the following clauses:

- `private`
- `firstprivate`
- `lastprivate`
- `reduction`
- `ordered`
- `schedule`
- `nowait`

If `parallel` is also specified, `clauses` can be any clause accepted by the `parallel` or `for` directives, except `nowait`.