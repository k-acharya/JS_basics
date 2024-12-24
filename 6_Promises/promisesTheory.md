
    PROMISES:-->
    
    1.The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    
    2.A Promise is in one of these states:

      pending:    initial state, neither fulfilled nor rejected.
      fulfilled:  meaning that the operation was completed successfully.
      rejected:   meaning that the operation failed.

    3.The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error).
      When either of these options occur, the associated handlers queued up by a promise's then method are called. 
      If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, 
      so there is no race condition between an asynchronous operation completing and its handlers being attached.

    4.A promise is said to be settled if it is either fulfilled or rejected, but not pending.
