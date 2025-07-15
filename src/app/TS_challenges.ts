import { UnionType } from "typescript";

export default function TS_code_runner(){

/* -------------------------------------------------------------------------- */
/*                       Реализуйте дженерик Pick<T, K>.                      */
/* -------------------------------------------------------------------------- */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
    [k in K]: T[k];
} 

const Todo: MyPick<Todo, 'title' | 'completed'> = {
    title: 'some title',
    completed: true
}

/* -------------------------------------------------------------------------- */
/*                       Реализуйте дженерик Readonly<T>                      */
/* -------------------------------------------------------------------------- */

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
} 

const Todo2: MyReadonly<Todo> = {
    title: 'some titile',
    description: 'some descr',
    completed: true
}


/* -------------------------------------------------------------------------- */
/*                               Tuple to Object                              */
/* -------------------------------------------------------------------------- */

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type CreateObj <T extends readonly PropertyKey[]> = {
    [K in T[number]]: K
} 

type Result = CreateObj<typeof tuple>;



/* -------------------------------------------------------------------------- */
/*                               First of Array                               */
/* -------------------------------------------------------------------------- */


type First <T extends any[]> = T extends [] ? never : T[0];

const arr = ['a', 'b', 'c'];
const arr2 = [1, 2, 3, 4];

type Result2 = First<typeof arr>;



/* -------------------------------------------------------------------------- */
/*                               Length of Tuple                              */
/* -------------------------------------------------------------------------- */

type LengthTuple<T extends readonly any[]> = T['length'];

type tesla = ['tesla', 'model 3', 'model Y'];

type Result3 = LengthTuple<tesla>

 
/* -------------------------------------------------------------------------- */
/*                     Реализуйте дженерик Exclude<T, U>.                     */
/* -------------------------------------------------------------------------- */
// Исключает из T те типы, которые назначены U.

type MyExclude<T, U> = T extends U ? never : T;

type Result4 = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'



/* -------------------------------------------------------------------------- */
/*                                     If                                     */
/* -------------------------------------------------------------------------- */

// Реализуйте тип утилиты If<C, T, F>, который принимает условие C, истинное значение T и ложное значение F.
// Ожидается, что C будет либо истинным, либо ложным, тогда как T и F могут быть любого типа.

type If<C extends boolean, T, F> = C extends true ? T: F;

type A = If<true, 'a', 'b'>;

type B = If<false, 'a', 'b'>;

/* -------------------------------------------------------------------------- */
/*                                   Concat                                   */
/* -------------------------------------------------------------------------- */

// Реализуйте функцию JavaScript Array.concat в системе типов.
// Тип принимает два аргумента. Выходными данными должен быть новый массив, включающий входные данные в порядке ltr.
type ConcatTyple = readonly unknown[];

type MyConcat<T extends ConcatTyple, U extends ConcatTyple> = [...T, ...U];

type Result5 = MyConcat<[1, 2], [3, 4]>;


/* -------------------------------------------------------------------------- */
/*                                  Includes                                  */
/* -------------------------------------------------------------------------- */
// Реализуйте функцию JavaScript Array.includes в системе типов.
// Тип принимает два аргумента. Выходные данные должны быть логическими значениями true или false.

type MyIncludes<T extends readonly any[], U> = { [K in T[number]]: true}[U] extends true ? true : false; 


type Result6 = MyIncludes<['Kars', 'Esid', 'test'], 'Karsb'>

}


/* -------------------------------------------------------------------------- */
/*                                    Push                                    */
/* -------------------------------------------------------------------------- */
// Реализуйте функцию JavaScript Array.push.

type MyPush<T extends any[], U> = [...T, U];

type Result7 = MyPush<[1, 2, 3, 4], 5>


/* -------------------------------------------------------------------------- */
/*                                   Unshift                                  */
/* -------------------------------------------------------------------------- */
// Реализуйте функцию JavaScript Array.unshift.

type MyUnshif<T extends any[], U> = [U, ...T];

type Result8 = MyUnshif<[1, 2, 3, 4], 5>

/* -------------------------------------------------------------------------- */
/*                                 Parameters                                 */
/* -------------------------------------------------------------------------- */
// Реализуйте дженерик Parameters<T>.
function myFunc(arg1: number, arg2: string):void{

}

type MyParametrs<T extends ((...args: any) => any)> = T extends ((...args: infer U) => any) ? U : never;

type Result9 = MyParametrs<typeof myFunc>;


/* -------------------------------------------------------------------------- */
/*                               Get Return Type                              */
/* -------------------------------------------------------------------------- */
// Реализуйте дженерик ReturnType<T>

type MyReturnType<T extends ((...args: any) => any)> = T extends ((...args: any) => infer R) ? R : never;

type Result10 = MyReturnType<typeof myFunc>;


/* -------------------------------------------------------------------------- */
/*                       Реализуйте дженерик Omit<T, K>.                      */
/* -------------------------------------------------------------------------- */
// Создает тип, выбирая все свойства из T и затем удаляя K.


