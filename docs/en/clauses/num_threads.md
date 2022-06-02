Sets the number of threads in a thread team.

```cpp
num_threads(num)
```

### Parameters

*num*<br/>
The number of threads

### Remarks

The `num_threads` clause has the same functionality as the `omp_set_num_threads` function.

`num_threads` applies to the following directives:

- `parallel`
- `for`
- `sections`