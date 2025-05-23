/**
 * GitHub repository file content
 */
export interface GithubResource {
  /**
   * File name
   */
  name: string

  /**
   * File path within repository
   */
  path: string

  /**
   * File type
   */
  type: string

  /**
   * File size in bytes
   */
  size: number

  /**
   * File SHA
   */
  sha: string

  /**
   * File URL for viewing in browser
   */
  html_url: string

  /**
   * File download URL
   */
  download_url: string

  /**
   * File Git URL
   */
  git_url: string

  /**
   * File content (base64 encoded)
   */
  content?: string

  /**
   * File encoding
   */
  encoding?: string
}
