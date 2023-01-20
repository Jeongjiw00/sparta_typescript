interface Node {
  count: number;
  init(this: Node): () => {};
}

let nd: Node = {
  count: 10,
  init: function (this: Node) {
    //화살표함수가 아니고 일반함수라면 undefined가 나옴
    return () => {
      return this.count;
    };
  },
};

let getCount = nd.init();
let count = getCount();

console.log(count); // 10
