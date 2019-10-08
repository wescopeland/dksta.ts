import * as firebase from 'firebase';

/* @ngInject */
export function timelineService($q, $firebaseObject, $firebaseArray) {
  var _fbRef = firebase.database().ref();

  // Public Functions
  this.getDaysSinceData = getDaysSinceData;
  this.getTimelineData = getTimelineData;

  ////////////////

  function getDaysSinceData() {
    return $q(function(resolve, reject) {
      var daysSinceData = $firebaseObject(_fbRef.child('daysSince'));

      daysSinceData.$loaded().then(function() {
        var sanitizedDaysSinceArray = [];
        daysSinceData.forEach(function(element) {
          sanitizedDaysSinceArray.push({
            stringValue: element.stringValue,
            objectValue: element.objectValue,
            date: new Date(element.objectValue.date),
            title: element.title
          });
        });

        console.log(sanitizedDaysSinceArray);
        resolve(sanitizedDaysSinceArray);
      });
    });
  }

  function getTimelineData(inputTimeline) {
    return $q(function(resolve, reject) {
      var timelineData = $firebaseArray(
        _fbRef.child('timelines').child(inputTimeline)
      );

      timelineData.$loaded().then(function() {
        resolve(timelineData);
      });
    });
  }
}
