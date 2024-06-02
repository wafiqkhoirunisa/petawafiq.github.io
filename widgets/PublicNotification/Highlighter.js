// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/Deferred esri/graphic esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleMarkerSymbol".split(" "),function(v,w,q,r,n,t,k,p){return w([],{constructor:function(a){this._drawingChunkSize="number"===typeof a?a:100},createGraphic:function(a,c){function g(e,l){var m;e.getLayer&&(m=e.getLayer())&&(e=e.getLayer()._getSymbol(e),!e||isNaN(e.width)||isNaN(e.height)||(l=1+Math.max(e.width,e.height)));return l}var f=null,
d=10;if(a)if(a.geometry){var b=a.geometry;var h=b.type}else if(b=a,b.hasOwnProperty("x")&&b.hasOwnProperty("y"))h="point";else if(b.hasOwnProperty("paths"))h="polyline";else if(b.hasOwnProperty("rings"))h="polygon";else if(b.hasOwnProperty("points"))h="multipoint";else return null;else return null;switch(h){case "point":if(isNaN(b.x)||isNaN(b.y))return null;d=g(a,d);f=new n(b,new p(p.STYLE_SQUARE,d,new k(k.STYLE_SOLID,c.point.lineColor,c.point.lineWidth),c.point.fillColor));break;case "polyline":f=
new n(b,new k(k.STYLE_SOLID,c.line.lineColor,c.line.lineWidth));break;case "polygon":f=new n(b,new t(t.STYLE_SOLID,new k(k.STYLE_SOLID,c.polygon.lineColor,c.polygon.lineWidth),c.polygon.fillColor));break;case "multipoint":d=g(a,d),f=new n(b,new p(p.STYLE_SQUARE,d,new k(k.STYLE_SOLID,c.point.lineColor,c.point.lineWidth),c.point.fillColor))}return f},highlightFeatures:function(a,c,g,f,d){var b=new r;if(0<a.length)if(a.length<=this._drawingChunkSize)this._highlightFeatures(a,c,g,f).then(function(){b.resolve(!0)});
else{d(0);var h=Math.ceil(a.length/this._drawingChunkSize);setTimeout(q.hitch(this,function(){this._highlightFeaturesContinuation(a,c,g,f,d,this._drawingChunkSize,h,0,0).then(function(){b.resolve(!0)})}),50)}else b.resolve(!0);return b},_highlightFeaturesContinuation:function(a,c,g,f,d,b,h,e,l){var m=new r;if(l>=a.length)return m.resolve(!0),m;var u=Math.min(l+b,a.length);this._highlightFeatures(a.slice(l,u),c,g,f).then(q.hitch(this,function(){++e;d(100*e/h);setTimeout(q.hitch(this,function(){this._highlightFeaturesContinuation(a,
c,g,f,d,this._drawingChunkSize,h,e,u).then(function(){m.resolve(!0)})}),10)}));return m},_highlightFeatures:function(a,c,g,f){var d=new r;v.forEach(a,function(b){c(b,g,f)},this);d.resolve(!0);return d}})});