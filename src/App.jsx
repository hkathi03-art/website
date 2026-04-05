import { useMemo, useState } from 'react'
import LandingPage from './components/LandingPage'
import CollegeList from './components/CollegeList'
import CourseList from './components/CourseList'
import CourseDetail from './components/CourseDetail'
import Breadcrumbs from './components/Breadcrumbs'
import { dashboardData } from './data/dashboardData'

function App() {
  // Beginner note:
  // This controls simple page flow: landing -> colleges -> courses -> detail.
  const [screen, setScreen] = useState('landing')
  const [selectedCollege, setSelectedCollege] = useState(null)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const steps = useMemo(() => {
    const labels = ['Landing', 'Colleges', 'Courses', 'Course Detail']
    const currentIndex = {
      landing: 0,
      colleges: 1,
      courses: 2,
      detail: 3,
    }[screen]

    return labels.map((label, index) => ({
      label,
      active: index <= currentIndex,
    }))
  }, [screen])

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

  const goToLanding = () => {
    setScreen('landing')
    setSelectedCollege(null)
    setSelectedCourse(null)
  }

  const goToColleges = () => {
    setScreen('colleges')
    setSelectedCollege(null)
    setSelectedCourse(null)
  }

  const goToCourses = () => {
    setScreen('courses')
    setSelectedCourse(null)
  }

  return (
    <main className="app-shell">
      <Breadcrumbs steps={steps} />

      {screen === 'landing' && (
        <LandingPage
          title={dashboardData.projectTitle}
          subtitle={dashboardData.subtitle}
          onOpenDashboard={openDashboard}
        />
      )}

      {screen === 'colleges' && (
        <CollegeList
          colleges={dashboardData.colleges}
          onSelectCollege={openCollege}
          onBack={goToLanding}
        />
      )}

      {screen === 'courses' && selectedCollege && (
        <CourseList college={selectedCollege} onSelectCourse={openCourse} onBack={goToColleges} />
      )}

      {screen === 'detail' && selectedCollege && selectedCourse && (
        <CourseDetail
          college={selectedCollege}
          course={selectedCourse}
          note={dashboardData.notes[0]}
          onBack={goToCourses}
        />
      )}
    </main>
  )
}

export default App
