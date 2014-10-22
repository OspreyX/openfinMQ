angular.module('tmatrix')
	.provider('ofMain', function ofMainProvider(){
		var isReady = false,
				pendingCallbacks = [];

		fin.desktop.main(function() {
			isReady = true;

			pendingCallbacks.forEach(function(callback){
				callback();
			});
		});

		return {
			$get: function(){
				return {
					whenReady: function(callback){
						if (isReady) {
							callback();
						}
						else {
							pendingCallbacks.push(callback);
						}
					}
				};
			}//end $get
		};
	});