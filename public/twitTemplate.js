(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['twit'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <article class=\"twit\">\n    <div class=\"twit-icon\">\n      \n    </div>\n   <div class=\"twit-content\">\n     \n     <p class=\"twit-text\">\n       "
    + alias4(((helper = (helper = lookupProperty(helpers,"Skin_name") || (depth0 != null ? lookupProperty(depth0,"Skin_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Skin_name","hash":{},"data":data,"loc":{"start":{"line":8,"column":7},"end":{"line":8,"column":20}}}) : helper)))
    + " \n      </p>\n\n      <div class=\"twit-weapon\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Weapon_type") || (depth0 != null ? lookupProperty(depth0,"Weapon_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Weapon_type","hash":{},"data":data,"loc":{"start":{"line":11,"column":32},"end":{"line":11,"column":47}}}) : helper)))
    + "</div>\n  \n      <img class=\"resize\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"Image_file") || (depth0 != null ? lookupProperty(depth0,"Image_file") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Image_file","hash":{},"data":data,"loc":{"start":{"line":13,"column":31},"end":{"line":13,"column":45}}}) : helper)))
    + "\" />\n\n        <p class=\"twit-author\">\n       "
    + alias4(((helper = (helper = lookupProperty(helpers,"Price") || (depth0 != null ? lookupProperty(depth0,"Price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Price","hash":{},"data":data,"loc":{"start":{"line":16,"column":7},"end":{"line":16,"column":16}}}) : helper)))
    + "\n      </p>\n   </div>\n  </article>";
},"useData":true});
})();