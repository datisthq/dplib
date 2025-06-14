import type { BaseConstraints, BaseField } from "./Base.js"

/**
 * List field type (primitive values ordered collection)
 */
export interface ListField extends BaseField<ListConstraints> {
  /**
   * Field type - discriminator property
   */
  type: "list"

  /**
   * Character used to separate values in the list
   */
  delimiter?: string

  /**
   * Type of items in the list
   */
  itemType?:
    | "string"
    | "integer"
    | "number"
    | "boolean"
    | "datetime"
    | "date"
    | "time"
}

/**
 * List-specific constraints
 */
export interface ListConstraints extends BaseConstraints {
  /**
   * Minimum number of list items
   */
  minLength?: number

  /**
   * Maximum number of list items
   */
  maxLength?: number

  /**
   * Restrict values to a specified set of lists
   * Either as delimited strings or arrays
   */
  enum?: string[] | any[][]
}
