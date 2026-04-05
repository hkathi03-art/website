// Single editable data source for the whole app.
// Beginners: update this file to change title, colleges, courses, and students.

export const dashboardData = {
  projectTitle:
    'Predicting Student Academic Performance Using Publicly Available Educational Data',
  subtitle:
    'A simple advisor-focused dashboard that estimates final outcomes from coursework grades.',
  notes: [
    'Version 1 estimate based only on coursework grade.',
    'This demo is frontend-only and uses local mock data.',
  ],
  colleges: [
    {
      id: 'cs',
      name: 'Computer Science',
      courses: [
        {
          id: 'cs101',
          name: 'CS 101 - Intro to Programming',
          students: [
            { id: 's1', name: 'Lina Ahmed', courseworkGrade: 'A+' },
            { id: 's2', name: 'Omar Hassan', courseworkGrade: 'B' },
            { id: 's3', name: 'Noor Ali', courseworkGrade: 'C' },
            { id: 's4', name: 'Salem Nasser', courseworkGrade: 'D' },
          ],
        },
        {
          id: 'cs205',
          name: 'CS 205 - Data Structures',
          students: [
            { id: 's5', name: 'Maha Ibrahim', courseworkGrade: 'B' },
            { id: 's6', name: 'Yousef Khalid', courseworkGrade: 'A+' },
            { id: 's7', name: 'Reem Saad', courseworkGrade: 'C' },
            { id: 's8', name: 'Tariq Adel', courseworkGrade: 'D' },
          ],
        },
      ],
    },
    {
      id: 'eng',
      name: 'Engineering',
      courses: [
        {
          id: 'eng110',
          name: 'ENG 110 - Engineering Mathematics',
          students: [
            { id: 's9', name: 'Huda Sami', courseworkGrade: 'A+' },
            { id: 's10', name: 'Khaled Aziz', courseworkGrade: 'B' },
            { id: 's11', name: 'Farah Jamal', courseworkGrade: 'C' },
            { id: 's12', name: 'Nawaf Eid', courseworkGrade: 'D' },
          ],
        },
        {
          id: 'eng240',
          name: 'ENG 240 - Circuit Fundamentals',
          students: [
            { id: 's13', name: 'Rana Yasser', courseworkGrade: 'B' },
            { id: 's14', name: 'Ibrahim Saleh', courseworkGrade: 'A+' },
            { id: 's15', name: 'Dania Fares', courseworkGrade: 'C' },
            { id: 's16', name: 'Saud Fahad', courseworkGrade: 'D' },
          ],
        },
      ],
    },
    {
      id: 'bus',
      name: 'Business Administration',
      courses: [
        {
          id: 'bus101',
          name: 'BUS 101 - Principles of Management',
          students: [
            { id: 's17', name: 'Nora Rashid', courseworkGrade: 'A+' },
            { id: 's18', name: 'Faisal Hamid', courseworkGrade: 'B' },
            { id: 's19', name: 'Layan Sami', courseworkGrade: 'C' },
            { id: 's20', name: 'Majed Anwar', courseworkGrade: 'D' },
          ],
        },
        {
          id: 'bus220',
          name: 'BUS 220 - Business Statistics',
          students: [
            { id: 's21', name: 'Hassan Omar', courseworkGrade: 'B' },
            { id: 's22', name: 'Abeer Musa', courseworkGrade: 'A+' },
            { id: 's23', name: 'Raghad Tariq', courseworkGrade: 'C' },
            { id: 's24', name: 'Abdullah Noor', courseworkGrade: 'D' },
          ],
        },
      ],
    },
  ],
}
