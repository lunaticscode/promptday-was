// import z from 'zod';
type ValidatorRules = {
  optional?: boolean;
  custom?: () => boolean;
  minLength?: number;
  maxLength?: number;
};

export type BodyValidator = (
  bodyRule?: Record<string, ValidatorRules>
) => AppMiddleware;

export const ensuredRulesCheckValidation = (rules: ValidatorRules) => {};
