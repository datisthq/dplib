import { getBasepath, saveDescriptor } from "../general/index.js"
import type { Resource } from "./Resource.js"
import { denormalizeResource } from "./process/denormalize.js"

const CURRENT_PROFILE = "https://datapackage.org/profiles/2.0/dataresource.json"

/**
 * Save a Resource to a file path
 * Works in Node.js environments
 */
export async function saveResourceDescriptor(
  resource: Resource,
  options: {
    path: string
  },
) {
  const basepath = getBasepath(options.path)

  const descriptor = denormalizeResource(resource, { basepath })
  descriptor.$schema = descriptor.$schema ?? CURRENT_PROFILE

  await saveDescriptor(descriptor, { path: options.path })
}
