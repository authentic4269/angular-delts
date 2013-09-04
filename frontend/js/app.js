angular.module(
		'delts',
		[ 'ui.state', 'delts.filters', 'delts.services',
				'delts.directives', 'delts.controllers', 'delts.constants'
				]).config(
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
			$stateProvider
			// .state('root', {url: '/', controller:'MainCtrl', templateUrl:
			// 'views/main.html', data: {isFree: true}})
			.state('home', {
				url : '/',
				controller : 'HomeCtrl',
				templateUrl : 'views/home.html',
				data : {
					isFree : true
				}
			}).state('brothers', {
				url : '/brothers',
				controller : 'BrothersCtrl',
				templateUrl : 'views/brothers.html',
				data : {
					isFree : true
				}
			}).state('cordelts', {
				url : '/cordelts',
				controller : 'CordeltCtrl',
				templateUrl : 'views/cordelts.html',
				data : {
					isFree : true
				}
			}).state('alumni', {
				url : '/alumni',
				controller : 'AlumniCtrl',
				templateUrl : 'views/alumni.html',
				data : {
					isFree : true
				}
			}).state('recruitment', {
				url : '/recruitment',
				controller : 'RecruitmentCtrl',
				templateUrl : 'views/recruitment.html',
				data : {
					isFree : true
				}
			}).state('chapter', {
				url : '/chapter',
				controller : 'ChapterCtrl',
				templateUrl : 'views/chapter.html',
				data : {
					isFree : true
				}
			}).state('gallery', {
				url : '/gallery',
				controller : 'GalleryCtrl',
				templateUrl : 'views/chapter.html',
				data : {
					isFree : true
				}
			})
		});

angular.module('delts.controllers', []);
angular.module('delts.filters', []);
angular.module('delts.services', []);
angular.module('delts.directives', []);
angular.module('delts.constants', []);
/*
$(document).ready(
		function() {
			var $element = $('.application-loading');
			$element.show();
			ScriptLoader.load([ 
					'js/controllers/brothers.js', 
					'js/controllers/cordelt.js',
					'js/controllers/alumni.js',
					'js/controllers/recruit.js',
					'js/controllers/home.js',
					'js/controllers/main.js',
					'js/controllers/chapter.js',
					'js/controllers/gallery.js', 
					]);
		}); */
