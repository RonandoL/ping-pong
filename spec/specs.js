describe('errorEntry', function(){
  it("will result in error message with text input", function(){
    expect(errorEntry("f")).to.eql(["error message"]);
  });

  it("will result in error message with empty input", function(){
    expect(errorEntry("")).to.eql(["error message"]);
  });
});

describe('pingPong', function(){
  it("will replace multiples of 3 with ping", function(){
    expect(pingPong(6)).to.eql([1, 2, "ping", 4, "pong", "ping"]);
  });

  it("will replace multiples of 5 with 'pong'", function(){
    expect(pingPong(10)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong"]);
  });

  it("will replace 3 with ping and 5 with pong.", function(){
    expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]);
  });
});

describe('negativeNumber', function() {
  it("will replace negative multiples of 3 and 5 with ping and pong", function() {
    expect(negativeNumber(-15)).to.eql([-1, -2, "ping", -4, "pong", "ping", -7, -8, "ping", "pong", -11, "ping", -13, -14, "pingpong"]);
  });

});
