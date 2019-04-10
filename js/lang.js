let lang = localStorage.getItem('lang');
translate = {
    'ar-text': 'العربية',
    'en-text': 'English',
    ar: {
        'new-products': 'المنتجات الجديدة',
        'types': 'انواع المنتجات',
        'language':'اللغة',
        'additional-information': 'معلومات إضافية',
        'home': 'الرئيسية',
        'contact': 'تواصل معنا',
        'settings': 'الإعدادات',
        'main-website': 'الموقع الرئيسي',
        'family': 'العائلة',
        'size': 'المقاس',
        'model': 'الموديل',
        'dim': 'الابعاد',
        'fuel': 'نوع التشغيل'
        
    },
    en: {
        'new-products': 'New Products',
        'types': 'Products Type',
        'language': 'language',
        'additional-information': 'Additional information',
        'home': 'Home',
        'contact': 'Contact Us',
        'settings': 'Settings',
        'main-website': 'Main Website',
        'family': 'Family',
        'size': 'Size',
        'model': 'Model',
        'dim': 'Dimension',
        'fuel': 'Fuel'
    }

};
localStorage.setItem('translate', JSON.stringify(translate));
document.body.classList.add(lang);
if (lang) {

} else {
    localStorage.setItem('lang', 'ar');
    window.location.reload();
}