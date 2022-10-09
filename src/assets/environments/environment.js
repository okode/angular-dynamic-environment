(function(window) {
  window["environment"] = window["env"] || {};

  // Environment variables
  window["environment"]["name"] = "dev";
  window["environment"]["apiUrl"] = "https://dev.api.com";
  window["environment"]["timeout"] = 3600;
  window["environment"]["customFeatureEnabled"] = true;

})(this);