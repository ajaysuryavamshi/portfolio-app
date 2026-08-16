import { describe, it, expect } from 'vitest';
import { projects } from '../config/projects';

describe('Project Configuration', () => {
  it('should have a non-empty list of projects', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('should have unique slugs for every project', () => {
    const slugs = projects.map(p => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('should contain required STAR fields for each project', () => {
    projects.forEach(project => {
      expect(project.situation).toBeDefined();
      expect(project.task).toBeDefined();
      expect(project.action).toBeInstanceOf(Array);
      expect(project.result).toBeInstanceOf(Array);
      expect(project.action.length).toBeGreaterThan(0);
      expect(project.result.length).toBeGreaterThan(0);
    });
  });

  it('should have a valid impact statement for every project', () => {
    projects.forEach(project => {
      expect(project.impactStatement.length).toBeGreaterThan(10);
    });
  });
});
