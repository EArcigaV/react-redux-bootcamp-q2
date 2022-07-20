import { rest } from "msw";

const url =
  "https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/products";

export const handlers = [
  rest.get(`${url}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        {
          items: [
            {
              id: 7,
              name: '32" The Frame QLED 4K Smart TV (2021)',
              price: 499.99,
              description:
                "The elegant, modern design blends flawlessly to elevate your home décor. Transform The Frame into a beautiful work of art when you are not watching TV with Art Mode.",
              images: [
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/04-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-R-Side-black-1600x1200.jpg?$product-details-jpg",
              ],
              categories: ["Television & video"],
            },
            {
              id: 7,
              name: '32" The Frame QLED 4K Smart TV (2021)',
              price: 499.99,
              description:
                "The elegant, modern design blends flawlessly to elevate your home décor. Transform The Frame into a beautiful work of art when you are not watching TV with Art Mode.",
              images: [
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/04-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-R-Side-black-1600x1200.jpg?$product-details-jpg",
              ],
              categories: ["Television & video"],
            },
            {
              id: 7,
              name: '32" The Frame QLED 4K Smart TV (2021)',
              price: 499.99,
              description:
                "The elegant, modern design blends flawlessly to elevate your home décor. Transform The Frame into a beautiful work of art when you are not watching TV with Art Mode.",
              images: [
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/04-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-R-Side-black-1600x1200.jpg?$product-details-jpg",
              ],
              categories: ["Television & video"],
            },
            {
              id: 7,
              name: '32" The Frame QLED 4K Smart TV (2021)',
              price: 499.99,
              description:
                "The elegant, modern design blends flawlessly to elevate your home décor. Transform The Frame into a beautiful work of art when you are not watching TV with Art Mode.",
              images: [
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/04-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-R-Side-black-1600x1200.jpg?$product-details-jpg",
              ],
              categories: ["Television & video"],
            },
            {
              id: 7,
              name: '32" The Frame QLED 4K Smart TV (2021)',
              price: 499.99,
              description:
                "The elegant, modern design blends flawlessly to elevate your home décor. Transform The Frame into a beautiful work of art when you are not watching TV with Art Mode.",
              images: [
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/01-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-Front-black-1600x1200.jpg?$product-details-jpg",
                "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/frame-tv/pdp/020620/gallery/04-PDP-GALLERY-Frame-product-QN75LS03TAFXZA-R-Side-black-1600x1200.jpg?$product-details-jpg",
              ],
              categories: ["Television & video"],
            },
          ],
        },
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached

          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_API_KEY,
          },
        }
      )
    );
  }),
];
