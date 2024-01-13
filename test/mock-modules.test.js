import {ProductService} from "../src/product-service.js";
import {getAllProducts, getProductById} from "../src/database.js";

// mock module database
jest.mock("../src/database.js")

test("mock modules getProductById", () => {
    //jika getProductById dipanggil akan mengembalikan value id dan name
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "Product Mock"
        }
    });

    const product = ProductService.findById(1);

    expect(product).toEqual({
        id: 1,
        name: "Product Mock"
    });
});

test("mock modules getAllProducts", () => {
    const products = [
        {
            id: 1,
            name: "Product Mock"
        },
        {
            id: 2,
            name: "Product Mock"
        }
    ];

    getAllProducts.mockImplementation(() => {
        return products;
    });

    expect(ProductService.findAll()).toEqual(products);
});