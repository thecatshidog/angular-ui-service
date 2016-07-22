angular.module('app')
	.service('modalService', ['$uibModal',function ($uibModal) {
		//config存储初始化数据
		//option放置指令配置
		this.open = function(option,config){
			if(option==undefined)
                option={};
            if(option.templateUrl==undefined)
                option.templateUrl='tpls/dialog.html';
            if(option.controller==undefined)
                option.controller='serviceModalCtrl';
            if(option.resolve==undefined)
                option.resolve={};
            option.resolve.config=function(){
                return config;
            };
            return $uibModal.open(option).result;
		}
	}])
	.controller('serviceModalCtrl', ['$scope','$uibModalInstance','config',function ($scope, $uibModalInstance,config) {

        $scope.config=config;
        $scope.submit = function (editText) {
            $scope.config.editText=editText;
            $uibModalInstance.close(editText);
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss('');
        };
    }]);