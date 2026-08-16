export interface Project {
  slug: string;
  title: string;
  company: string;
  shortDescription: string;
  impactStatement: string;
  situation: string;
  task: string;
  action: string[];
  result: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: 'enterprise-cucumber-framework',
    title: 'Enterprise Cucumber Framework Optimization',
    company: 'Verizon',
    shortDescription: 'Reduced regression cycle time by 35% using a scalable BDD framework.',
    impactStatement: 'Accelerated time-to-market by automating 80% of critical web and API paths.',
    situation: 'The existing regression cycle was a bottleneck in the release pipeline, requiring significant manual intervention and suffering from long execution windows that delayed feedback to developers.',
    task: 'Design and maintain a scalable, BDD-driven automation framework to reduce the regression cycle time and increase the percentage of automated coverage across a multi-platform environment.',
    action: [
      'Architected a Cucumber-based BDD framework using Java and Selenium, focusing on reusable step definitions and a modular Page Object Model.',
      'Implemented a unified automation strategy covering Web, API (Rest-Assured), and Mobile (Appium), ensuring a single source of truth for test scripts.',
      'Seamlessly integrated the suite into a Jenkins CI/CD pipeline, enabling automated triggers on every build and providing instant failure reports.'
    ],
    result: [
      'Reduced regression cycle time by 35%, significantly accelerating the time-to-market.',
      'Achieved 80% automation coverage across critical web and API paths.',
      'Improved build validation efficiency, reducing the escape rate of critical defects into later environments.'
    ],
    techStack: ['Java', 'Selenium', 'Cucumber', 'Rest-Assured', 'Appium', 'Jenkins']
  },
  {
    slug: 'api-first-automation-shift',
    title: 'API-First Automation Shift',
    company: 'Innominds',
    shortDescription: 'Increased API coverage by 50% to reduce UI fragility and speed up feedback.',
    impactStatement: 'Shifted testing left to detect bugs earlier in the cycle and stabilize the regression suite.',
    situation: 'Testing was heavily reliant on the UI layer, leading to slow execution and "brittle" tests that failed due to minor UI changes rather than actual logic bugs.',
    task: 'Shift the testing strategy "left" by increasing API-level coverage, reducing the reliance on the UI, and automating the regression trigger via GitHub Actions.',
    action: [
      'Developed a robust API automation suite using Rest-Assured, implementing data-driven tests to validate complex business logic without the UI overhead.',
      'Optimized the web/mobile framework (Selenium/Appium) to handle dynamic elements and asynchronous calls more effectively.',
      'Configured GitHub Actions workflows to execute automated regression runs on every pull request, ensuring stability before merging.'
    ],
    result: [
      'Increased API automation coverage by 50%, resulting in faster bug detection and more stable test results.',
      'Reduced the overall test execution time by offloading validation from the UI to the API layer.',
      'Established a culture of continuous testing through GitHub Actions integration.'
    ],
    techStack: ['Java', 'Rest-Assured', 'GitHub Actions', 'Selenium', 'Appium']
  },
  {
    slug: 'high-concurrency-grid-implementation',
    title: 'High-Concurrency Grid Implementation',
    company: 'ATMECS',
    shortDescription: 'Improved execution speed by 25% using Selenium Grid for parallel runs.',
    impactStatement: 'Reduced manual testing effort by 40% through a hybrid framework and nightly automation.',
    situation: 'The automation suite had grown to a size where sequential execution was no longer viable, leading to "nightly" runs that often bled into the next business day.',
    task: 'Increase test execution speed and reduce the manual testing burden by implementing parallelization and a hybrid framework architecture.',
    action: [
      'Designed a Hybrid Automation Framework combining Data-Driven and Keyword-Driven approaches using TestNG and Maven for maximum flexibility.',
      'Deployed and configured Selenium Grid, enabling parallel execution across multiple browser and OS combinations.',
      'Built Jenkins pipelines for scheduled nightly regression, with automated email reporting for stakeholder visibility.'
    ],
    result: [
      'Improved test execution speed by 25% through strategic parallelization.',
      'Reduced manual testing effort by 40%, allowing the QA team to focus on exploratory testing and high-risk edge cases.',
      'Provided 100% visibility into nightly build health via automated reporting.'
    ],
    techStack: ['Java', 'TestNG', 'Maven', 'Selenium Grid', 'Jenkins']
  }
];
