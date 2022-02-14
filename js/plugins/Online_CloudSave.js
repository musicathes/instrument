/*
Online Cloud save

Take data from one source and be able to load it on other devices

sign in > check the database > have data? > load from database else new game


*/

(function() {

    var CloudSave_StorageManager_save_alias = StorageManager.save;
    StorageManager.save = function(savefileId, json){
        var data = LZString.compressToBase64(json);
        $.post($gameNetwork._serverURL+'/cloudsave/savetocloud', data)
    }

})();

