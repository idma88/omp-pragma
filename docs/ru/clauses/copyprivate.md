Указывает, что одна или несколько переменных должны быть общими для всех потоков.

```cpp
copyprivate(var)
```

### Параметры

*var*<br/>
Одна или несколько переменных для совместного использования. Если указано более одной переменной, разделяйте имена переменных запятой.

### Примечания

`copyprivate` применяется к директиве `single`.