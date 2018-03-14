(function () {
    angular.module('myApp')
        .factory('spotsModel', function (handleRequest) {
            var spotsModel = this;
            spotsModel.kiteSurfingSpots = [];



            var setKiteSurfingSpots = function () {
                handleRequest.getKiteSurfingSpots().then(function(data){
                    if (data) {
                        spotsModel.kitesurfingSpots = data;
                    }
                })
            };

            var getKiteSurfingSpots = function(){
                return spotsModel.kitesurfingSpots;
            };

            return {
                setKiteSurfingSpots: setKiteSurfingSpots,
                getKiteSurfingSpots: getKiteSurfingSpots


            };


        });

}());