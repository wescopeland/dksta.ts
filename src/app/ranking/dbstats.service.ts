import * as firebase from 'firebase';

/* @ngInject */
export function dbstatsService($firebaseObject, $q) {
  var _fbRef = firebase.database().ref();

  this.getDbStats = getDbStats;

  ////////////////

  function getDbStats() {
    return $q(function(resolve, reject) {
      var dbStatsData = $firebaseObject(_fbRef.child('dbStats'));

      dbStatsData.$loaded().then(function() {
        console.log(dbStatsData);
        resolve(dbStatsData);
      });
    });
  }
}
