const ecommerce = () => {
    return {
        openModal: false,
        openCart: false,
        openModalMobile: false,
        conuntCart: 0,
        cant: 0,
        cantCart: 0,
        products: [
            {
                id: 1,
                name: 'Fall Limited Edition Sneakers',
                price: 250,
                imageL: 'img/image-product-1.jpg',
                imageS1: 'img/image-product-1-thumbnail.jpg',
                imageS2: 'img/image-product-2-thumbnail.jpg',
                imageS3: 'img/image-product-3-thumbnail.jpg',
                imageS4: 'img/image-product-4-thumbnail.jpg',
            }
        ],
        cart: [
            {
                id: 0,
                name: '',
                image: '',
                quantity: 0,
                price: 0
            }
        ],
        increment: function() {
            this.cant++
        },
        decrement: function() {
            if (this.cant > 0) {
                this.cant--
            }
        },
        deleteCart: function() {
            if (this.cantCart > 1){
                this.cantCart = 0
            }
        },
        addCart: function () {
            this.cart = []
            if (this.cant > 0){
                this.cantCart = this.cant
                this.cart.push({
                    id: this.products[0].id,
                    name: this.products[0].name,
                    image: this.products[0].imageS1,
                    quantity: this.cant,
                    price: this.products[0].price,
                })
                this.cant = 0
            }
        }, 
    }
}