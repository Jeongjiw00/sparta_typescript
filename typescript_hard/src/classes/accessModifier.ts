// public, private, protected

// public => 제한없음, 누구나 access 가능
// private => 특정 class 안에서만 access 가능
// protected => 특정 class 와 상속받는 class 안에서만 access 가능

class Base {
  first = ""; // 안적으면 자동으로 public
  public second = "";
  protected third = "";
  private fourth = "";

  baseFunction() {
    this.first;
    this.second;
    this.third;
    this.fourth;
  }
}

class Inherited extends Base {
  myFunction() {
    this.first;
    this.second;
    this.third;
    // this.fourth; // error
  }
}

const inherited = new Inherited();

inherited.first;
inherited.second;
// inherited.third; // error
// inherited.fourth; // error
