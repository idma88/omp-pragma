Specifies that a variable is private to a thread.

```cpp
#pragma omp threadprivate(var)
```

### Parameters

*var*<br/>
A comma-separated list of variables that you want to make private to a thread. *var* must be either a global- or namespace-scoped variable or a local static variable.

### Remarks

The `threadprivate` directive supports no clauses.

The `threadprivate` directive is based on the `thread` attribute using the `__declspec` keyword; limits on `__declspec(thread)` apply to `threadprivate`. For example, a `threadprivate` variable will exist in any thread started in the process, not just those threads that are part of a thread team spawned by a parallel region. Be aware of this implementation detail; you may notice that constructors for a `threadprivate` user-defined type are called more often then expected.

You can use `threadprivate` in a DLL that is statically loaded at process startup, however you can't use `threadprivate` in any DLL that will be loaded via `LoadLibrary` such as DLLs that are loaded with `/DELAYLOAD (delay load import)`, which also uses `LoadLibrary`.

A `threadprivate` variable of a *destructible* type isn't guaranteed to have its destructor called. For example:

```cpp
struct MyType
{
    ~MyType();
};

MyType threaded_var;
#pragma omp threadprivate(threaded_var)
int main()
{
    #pragma omp parallel
    {}
}
```

Users have no control as to when the threads constituting the parallel region will terminate. If those threads exist when the process exits, the threads won't be notified about the process exit, and the destructor won't be called for `threaded_var` on any thread except the one that exits (here, the primary thread). So code shouldn't count on proper destruction of `threadprivate` variables.