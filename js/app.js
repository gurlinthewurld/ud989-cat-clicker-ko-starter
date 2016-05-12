var initialBeagles = [
  {
    clickCount: 0,
    beagleid: "1",
    name: "Sleepy",
    beaglePic: "http://netstorage.discovery.com/feeds/brightcove/asset-stills/apl/1405106713345B029HH_12670801101197_Beagle.jpg",
    inputfield: "1",
    textfield: "1",
    currentselector: "beagleID1",
    nicknames: [ 'smellie', 'shmoopie', 'pooper', 'pooperloo' ]
  },
  {
    clickCount: 0,
    beagleid: "2",
    name: "Adobe",
    beaglePic: "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/beagle_02_lg.jpg",
    inputfield: "2",
    textfield: "2",
    currentselector: "beagleID2",
    nicknames: [ 'So Adobe' ]
  },
  {
    clickCount: 0,
    beagleid: "3",
    name: "Blue",
    beaglePic: "https://www.breederretriever.com/images/photopost/537/beagle_pup.jpg",
    inputfield: "3",
    textfield: "3",
    currentselector: "beagleID3",
    nicknames: [ 'cutester' ]
  }
];
var Beagle = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.beagleid = ko.observable(data.beagleid);
  this.name = ko.observable(data.name);
  this.beaglePic = ko.observable(data.beaglePic);
  this.inputfield = ko.observable(data.inputfield);
  this.textfield = ko.observable(data.textfield);
  this.currentselector = ko.observable(data.currentselector);
  this.nicknames = ko.observableArray(data.nicknames);
  this.title = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = "baby";
        } else if (clicks < 30) {
            title = "puppy";
        } else if (clicks < 45) {
            title = "puppster";
        } else if (clicks < 50) {
            title = "little dude";
        } else {
            title = "big dude";
        }
        return title;
    }, this);
  }

var ViewModel = function()  {
  var self = this;

  this.beagleList = ko.observableArray([]);

  initialBeagles.forEach(function(beagleItem) {
      self.beagleList.push( new Beagle(beagleItem) );
  });

  this.currentBeagle = ko.observable( this.beagleList()[0] );

  this.incrementer = function() {
      self.currentBeagle().clickCount(self.currentBeagle().clickCount() +1);
  };

  this.clicker = function(thisCanBeAnything) {
      self.currentBeagle(thisCanBeAnything);
        // console.log('woof');
  };
    };
ko.applyBindings(new ViewModel())
