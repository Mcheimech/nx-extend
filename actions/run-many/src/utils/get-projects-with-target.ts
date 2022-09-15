import type { ProjectConfiguration } from 'nx/src/config/workspace-json-project-json'

export function getProjectsWithTarget(projects: Map<string, ProjectConfiguration>, runProjects: string[], target: string): string[] {
  // Filter out all projects that are not allowed
  return Array.from(projects).filter(([_, config]) => {
    // Check if the project has the provided target
    return Object.keys(config?.targets ?? {}).includes(target)
  }).map(([target]) => target)
}
