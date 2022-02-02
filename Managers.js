angular.module("MyManagers", [])
.filter("myfilter", function()
{
    return function(input, option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
            return input.substring(0, option).toUpperCase();
        }
    }
})
.controller("ManagerCtrl",function($scope)
{
    var Managers=[
        {name:'Saumya',phone:89000323, address:"Bannerghatta Road", age:23, Projects:"Woods, Citadel", salary:6700},
        {name:'Kai', phone:12345, address:"JP Nagar", age:27, projects:"Deepa, Citadel", salary:1200},
        {name:'Jess', phone:897654, address:"JP Nagar", age:33, projects:"Paradise, Song", salary:1950},
        {name:'Kavita', phone:5436819, address:"Bannerghatta", age:41, projects:"Woods, Song", salary:3400},
        {name:'Minho', phone:5182735, address:"Hosur Road", age:24, projects:"Citadel, Song", salary:3750},
        {name:'Bilal', phone:416627, address:"Gottigere", age:23, projects:"Paradise, Prestige", salary:2800},
        {name:'Pandey', phone:345562, address:"Indiranagar", age:27, projects:"Song, Prestige", salary:3700},
        {name:'Aashi', phone:6777739, address:"Majestic", age:25, projects:"Woods, Prestige", salary:2900}
    ]
    $scope.Managers=Managers;
    $scope.rowlimit=8;
    $scope.orderByMe=function(Managers) {
    $scope.myOrderBy =Managers;
    }
});

