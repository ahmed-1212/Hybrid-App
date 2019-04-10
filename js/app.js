// chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

// set language
require('./lang');
require('./events');
// Dom7
var $ = Dom7,

  // Theme
  theme = 'md',
  // Init App
  app = new Framework7({
    id: 'net.osamatoma.hajj',
    root: '#app',
    theme: theme,
    panel: {
      swipe: 'right',
    },
    data() {
      return {
        url: 'http://www.elba.com.sa',
        lang: localStorage.getItem('lang'),
        get ajaxUrl() {
          return this.url + '/public/ajax.php'
        },
        get typesUrl() {
          return this.ajaxUrl + '/?types'
        },
        get newProductsUrl() {
          return this.ajaxUrl + '/?newProducts'
        },
        get familiesImagesPath() {
          return `${this.url}/public/uploads/families/`;
        },
        get producstImagesPath() {
          return `${this.url}/public/uploads/products/`;
        },
        familiesByTypeId(id) {
          return `${this.ajaxUrl}/?familiesByTypeId=${id}`;
        },
        productsByFamily(id) {
          return `${this.ajaxUrl}/?productsByFamily=${id}`;
        },
        productData(id) {
          return `${this.ajaxUrl}/?product=${id}`;
        },
        

      }
    },
    methods: {
      getNewProducts() {
        var newProductsSlider = this.swiper.create('.new-products-slider', {
          slidesPerView: 2
        });
        this.request.json(this.data.newProductsUrl, data => {
          data.forEach((item, index) => {
            let html = `
            <div class="swiper-slide">
              <div class="card">
                <div class="card-content card-content-padding">
                  
                  <img src="${this.data.producstImagesPath}${item.product_image}" alt="product-10"> 
                  
                  <div class="item-after"><span class="badge color-green">NEW</span></div>
                </div>
                <div class="card-footer ar-text-right">
                <a href="/product/${item.product_id}">
                  <span>
                    ${item['product_name_' +  this.data.lang]}
                  </span>
                  </a>  
                </div>
              </div>
            </div>                  
            `;
            newProductsSlider.appendSlide(html);
          });
        });
      },
      getTypes() {
        let typesSlider = this.swiper.create('.types', {
          slidesPerView: 2
        });

        this.request.json(this.data.typesUrl, data => {
          data.forEach((item, index) => {
            let html = `
              <div class="swiper-slide">
                <div class="card">
                  <div class="card-content card-content-padding">
                    
                    <img src="${this.data.url}${item.image}" alt="family-2"> 
                  </div>
                  <div class="card-footer ar-text-right">
                  <a href="/families/${item.type_id}/${item['type_' + this.data.lang]}">
                    <span>${item['type_' + this.data.lang]}</span>
                  </a> 
                      
                  </div>
                </div>
              </div>
              `;
            typesSlider.appendSlide(html);
          });
        });
      },
      translate() {
        let translate = JSON.parse(localStorage.getItem('translate'))[this.data.lang];
        this.$('.new-products').html(translate['new-products']);
        this.$('.types_translate').html(translate['types']);
        this.$('.home').html(translate['home']);
        this.$('.contact-text').html(translate['contact']);
        this.$('.settings-text').html(translate['settings']);
        this.$('.main-website').html(translate['main-website']);
      }
    },
    on: {
      pageInit: function (e) {
        this.methods.translate();
        this.methods.getNewProducts();
        this.methods.getTypes();
      }
    },
    routes: routes
  });



