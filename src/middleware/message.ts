
const messageMiddleware =
  (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {

      default:
        next(action);
    }
  };

export default messageMiddleware;