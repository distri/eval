Eval
====

Allow for evaluation within the context of a SuperSystem component.

Provides `self.eval` which will evaluate JS code and return the result.

    module.exports = (I={}, self={}) ->
      self.eval = (code) ->
        eval code

      return self
