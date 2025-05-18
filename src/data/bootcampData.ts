import { Stage } from '../types';

export const stages: Stage[] = [
  {
    id: '1',
    title: 'Stage 1: Aptitude Foundation',
    shortDescription: 'Build a strong foundation in aptitude concepts and problem-solving techniques',
    description: 'The first three weeks focus on establishing a strong foundation in aptitude skills - covering quantitative, logical reasoning, and verbal ability. Through daily practice sessions and weekend tests, you\'ll develop the speed and accuracy needed to excel in placement aptitude rounds.',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailImage: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    schedule: 'Monday to Saturday: 2 hours daily',
    duration: '3 weeks',
    focusArea: 'Aptitude Skills Development',
    curriculum: [
      {
        title: 'Quantitative Aptitude',
        topics: [
          'Number systems and arithmetic operations',
          'Percentages, profit & loss, and interest calculations',
          'Time, speed & distance problems',
          'Permutation, combination, and probability',
          'Data interpretation and analysis'
        ]
      },
      {
        title: 'Logical Reasoning',
        topics: [
          'Verbal and non-verbal reasoning',
          'Logical sequences and pattern recognition',
          'Coding and decoding problems',
          'Direction sense and blood relation puzzles',
          'Syllogisms and logical deductions'
        ]
      },
      {
        title: 'Verbal Ability',
        topics: [
          'Reading comprehension techniques',
          'Grammar and error identification',
          'Vocabulary building and synonyms/antonyms',
          'Para-jumbles and sentence completion',
          'Critical reasoning arguments'
        ]
      }
    ],
    benefits: 'The aptitude foundation phase builds your problem-solving speed and accuracy, which is essential for clearing the initial screening rounds of campus placement tests. Companies use aptitude tests to filter candidates, and a strong performance here opens the door to technical rounds.',
    outcomes: [
      'Improved calculation speed and mental math abilities',
      'Enhanced pattern recognition and logical thinking',
      'Better comprehension and language skills',
      'Confidence in tackling various aptitude question formats',
      'Ability to manage time effectively during timed tests'
    ]
  },
  {
    id: '2',
    title: 'Stage 2: Technical Skills Development',
    shortDescription: 'Master data structures, algorithms, and coding patterns for technical interviews',
    description: 'Stage 2 dive deep into technical skills, with a focus on data structures and algorithms. You\'ll solve over 100 coding problems, work on company-specific question patterns, and participate in weekly coding tests that simulate real interview conditions.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailImage: 'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    schedule: 'Monday to Saturday: 2 hours daily, Sunday: Test',
    duration: '3 weeks',
    focusArea: 'DSA & Problem Solving',
    curriculum: [
      {
        title: 'Data Structures',
        topics: [
          'Arrays, linked lists, and dynamic arrays',
          'Stacks, queues, and their applications',
          'Trees, binary trees, and BST operations',
          'Graphs, BFS, and DFS algorithms',
          'Heaps and priority queues'
        ]
      },
      {
        title: 'Algorithms',
        topics: [
          'Searching and sorting techniques',
          'Dynamic programming approach',
          'Greedy algorithm strategies',
          'Recursion and backtracking',
          'Time and space complexity analysis'
        ]
      },
      {
        title: 'Coding Practice',
        topics: [
          'LeetCode problem solving strategies',
          'Company-specific coding patterns',
          'Optimization techniques for efficient solutions',
          'Mock coding interviews with time constraints',
          'Code review and improvement sessions'
        ]
      }
    ],
    benefits: 'Technical skill development is the core of any IT placement process. This phase prepares you to tackle coding interviews with confidence, teaching you not just how to solve problems but how to communicate your approach effectively to interviewers.',
    outcomes: [
      'Ability to implement common data structures from scratch',
      'Proficiency in choosing appropriate algorithms for different problems',
      'Improved code quality and optimization skills',
      'Confidence in explaining solutions and approaches',
      'Familiarity with coding interview patterns used by top companies'
    ]
  },
  {
    id: '3',
    title: 'Stage 3: Intensive Placement Preparation',
    shortDescription: 'Full mock placement rounds simulating actual campus recruitment tests',
    description: 'The final week provides intensive, comprehensive placement preparation through full mock tests that combine aptitude, technical skills, and coding challenges. Each day includes 90-minute aptitude and technical assessments, followed by coding problem-solving sessions, mimicking the exact format of campus placement tests.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    schedule: 'Daily: Full mock tests',
    duration: '1 week',
    focusArea: 'Full Placement Simulation',
    curriculum: [
      {
        title: 'Combined Aptitude & Technical Tests',
        topics: [
          '90-minute daily tests with mixed question types',
          'Realistic time constraints and scoring system',
          'Diverse question formats from various companies',
          'Performance analysis and improvement strategies',
          'Test-taking strategies and time management'
        ]
      },
      {
        title: 'Coding Challenges',
        topics: [
          '45-minute coding sessions with 2 questions daily',
          'Different difficulty levels matching company standards',
          'Solution optimization requirements',
          'Edge case handling practice',
          'Code review and feedback sessions'
        ]
      },
      {
        title: 'Mock Interviews',
        topics: [
          'Technical interview simulations',
          'Whiteboard coding exercises',
          'System design discussions',
          'Behavioral interview practice',
          'Group discussion sessions'
        ]
      }
    ],
    benefits: 'The intensive preparation week puts everything you\'ve learned into practice, acclimating you to the pressure and format of actual placement tests. By experiencing full simulations, you\'ll identify any remaining weak areas and address them before the real placement season begins.',
    outcomes: [
      'Familiarity with the end-to-end placement process',
      'Improved performance under time pressure',
      'Enhanced ability to switch between different question types',
      'Refined test-taking strategies and approaches',
      'Confidence to face actual campus recruitment tests'
    ]
  }
];