angular.module("utils",[])
            .value("defaultTrimLength", 20)
            .filter("trimText", function(defaultTrimLength, $filter){
                return function(data, trimLength){
                    trimLength = trimLength || defaultTrimLength;
                    var limitTo = $filter("limitTo");
                    return data.length < trimLength
                        ? data
                        : limitTo(data,trimLength) + "...";
                }
        });
