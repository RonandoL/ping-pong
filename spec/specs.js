describe('pingPong', function(){
  it("will handle a non number with a message'", function(){
    expect(pingPong("f", "")).to.equal("error message");
  });

  it("will replace 3 with 'ping' and 5 with 'pong'.", function(){
    expect(pingPong(3, 5)).to.equal("ping", "pong");
  });

  // it("will replace multiples of 3 x 5 with 'pingpong'", function(){
  //   expect(pingPong(15)).to.equal("pingpong");
  // });

  // it("is going to count up to an entered number", function(){
  //   expect(pingPong(7)).to.equal(1, 2, 3, 4, 5, 6, 7);
  // });

});
