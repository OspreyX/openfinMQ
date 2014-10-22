angular.module('tmatrix')
.directive('spread',['ofMain',function(ofMain){
	return {
		templateUrl: 'views/spread.html',
		restrict: 'E',
		scope: {
			model: '='
		},
		replace: true,
		link: function(scope, element){

			var baseNode = element[0];

			var createTearoutWindowConfig = function(frame) {
				'use strict';

				return {
					'name': 'duplicate-demo' + Math.random(),
					'maxWidth': 132,
					'maxHeight': 123 + (frame ? 28 : 0),
					'defaultWidth': 132,
					'defaultHeight': 123 + (frame ? 28 : 0),
					'autoShow': false,
					'url': 'views/tearout.html',
					'frame': frame || false,
					'resizable': false,
					'maximizable': false
				};
			};

			ofMain.whenReady(function(){
				dragAndDrop.initDragAndDrop({
					element: baseNode,
					tearoutWindow: new fin.desktop.Window(createTearoutWindowConfig()),
					dropTarget: baseNode.parentNode,
					frame: false
				});
			});

			}//end link
		};//end return
	}]);//end directive 