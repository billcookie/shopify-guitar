
// interface is recommend over Types when possible
// interface is described in a more natural way
// describing objects such as shipments, orders etc

// when it is an interface you can not make an instance of person
// interface Person {
//   name: string
//   age: number
// }

// class not used as often as things tend to be moving towards functions
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// interface PersonLoggerFn {
//   (name: string, age: number): string
// }

type PersonLoggerFn = (name: string, age?: number ) => string
// for functions you should use types
// if a question mark the parameter becomes opitional

// type
// type aliases
// to describe function types.
// type Person = {
//   name: string
//   age: number
// }



export default function play() {
  const name = 'Bill'

  // function logPersonInfo(personName: string, personAge: number): string {
  //   const info = `Name: ${personName}, Age: ${personAge}`
  //   console.log(info)
  //   return info
  // }


  const logPersonInfo: PersonLoggerFn = (
    personName: string, personAge: number = 0)
    : string => {
    const info = `Name: ${personName}, Age: ${personAge}`
    console.log(info)
    return info
  }

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, Age: ${person.age}`
    console.log(info)
    return info
  }

  const log = logPersonInfo(name)
  logPersonInfo2(new Person("Bob", 70))
}
