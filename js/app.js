var ViewModel = function()  {
  this.clickCount = ko.observable(0);
  this.beagleid = ko.observable('1');
  this.name = ko.observable('Sleepy');
  this.beaglePic = ko.observable('http://netstorage.discovery.com/feeds/brightcove/asset-stills/apl/1405106713345B029HH_12670801101197_Beagle.jpg');
  this.inputfield = ko.observable('1');
  this.textfield = ko.observable('1');
  this.currentselector = ko.observable('beagleID1');
  this.levels = ko.computed(function() {
        if (this.clickCount() < 20) {
            return "puppy";
        } else if (this.clickCount() < 50) {
            return "puppster";
        } else {
            return "big dude";
        }
    }, this)
  this.incrementer = function() {
      this.clickCount(this.clickCount() +1);
  };
}
ko.applyBindings(new ViewModel())
