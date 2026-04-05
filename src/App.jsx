import { useMemo, useState } from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import CollegeList from './components/CollegeList'
import CourseList from './components/CourseList'
import CourseDetail from './components/CourseDetail'
import Breadcrumbs from './components/Breadcrumbs'
import StatCards from './components/StatCards'
import { dashboardData } from './data/dashboardData'

function App() {
  const [screen, setScreen] = useState('landing')
  const [selectedCollege, setSelectedCollege] = useState(null)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const totalCourses = dashboardData.colleges.reduce((acc, college) => acc + college.courses.length, 0)
  const totalStudents = dashboardData.colleges.reduce(
    (acc, college) =>
      acc + college.courses.reduce((courseAcc, course) => courseAcc + course.students.length, 0),
    0,
  )

  const stats = [
    { label: 'Colleges', value: dashboardData.colleges.length },
    { label: 'Courses', value: totalCourses },
    { label: 'Students', value: totalStudents, helper: 'Local mock data for frontend demo' },
  ]

  const steps = useMemo(() => {
    const list = [
      { label: 'Landing', target: 'landing' },
      { label: 'Colleges', target: 'colleges' },
      { label: 'Courses', target: selectedCollege ? 'courses' : null },
      { label: 'Course Detail', target: selectedCourse ? 'detail' : null },
    ]

    const currentByScreen = {
      landing: 'Landing',
      colleges: 'Colleges',
      courses: 'Courses',
      detail: 'Course Detail',
    }

    return list.map((step) => ({ ...step, current: step.label === currentByScreen[screen] }))
  }, [screen, selectedCollege, selectedCourse])

  const openDashboard = () => setScreen('colleges')

  const openCollege = (college) => {
    setSelectedCollege(college)
    setSelectedCourse(null)
    setScreen('courses')
  }

  const openCourse = (course) => {
    setSelectedCourse(course)
    setScreen('detail')
  }

  const navigateTo = (target) => {
    if (!target) return

    if (target === 'landing') {
      setScreen('landing')
      setSelectedCollege(null)
      setSelectedCourse(null)
      return
    }

    if (target === 'colleges') {
      setScreen('colleges')
      setSelectedCollege(null)
      setSelectedCourse(null)
      return
    }

    if (target === 'courses' && selectedCollege) {
      setScreen('courses')
      setSelectedCourse(null)
      return
    }

    if (target === 'detail' && selectedCourse) {
      setScreen('detail')
    }
  }

  return (
    <main className="app-shell">
      <Header title={dashboardData.projectTitle} subtitle={dashboardData.subtitle} />
      <StatCards items={stats} />
      <Breadcrumbs steps={steps} onNavigate={navigateTo} />

      {screen === 'landing' && <LandingPage title="Project Overview" subtitle={dashboardData.notes[1]} onOpenDashboard={openDashboard} />}

      {screen === 'colleges' && <CollegeList colleges={dashboardData.colleges} onSelectCollege={openCollege} />}

      {screen === 'courses' && selectedCollege && (
        <CourseList college={selectedCollege} onSelectCourse={openCourse} />
      )}

      {screen === 'detail' && selectedCollege && selectedCourse && (
        <CourseDetail college={selectedCollege} course={selectedCourse} note={dashboardData.notes[0]} />
      )}
    </main>
  )
}

export default App
