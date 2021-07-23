describe('The greet function' , function(){

    it('should return "Hello, Thabile" when i greet Thabile' , function(){

        assert.equal('Hello, Thabile', greet(', Thabile'));        
    });
    it('should return "Hello, Ntando" when i greet Ntando' , function(){

        assert.equal('Hello, Ntando', greet(', Ntando'));        
    });
    it('should return "Hello, " when no name is entered' , function(){

        assert.equal('Hello', greet());        
    });

});

