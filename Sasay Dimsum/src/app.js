document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Dimsum Original', img: '1.jpg', price: 23000 },
      { id: 1, name: 'Dimsum Jamur', img: '2.jpg', price: 25000 },
      { id: 1, name: 'Dimsum Keju', img: '3.jpg', price: 25000 },
      { id: 1, name: 'Dimsum Mix', img: '4.jpg', price: 25000 },
      { id: 1, name: 'Dimsum Mentai', img: '5.jpg', price: 28000 },
      { id: 1, name: 'Chili Oil', img: '6.jpg', price: 3000 },
      { id: 1, name: 'Saos Dimsum', img: '7.jpg', price: 3000 },
    ],
  }));
});

