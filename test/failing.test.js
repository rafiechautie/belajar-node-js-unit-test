import {sayHello} from "../src/sayHello.js";

test("sayHello success", () => {
    expect(sayHello("Eko")).toBe("Hello Eko");
});

// kalau dia dapetnya bukan error malah gagal pasti unit testnya
test.failing("sayHello error", () => {
    sayHello(null);
});

//ini untuk test biasa tanpa memanfaatkan failing
test("sayHello error matchers", () => {
    expect(() => sayHello(null)).toThrow();
});