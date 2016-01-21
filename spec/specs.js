describe('pingPong', function(){
  it("will replace 3 with 'ping'", function(){
    expect(pingPong(3)).to.equal("ping");
  });

  it("will replace 5 with 'pong'", function(){
    expect(pingPong(5)).to.equal("pong");
  });

  it("will replace multiples of 3 x 5 with 'pingpong'", function(){
    expect(pingPong(15)).to.equal("pingpong");
  });

  // it("is going to count up to an entered number", function(){
  //   expect(pingPong(7)).to.equal(1, 2, 3, 4, 5, 6, 7);
  // });

});
