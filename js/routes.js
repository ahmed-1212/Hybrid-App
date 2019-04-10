/*jslint plusplus: true, evil: true */

var routes = [
        // Index page
        { path: '/index', url: './index.html', name: 'home'},
        // Family page
        
        {path: '/families/:id/:name', componentUrl: './pages/families.html', name: 'families' },

        {path: '/product/:id', componentUrl: './pages/product.html', name: 'product'},
        {path: '/products/:family/:name', componentUrl: './pages/products.html', name: 'products' },
        {path: '/contact/', componentUrl: './pages/contact.html', name: 'contact' },
        {path: '/settings/', componentUrl: './pages/settings.html', name: 'settings' },
    ];
