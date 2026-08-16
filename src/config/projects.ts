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
    slug: 'ai-assisted-quality-engineering',
    title: 'AI-Powered Test Acceleration Platform',
    company: 'Verizon',
    shortDescription: 'Leveraging LLMs (Gemini/Claude) to automate test design and reporting.',
    impactStatement: 'Reduced the test design lifecycle and reporting overhead by integrating Generative AI into the QE workflow.',
    situation: 'Test case creation and daily status reporting were manual, time-consuming processes that delayed the start of execution and created reporting bottlenecks.',
    task: 'Integrate AI accelerators to automate the generation of test cases, Playwright POMs, and automated stakeholder reporting.',
    action: [
      'Engineered a prompt-based workflow using Gemini to generate comprehensive test cases and Playwright Page Object Models (POM) from requirement docs.',
      'Developed AI-driven Knowledge Base generators using Claude Code and GitHub Copilot to streamline onboarding and technical documentation.',
      'Automated Daily Status Report (DSR) emails and Jira Dashboard updates via AI scripts, reducing reporting effort from hours to minutes.',
      'Implemented advanced JMeter Regex/JSON extraction and Postman post-scripts to handle complex dynamic data validation.'
    ],
    result: [
      'Significantly reduced the manual effort in test case authoring.',
      'Accelerated the transition from requirements to executable scripts.',
      'Eliminated manual reporting overhead for leadership through automated AI-driven DSRs.'
    ],
    techStack: ['Gemini', 'Claude Code', 'GitHub Copilot', 'Playwright', 'JMeter', 'Postman']
  },
  {
    slug: 'framework-modernization-infrastructure',
    title: 'Enterprise Automation Modernization',
    company: 'Verizon',
    shortDescription: 'Leading the migration of legacy frameworks to modern, high-speed stacks.',
    impactStatement: 'Eliminated technical debt and reduced flakiness by migrating to Playwright and Selenoid.',
    situation: 'Legacy Selenium 3 frameworks were suffering from high flakiness, slow execution, and outdated infrastructure (Selenium Grid) that couldn\'t scale with parallel demands.',
    task: 'Strategize and execute a zero-downtime migration of the automation ecosystem to modern standards.',
    action: [
      'Orchestrated the migration from Selenium 3 $\rightarrow$ 4 and a strategic shift from Selenium to Playwright for improved stability and speed.',
      'Migrated test management and API validation from qMetry to a lean, high-performance Rest-Assured architecture.',
      'Replaced legacy Selenium Grid with Selenoid to enable better containerized browser management and parallelization.',
      'Built a custom Test Data Management (TDM) tool using Spring Boot to provide on-demand, consistent test data.'
    ],
    result: [
      'Reduced test flakiness by approximately 40% through the shift to Playwright.',
      'Achieved massive scalability in execution via Selenoid containerization.',
      'Removed data-dependency bottlenecks for multiple scrum teams via the Spring Boot TDM tool.'
    ],
    techStack: ['Playwright', 'Selenium 4', 'Selenoid', 'Rest-Assured', 'Spring Boot', 'Java']
  },
  {
    slug: 'qe-utility-ecosystem',
    title: 'Internal QE Utility Toolset',
    company: 'Verizon',
    shortDescription: 'Developing custom engineering tools to solve complex validation challenges.',
    impactStatement: 'Created a suite of internal tools that automated high-complexity validations, reducing manual QA effort.',
    situation: 'Standard tools were insufficient for complex business logic like Feature Flag comparisons and multi-step Post-Order validations.',
    task: 'Develop a set of lightweight, high-impact utility tools to automate specialized validation patterns.',
    action: [
      'Developed a Feature Flag Comparator to validate configuration consistency across environments.',
      'Built a Post-Order Validation tool to ensure end-to-end data integrity across order management systems.',
      'Implemented an End-to-End Validation utility to automate the verification of complex transaction flows.',
      'Created a JSON/XML comparison engine to validate API responses against complex schemas.'
    ],
    result: [
      'Reduced the time required for feature flag audits from hours to seconds.',
      'Eliminated manual data verification errors in the order management lifecycle.',
      'Provided the broader QE team with reusable utilities that increased overall sprint velocity.'
    ],
    techStack: ['Java', 'Spring Boot', 'JSON/XML Schema', 'JUnit']
  }
];
