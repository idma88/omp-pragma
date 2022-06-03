Указывает, что переменная является приватной для потока.

```cpp
#pragma omp threadprivate(var)
```

### Параметры

*var*<br/>
Разделенный запятыми список переменных, которые вы хотите сделать приватными для потока. *var* должна быть либо глобальной переменной, либо переменной в области видимости пространства имен, либо локальной статической переменной.

### Примечания

Директива `threadprivate` не поддерживает клаузы.

Директива `threadprivate` основана на атрибуте `thread` с использованием ключевого слова `__declspec`; ограничения на `__declspec(thread)` применяются к `threadprivate`. Например, `threadprivate` переменная будет существовать в любом потоке, запущенном в процессе, а не только в тех потоках, которые являются частью группы потоков, порожденной параллельной областью. Помните об этой детали реализации; вы можете заметить, что конструкторы для `threadprivate` пользовательского типа вызываются чаще, чем ожидалось.

Вы можете использовать `threadprivate` в DLL, которая статически загружается при запуске процесса, однако вы не можете использовать `threadprivate` в DLL, которые будет загружаться через `LoadLibrary`, такие как DLL, которые загружаются с помощью `/DELAYLOAD (импорт отложенной загрузки)`, который также использует `LoadLibrary`.

Вызов деструктора не гарантируется для `threadprivate` переменной *разрушаемого* типа. Например:

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

Пользователи не могут контролировать, когда потоки, составляющие параллельную область, завершатся. Если эти потоки существуют, когда процесс завершается, потоки не будут уведомлены о завершении процесса, и деструктор не будет вызываться для `threaded_var` ни в одном потоке, кроме завершающегося (здесь основной поток). Поэтому код не должен рассчитывать на правильное уничтожение `threadprivate` переменных.