Определяет разделы кода, которые должны быть разделены между всеми потоками.

```cpp
#pragma omp [parallel] sections [clauses]
{
   #pragma omp section
   {
      code_block
   }
}
```

### Параметры

*clauses*<br/>
(Необязательный) Ноль или несколько клауз, см. раздел **Примечания**.

### Примечания

Директива `sections` может содержать ноль или несколько директив `section`.

Директива `sections` поддерживает следующие клаузы:

- `private`
- `firstprivate`
- `lastprivate`
- `reduction`
- `nowait`

Если также указано `parallel`, то `clauses` может быть любой клаузой, принимаемой директивами `parallel` или `sections`, за исключением `nowait`.