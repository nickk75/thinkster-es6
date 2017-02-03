function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article', {
    url: '/article/:slug',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'article/article.html',
    title: 'Article',
    resolve :{
        // We are passing the Article service
        // State, to redirect if we don't find the article we search for
        // state params to get the slug
        article: function(Articles, $state, $stateParams) {
            return Articles.get($stateParams.slug).then(
                (article) => article,
                (err) => $state.go('app.home')
                )
            }
        }
    });
};

export default ArticleConfig;
