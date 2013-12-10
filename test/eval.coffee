Eval = require "../main"

describe "eval", ->
  it "should evaluate code within the context of the component", ->
    e = Eval()
    
    I = e.eval "I"
    e.eval "I.a = 0"
    
    assert.equal I.a, 0