type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
}
interface OmitExample {
  title: string;
  description: string;
  completed: boolean;
}

type Result11 = MyOmit<OmitExample, 'description'>


/* -------------------------------------------------------------------------- */
/*                    Реализуйте дженерик MyReadonly<T, K>.                   */
/* -------------------------------------------------------------------------- */
// K указывает набор свойств T, для которых должно быть установлено значение
// "только для чтения". Если K не указан, все свойства должны быть доступны только для чтения.

type MyCustomReadonlu<T, K extends keyof T = keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
} & {
        readonly [P in K]: T[P];
    }

type Result12 = MyCustomReadonlu<OmitExample, 'description'>

/* -------------------------------------------------------------------------- */
/*                                Deep Readonly                               */
/* -------------------------------------------------------------------------- */
// Реализуйте дженерик DeepReadonly<T> которые делает каждый
// объект (и его подобъекты рекурсивно) доступным только для чтения.


type MyDeepReadonly<T extends object> = {
    readonly [K in keyof T]: 
        T[K] extends object 
            ? T[K] extends ((...arg: any) => any) 
                ? T[K] 
                : MyDeepReadonly<T[K]> 
            : T[K]
}

type TestObj = {
    a: number;
    a1: {
        a2: string;
        b2: {
            c: () => any;
        }
    }
}

type Result13 = MyDeepReadonly<TestObj>;


/* -------------------------------------------------------------------------- */
/*                               Tuple to Union                               */
/* -------------------------------------------------------------------------- */
// Реализуйте дженерик TupleToUnion<T>, который берет значения в кортеже и возвращает объединение его значений.

type TupleToUnion<T extends any[]> = T[number]

type Test = ['a', 'b', 'c'];

type result14 = TupleToUnion<Test>;



/* -------------------------------------------------------------------------- */
/*                                Last of Array                               */
/* -------------------------------------------------------------------------- */
// Реализуйте дженерик Last<T> который получает массив T и возвращает его последний элемент.

type MyLastOfArray<T extends unknown[]> = [never, ...T][T['length']];

type result15 = MyLastOfArray<['a', 'b', 'c']>;

type result16 = MyLastOfArray<[]>;


/* -------------------------------------------------------------------------- */
/*                                     Pop                                    */
/* -------------------------------------------------------------------------- */
// Реализуйте дженерик Pop<T>, который принимает массив T и возвращает массив без последнего элемента.

type MyPop<T extends unknown[]> = T extends [...infer R, unknown] ? R : T;

type result17 = MyPop<['a', 'b', 'c']>


/* -------------------------------------------------------------------------- */
/*                                 Type Lookup                                */
/* -------------------------------------------------------------------------- */
// Иногда вам может понадобиться найти тип в объединении по его атрибутам.
// В этой задаче мы хотели бы получить соответствующий тип, выполнив поиск поля общего
// типа в объединении Cat | Dog. Другими словами, мы ожидаем получить Dog
// для LookUp<Dog | Cat, 'dog'> и Cat для LookUp<Dog | Cat, 'cat'> в следующем примере:

type LookUp<T, U> = T extends {type: U} ? U : never;

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type result18 = LookUp<Cat | Dog, 'dog'>

/* -------------------------------------------------------------------------- */
/*                                  Trim Left                                 */
/* -------------------------------------------------------------------------- */
// Реализуйте дженерик TrimLeft<T>, который уделяет пробелы из начала строки.


type Space = ' ';
type TrimLeft<STR extends string> = STR extends `${Space}${infer R}` ? TrimLeft<R> : STR;

type result19 = TrimLeft<'    Hello World    '>;



/* -------------------------------------------------------------------------- */
/*                                    Trim                                    */
/* -------------------------------------------------------------------------- */
// Реализуйте дженерик Trim<T>, который удаляет пробелы с обоих концов строки.

type Trim <S extends string> = 
    S extends `${Space}${infer R}`
    ? Trim<R>
    :  S extends `${infer R}${Space}` 
        ? Trim<R>
        : S

type resulst20 = Trim<'    Hello World    '>;


/* -------------------------------------------------------------------------- */
/*                                  Absolute                                  */
/* -------------------------------------------------------------------------- */
type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer U}` ? U : T;

type result21 = Absolute<'-100'>;

/* -------------------------------------------------------------------------- */
/*                                    Merge                                   */
/* -------------------------------------------------------------------------- */
type Merge<Obj1 extends object, Obj2 extends object> = {
    [Key in keyof Obj1 | keyof Obj2]:
        Key extends keyof Obj2 
        ? Obj2[Key]
        : Key extends keyof Obj1
            ? Obj1[Key]
            : never  
}

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type resulst21 = Merge<foo, coo>;


/* -------------------------------------------------------------------------- */
/*                                  KebabCase                                 */
/* -------------------------------------------------------------------------- */
// kebab-case
// type KebabCase<Str extends string> = Str extends `${infer K}${infer C}`
//     ? 