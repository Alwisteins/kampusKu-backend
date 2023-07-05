type NextFunction = (err?: any) => void;

const catchAsync = (fn: (...args: any[]) => Promise<any>) => function asyncUtilWrap(...args: any[]) {
  const fnReturn = fn(...args);
  const next = args[args.length - 1] as NextFunction;
  return Promise.resolve(fnReturn).catch(next);
};

export default catchAsync;
