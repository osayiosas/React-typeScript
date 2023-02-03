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

export const Person = (props: props) => {



  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h1>Email:{props.email}</h1>
      <h1>Age:{props.age}</h1>
      <h1>this person {props.isMarried ? "is" : "is not"} Married</h1>
      {props.friends.map((friend: string) => (
        <h1>{friend}</h1>
      ))}
          
          <h1> Country: {props.country} </h1>
    </div>
  )
}

export default Person