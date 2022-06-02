Specifies the behavior of unscoped variables in a parallel region.

```cpp
default(shared | none)
```

### Remarks

`shared`, which is in effect if the `default` clause is unspecified, means that any variable in a parallel region will be treated as if it were specified with the `shared` clause. `none` means that any variables used in a parallel region that aren't scoped with the `private`, `shared`, `reduction`, `firstprivate`, or `lastprivate` clause will cause a compiler error.

`default` applies to the following directives:

- `parallel`
- `for`
- `sections`
