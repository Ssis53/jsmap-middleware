/*
 * @Author: xiangfu.wu
 * @Date: 2023-03-20 11:00:51
 * @Description: 🚀
 * @FilePath: /jsmap-middleware/src/lib/utils/GlobalExceptionHandler.ts
 */
export class GlobalExceptionHandler {
  static handleException(error: Error) {
    // 处理异常的代码
    console.error(' error occurred:', error.message);
  }

  static tryCatch(operation: Function) {
    try {
      operation();
    } catch (e: any) {
      GlobalExceptionHandler.handleException(e);
    }
  }
}