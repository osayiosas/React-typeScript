## React TypeScript 

i created the React-app TyprScript Template and use instead of using the propsTypes. 

## Interface & enum 

i used the interface to define types of my data and set them to string, number and boolen and then used enum to set my options of country 

```typeScript 
interface props{
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country;

}

export enum Country {
    Brazil = "Brazil",
    Nigeria = "Nigeria",
    Ghana = "Ghana",
} 
```
