type ErrorCodes =
  | "UNKNOWN_ERROR"
  | "FAIL_TO_CONNECT_DB"
  | "BAD_REQUEST"
  | "RUNPOD_ERROR"
  | "INVALID_USER_AGENT";

const ERROR_CODES: Record<ErrorCodes, { statusCode: number }> = {
  UNKNOWN_ERROR: {
    statusCode: 500,
  },
  FAIL_TO_CONNECT_DB: {
    statusCode: 500,
  },
  BAD_REQUEST: {
    statusCode: 401,
  },
  RUNPOD_ERROR: {
    statusCode: 500,
  },
  INVALID_USER_AGENT: {
    statusCode: 403,
  },
};

const getErrorOriginFromStack = (stack: string | undefined) => {
  if (!stack) return null;
  const stackLines = stack.split("\n");
  const origin = stackLines[2]?.trim() ?? "unknown";
  return origin;
};

export class AppError extends Error {
  message: string;
  statusCode: number;
  from?: string;
  timestamp: number;
  constructor(message: string, errorCode: ErrorCodes, from?: string) {
    super();
    this.message = message;
    const statusCode = ERROR_CODES[errorCode]["statusCode"];
    this.statusCode = statusCode;
    this.from = from ?? getErrorOriginFromStack(this.stack) ?? "unknown";
    const timestamp = new Date().getTime();
    this.timestamp = timestamp;
    const errorMessage = `❌ Error\n[Time]: ${timestamp}\n[From]: ${this.from}\n[Status]: ${statusCode}\n[Message]: ${message}`;
    console.error(errorMessage); // 추후 file-system으로 핸들링
  }
  // 외부로 내보낼 error 정보만,
  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      timestamp: this.timestamp,
    };
  }
}
