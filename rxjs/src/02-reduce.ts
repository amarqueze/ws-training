import { filter, from, reduce } from 'rxjs';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

const runReduce = () =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  function checkIsNumber(element: any) {
    return !isNaN(element);
  }

  from(datos)
    .pipe(
        filter(checkIsNumber),
        reduce((acc, val) => acc + val) 
    )
    .subscribe( console.log ) // La salida debe de ser 32
};

export { runReduce }