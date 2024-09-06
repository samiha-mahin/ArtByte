type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "The Lady",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c1.jpg",
      price: 350,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "The Blue",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c2.webp",
      price: 299,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "The Abstract",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c3.avif",
      price: 349,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Abstract",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c4.jpg",
      price: 269,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "The Flower Vase",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c5.jpg",
      price: 299,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "The Flower Vase",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c6.webp",
      price: 299,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "The Water Existed Once",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/my9.JPG",
      price: 399,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "The Night",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/my6.JPG",
      price: 399,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Waterlilies by",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/my5.JPG",
      price: 399,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  export const paintings: Products = [
    {
      id: 1,
      title: "The Lady",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c1.jpg",
      price: 350,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "The Blue",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c2.webp",
      price: 299,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "The Abstract",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c3.avif",
      price: 349,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Abstract",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c4.jpg",
      price: 269,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "The Flower Vase",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c5.jpg",
      price: 299,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "The Flower Vase",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/c6.webp",
      price: 299,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "The Water Existed Once",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/my9.JPG",
      price: 399,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "The Night",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/my6.JPG",
      price: 399,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Waterlilies by",
      desc: "Acrylic painting on 24x36 inch canvas",
      img: "/my5.JPG",
      price: 399,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
      
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "The Lady",
    desc: "Acrylic painting on 24x36 inch canvas",
    img: "/c1.jpg",
    price: 350,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Art = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const art: Art = [
    {
      id: 1,
      slug: "paintings",
      title: "Oil Paintings",
      desc: "Oil painting the most popular art form Europe to the rest of the world.",
      img: "/blueoil.avif",
      color: "white",
    },
    {
      id: 2,
      slug: "acrylic",
      title: "Acrylic Painting",
      desc: "Acrylic painting is considered peoples favourite",
      img: "/blue.jpg",
      color: "white",
    },
    {
      id: 3,
      slug: "Watercolor",
      title: "Watercolor Painting",
      desc: "Watercolor painting is a versatile and expressive art form",
      img: "/Pthalo-blue.webp",
      color: "white",
    },
  ];