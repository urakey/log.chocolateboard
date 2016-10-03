/**
 * @class Navigation
 */

function Navigation($dom) {
  this.$dom           = $dom;
  this.$subNavigation = $dom.find('ul');
  this.isOpen         = false;

  this._init.apply(this);
}

Navigation.prototype = {

  _init: function() {
    if (!this.$subNavigation) return;

    this.$dom.on('mouseenter', this, this.open);
    this.$dom.on('mouseleave', this, this.close);
  },

  open: function(e) {
    var _this = e.data;

    if (!_this.isOpen) {
      _this.$subNavigation.css({ display: 'block' });
      _this.isOpen = true;
    }
  },

  close: function(e) {
    var _this = e.data;

    if (_this.isOpen) {
      setTimeout( function(){ _this.$subNavigation.css({ display: 'none' }); }, 200);
      _this.isOpen = false;
    }
  }
};

// export
module.exports = Navigation;
