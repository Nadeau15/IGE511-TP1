document.addEventListener('DOMContentLoaded', function() {
  var languageSelect = document.getElementById('language-select');

  languageSelect.addEventListener('change', function() {
    var lang = this.value;
    var url = window.location.pathname.split('/');
    var langIndex = url.indexOf('en') !== -1 ? url.indexOf('en') : url.indexOf('fr');
    
    if (langIndex !== -1) {
      url[langIndex] = lang;
      var newUrl = window.location.origin + url.join('/');
      window.location.href = newUrl;
    }
  });

  function setSelectedLanguage(lang) {
    languageSelect.value = lang;
  }

  var url = window.location.pathname.split('/');
  var langIndex = url.indexOf('en') !== -1 ? url.indexOf('en') : url.indexOf('fr');
  if (langIndex !== -1) {
    var lang = url[langIndex];
    setSelectedLanguage(lang);
  }
});
