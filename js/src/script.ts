class MyClass {
  private _age: number
  constructor(private _name: string, private _birth_date: Date) {
    this._age = new Date().getFullYear() - _birth_date.getFullYear()
    console.log(this._age);
  }
}

const person = new MyClass('Surname Name Patronymic', new Date("09.05.2005"))


