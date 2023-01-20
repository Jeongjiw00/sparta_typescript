// class Developer {
//   name: string;
// }

// const josh = new Developer();
// josh.name = "Josh Bolton";

// export { Developer };

class Developer {
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    if (newValue && newValue.length > 5) {
      throw new Error("이름이 너무 깁니다");
    }
    this._name = newValue;
  }
}

const josh = new Developer();
josh.name = "Josh";
// josh._name = "Josh"; //private라서 바로접근불가
console.log(josh.name); //Josh

export { Developer };
