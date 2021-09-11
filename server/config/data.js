const titles = [
    "Chicken Bone",
    "Beef Bone",
    "Turkey Bone",
    "Pork Bone",
    "Salmon Bone",
    "Mix Bone",
    "Chicken Treats",
    "Beef Treats",
    "Turkey Treats",
    "Pork Treats",
    "Salmon Treats",
    "Mix Treats",
];

const create = (titles) => {
    const all = [];
    titles.forEach((title, index) => {
        const price = Math.floor(Math.random() * 100);
        const salePrice = price > 50 ? price - 5 : null;

        const obj = {
            title,
            price,
            salePrice,
            tags: ["new"],
            description: "Default Description.",
            variants: [],
            media: [],
        };

        for (let i = 0; i < 3; i++) {
            obj.variants.push({
                title: `${16 * (i + 1)}oz`,
                price: price + 5 * i,
                salePrice: !salePrice ? salePrice : salePrice + 5 * i,
                mediaUrl: null,
            });
        }

        all.push(obj);
    });
    return all;
};

export const productsArr = create(titles);
