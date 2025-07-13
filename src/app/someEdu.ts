import { json } from "stream/consumers";

export default function runSomeCode(){
    /* -------------------------------------------------------------------------- */
    /*                                   Generic                                  */
    /* -------------------------------------------------------------------------- */
    interface MetaData{
        timestamp: string
    }
    interface User{
        username: string;

    }
    interface Product{
        name: string
    }
    interface ApiResponce<Data, Meta>{
        status?: 'error' | 'success';
        meta?: Meta;
        requestId?: string;
        data: Data;
    }

    const responseUser:ApiResponce<User, MetaData> = {
        data: {
            username: 'Tandemka',
        },
        meta: {
            timestamp: '10-07-2025'
        }
    }

    const responseProduct:ApiResponce<Product, {someField: number}> = {
        data: {
            name: 'Ноутбук',
        },
        meta: {
            someField: 1,
        }
    }

    // =====================================================
    interface Tree<T>{
        id: string,
        value: T, 
        children: Tree<T>[] | null,
    }

    const treeNode: Tree<Product> = {
        id: '123',
        value: {
            name: 'HP'
        },
        children: [
            {
                id: '123-1',
                value: {
                    name: 'HP mouse'
                }, 
                children: null
            },
            {
                id: '123-2',
                value: {
                    name: 'HP keyboard'
                }, 
                children: null
            },
        ]
    }
    // ===================================
    function testGenericFunction<T>(arg: T){
        return arg;
    }

    const testArrowFunction = <T>(arg: T) => {
        return arg;
    }

    const testFunctionExpression = function<T>(arg: T){
        return arg;
    }
    /* -------------------------------------------------------------------------- */
    /*                                   Extends                                  */
    /* -------------------------------------------------------------------------- */

    function createEntities<T extends {text:string , id: string}>(arg: T){
        console.log(arg.id);
    }
    // createEntities<User>({username: 'Tandemka'})
    createEntities({text: 'text', id: '123'});

    /* -------------------------------------------------------------------------- */
    /*                             Условные операторы                             */
    /* -------------------------------------------------------------------------- */

    type testIsArray<T> = T extends any[] ? true : false;
    
    const testExpression1:testIsArray<string> = false;
    const testExpression2:testIsArray<[]> = true;

    // ===================================================

    type randomName<T> = T extends string ? {value: string} : {value: T};

    const testName:randomName<string> = {
        value: '123'
    }
    const testName2: randomName<number> = {
        value: 123
    }
    // ====================================================

    type randomName2<T> = T extends User ? {id: number} : {value: T};
    
    const testName3:randomName2<User> = {
        id: 123,
    }
    const testName4:randomName2<number> = {
        value: 123,
    }
    const testName5:randomName2<{username: 'Tandemka', name2: 'text'}> = {
        id: 50,
    }
    const testName6: randomName2<{name2: string}> = {
        value: {
            name2: 'text'
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                                  Narrowing                                 */
    /* -------------------------------------------------------------------------- */
    function testNarrowing(arg: number | string | null){
        if(typeof arg === 'number'){
            console.log(arg + arg);
            return arg;
        }
        if(typeof arg === 'string'){
            console.log(arg.toUpperCase());
            return arg;
        }else{
            console.log('Fuck arg has type null');
        }
    }
    testNarrowing(null);
    testNarrowing(1);
    testNarrowing('hello world');

    // ============================================
    function testNarrowing2(arg: number | string | null, arg2: number){
        if(arg == arg2){
            arg
        }
        if(arg === arg2){
            arg
        }
    }

    // ============================================
    function testNarrowing3(arg: User | Product){
        if('username' in arg){
            arg
        }else{
            arg
        }

        arg
    }

    // ==============================================
    class Auto {
        name = 'BMW'
    }
    class Motocycle {
        year = 1999;
    }

    function testNarrowing4(arg: Auto | Motocycle){
        if(arg instanceof Auto){
            arg.name
        }else{
            arg.year
        }

        arg
    }

    /* -------------------------------------------------------------------------- */
    /*                                     ===                                    */
    /* -------------------------------------------------------------------------- */

    interface BaseUser{
        name: string,
        bithday: number,
    }

    interface Developer extends BaseUser{
        type: 'developer'
        team_role: string,
        skills: string[]
    }

    interface Employer extends BaseUser{
        type: 'employer'
        email: string
    }

    interface OtherUser extends BaseUser{
        type: 'other'
        description: string,
    }

    type newUser = Developer | Employer | OtherUser;

    function testNarrowing6(arg: newUser){
        switch(arg.type){
            case 'developer':
                arg
                break;
            case 'employer':
                arg
                break;
            default:
                arg
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                                 Type Guards                                */
    /* -------------------------------------------------------------------------- */

    interface In1{
        field1: string
    }

    interface In2{
        field2: string
    }

    function funcTG_1(arg: In1 | In2): arg is In1{
        return 'field1' in arg
    }
    
    function funcTG_2(arg: In1 | In2): arg is In2{
        return 'field2' in arg;
    }

    function func_1(data: In1 | In2){
        if(funcTG_1(data)){
            data
        }else{
            data
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                            преобразование типов                            */
    /* -------------------------------------------------------------------------- */
    interface In3{
        name: string,
        age: number,
        password: string
    }

    let testObj = {
        name: 'Никита',
        age: 10
    }

    let testObj1 = {
        name: 'Никита',
        age: 10
    } as In3

    // const testStr = '12345' as number;
    
    // let testObj2 = {
    //     name: 'Никита',
    //     age: 10,
    // } satisfies In3

    let testObj3 = {
        name: 'Никита',
        age: 10,
        password: 'SomePass'
    } satisfies In3

    // ==================================
    interface In4{
        age: number
    }
    // function JSONParse<T>(data: string):T{
    //     return JSON.parse(data) as T;
    // }
    // const defaultParseJson: In4 = JSON.parse('{age:25}');
    // const defaultParseJson:In4 = JSON.parse('{age: 25}');
    // const defaultParseJson = JSON.parse('{age: 25}') as In4;
    // const parsedJson = JSONParse<In4>('{age: 25}');

    // ==================================
    // interface In5{
        // f1: 
    // }

    const PersonKeys = {
        age: 'age',
        username: 'username',
    } as const;

    const keysDef = Object.keys(PersonKeys);

    function testKeys<T extends object>(data: T):Array<keyof T>{
        return Object.keys(data) as Array<keyof T>
    }
    const keys = testKeys(PersonKeys);
    console.log(keys)
    

    /* -------------------------------------------------------------------------- */
    /*                                   Typeof                                   */
    /* -------------------------------------------------------------------------- */

    const obj1 = {
        name: 'Tandemka',
        age: 20
    }
    type Me = typeof obj1;
    
    const MeObj: Me = {
        name: 'NeTandemka',
        age: 2,
    }


    // ============================
    const testColor = 'red';
    type RedColor = typeof testColor;

    // const green: RedColor = 'green';


    // ============================

    function someFn1 (user: Me): number{
        return 10;
    }

    type GetSomeFn1 = typeof someFn1;
    type GetSomeFn1Return = ReturnType<typeof someFn1>;
    type GetSomeFn1Params = Parameters<typeof someFn1>;


    /* -------------------------------------------------------------------------- */
    /*                                    KeyOf                                   */
    /* -------------------------------------------------------------------------- */
    type MeKey = keyof typeof obj1;

    function testGetByKey<T, K extends keyof T>(obj: T, key: K): T[K]{
        return obj[key];
    }
    console.log(testGetByKey(MeObj, 'name'));



    /* -------------------------------------------------------------------------- */
    /*                                  Optional                                  */
    /* -------------------------------------------------------------------------- */
    interface In6{
        name: string;
        address?: {
            street: string;
        };
        getSome?: () => number; 
    }

    const in6: In6 = {
        name: 'NeTandemka',
    } 


    function someFn2(user: In6){
        console.log(in6.address?.street);
        console.log(in6.getSome?.());

        // console.log(in6.address.street);
        // console.log(in6.getSome());
    }
    
    someFn2(in6);

    /* -------------------------------------------------------------------------- */
    /*                                    Enum                                    */
    /* -------------------------------------------------------------------------- */
    enum EnumColor {
        RED = 'red',
        BLACK = 'black',
        WHITE = 'white'
    }

    const enum EnumColor2 {
        RED = 'red',
        BLACK = 'black',
        WHITE = 'white'
    }

    enum EnumColor3{
        RED,
        BLACK,
        WHITE
    }

    const ObjColor = {
        RED: 'red',
        BLACK: 'black',
        WHITE: 'white'
    } as const;

    type ObjColorType = typeof ObjColor[keyof typeof ObjColor];

    // Или 

    type ValueOf<T> = T[keyof T];
    
    type ObjColorType2 = ValueOf<typeof ObjColor>;

    enum TestEnum1{
        RED = 'red',
    }

    enum TestEnum2{
        RED = 'red',
    }

    function someFn3(arg: TestEnum1){
        console.log('some');
    }

    // someFn3(TestEnum2);


    /* -------------------------------------------------------------------------- */
    /*                              Type и Interface                              */
    /* -------------------------------------------------------------------------- */

    interface in7{
        username: string,
        age: number,
    }

    interface in8 extends in7{
        password: string
    }

    type type7 = {
        username: string,
        age: number,
    }

    type type8 = type7 & {
        password: string
    }
    // type type8 = {
    //     username: string,
    // }

    // interface in8{
    //     image: string,
    // }

    // const user: in8 = {
    //     username: 'user',
    //     age: 20,
    //     password: '123',
    //     image: 'image',
    // }


    /* -------------------------------------------------------------------------- */
    /*                                Mapped Types                                */
    /* -------------------------------------------------------------------------- */
    interface in9{
        username: string,
        age: number
    }

    type ReadonlyType<T> = {
        // readonly [P in keyof T]: T[P];
        readonly [P in keyof T]?: T[P];
        // readonly [P in keyof T]: T[P] | null;
        // readonly [P in keyof T]: T[P] | string[];
    }
    type UnReadonlyType<T> = {
        // -readonly [P in keyof T]: T[P];
        -readonly [P in keyof T]-?: T[P];
        // readonly [P in keyof T]: T[P] | null;
        // readonly [P in keyof T]: T[P] | string[];
    }
    type newIn9 = ReadonlyType<in9>;
    type newIn10 = UnReadonlyType<newIn9>;


}