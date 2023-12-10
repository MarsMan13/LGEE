var globalInfos = (function(){

    var instance;

    function init(){
        return {
            publicMethod: function(){
                return {
                    userId: 1,
                    userName:'CGCG',
                };
            },
        }
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})();