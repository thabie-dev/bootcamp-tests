describe('isFromBellville' , function(){
    it('regNo.startsWith, " CY' , function(){

        assert.equal(isFromBellville('CY 123'), true);       
    });

});