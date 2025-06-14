import { DataFrame } from "nodejs-polars"
import { describe, expect, it } from "vitest"
import { processTable } from "../../table/index.js"

describe("parseYearmonthField", () => {
  it.each([
    ["2000-01", [2000, 1]],
    ["0-0", [0, 0]],
  ])("%s -> %s", async (cell, value) => {
    const table = DataFrame({ name: [cell] }).lazy()
    const schema = {
      fields: [{ name: "name", type: "yearmonth" as const }],
    }

    const ldf = await processTable(table, { schema })
    const df = await ldf.collect()

    expect(df.toRecords()[0]?.name).toEqual(value)
  })
})
