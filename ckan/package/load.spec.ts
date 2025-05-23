import { useRecording } from "@dpkit/test"
import { describe, expect, it } from "vitest"
import { loadPackageFromCkan } from "./load.js"

describe("loadPackageFromCkan", () => {
  useRecording()

  it("should load a package", async () => {
    const datapackage = await loadPackageFromCkan({
      datasetUrl:
        "https://data.nhm.ac.uk/dataset/join-the-dots-collection-level-descriptions",
    })

    expect(datapackage).toMatchSnapshot()
  })
})
