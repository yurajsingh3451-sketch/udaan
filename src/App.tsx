import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CounsellingModal, ScholarshipModal } from './components/Modals';
import WhatsAppWidget from './components/WhatsAppWidget';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import BatchesPage from './pages/BatchesPage';
import TestSeriesPage from './pages/TestSeriesPage';
import ResultsPage from './pages/ResultsPage';
import FacultyPage from './pages/FacultyPage';
import CurrentAffairsPage from './pages/CurrentAffairsPage';
import StudyMaterialPage from './pages/StudyMaterialPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import RegistrationEnginePage from './pages/RegistrationEnginePage';
import StudentPortalPage from './pages/StudentPortalPage';
import AdminPortalPage from './pages/AdminPortalPage';

export default function App() {
  // Navigation State
  const [activePage, setActivePage] = useState('home');
  const [selectedCourseId, setSelectedCourseId] = useState('gs-foundation-2026');

  // Modal States
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [scholarshipModalOpen, setScholarshipModalOpen] = useState(false);

  // Render current active page view
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage 
            setActivePage={setActivePage} 
            setSelectedCourseId={setSelectedCourseId}
            openCounsellingModal={() => setCounsellingModalOpen(true)}
            openScholarshipModal={() => setScholarshipModalOpen(true)}
          />
        );
      case 'courses':
        return (
          <CoursesPage 
            setActivePage={setActivePage}
            setSelectedCourseId={setSelectedCourseId}
            openCounsellingModal={() => setCounsellingModalOpen(true)}
          />
        );
      case 'course-details':
        return (
          <CourseDetailsPage 
            courseId={selectedCourseId}
            setActivePage={setActivePage}
            openCounsellingModal={() => setCounsellingModalOpen(true)}
          />
        );
      case 'batches':
        return (
          <BatchesPage 
            setActivePage={setActivePage}
            setSelectedCourseId={setSelectedCourseId}
            openCounsellingModal={() => setCounsellingModalOpen(true)}
          />
        );
      case 'test-series':
        return (
          <TestSeriesPage 
            setActivePage={setActivePage}
            openCounsellingModal={() => setCounsellingModalOpen(true)}
          />
        );
      case 'results':
        return (
          <ResultsPage 
            setActivePage={setActivePage}
            openCounsellingModal={() => setCounsellingModalOpen(true)}
          />
        );
      case 'faculty':
        return (
          <FacultyPage 
            setActivePage={setActivePage}
            openCounsellingModal={() => setCounsellingModalOpen(true)}
          />
        );
      case 'current-affairs':
        return (
          <CurrentAffairsPage 
            setActivePage={setActivePage}
          />
        );
      case 'study-material':
        return (
          <StudyMaterialPage />
        );
      case 'about':
        return (
          <AboutPage 
            setActivePage={setActivePage}
            openCounsellingModal={() => setCounsellingModalOpen(true)}
          />
        );
      case 'events':
        return (
          <EventsPage 
            openCounsellingModal={() => setCounsellingModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage />
        );
      case 'registration':
        return (
          <RegistrationEnginePage 
            setActivePage={setActivePage}
          />
        );
      case 'student-portal':
        return (
          <StudentPortalPage 
            setActivePage={setActivePage}
          />
        );
      case 'admin-portal':
        return (
          <AdminPortalPage 
            setActivePage={setActivePage}
          />
        );
      default:
        return (
          <HomePage 
            setActivePage={setActivePage} 
            setSelectedCourseId={setSelectedCourseId}
            openCounsellingModal={() => setCounsellingModalOpen(true)}
            openScholarshipModal={() => setScholarshipModalOpen(true)}
          />
        );
    }
  };

  const isPortalView = ['student-portal', 'admin-portal'].includes(activePage);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-navy-900 selection:bg-navy-900 selection:text-white">
      {/* Public Navbar (Hidden when viewing standalone student or admin portals) */}
      {!isPortalView && (
        <Navbar 
          activePage={activePage} 
          setActivePage={setActivePage}
          openCounsellingModal={() => setCounsellingModalOpen(true)}
          openScholarshipModal={() => setScholarshipModalOpen(true)}
        />
      )}

      {/* Main Page Content Body */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Public Footer */}
      {!isPortalView && (
        <Footer 
          setActivePage={setActivePage}
          openCounsellingModal={() => setCounsellingModalOpen(true)}
          openScholarshipModal={() => setScholarshipModalOpen(true)}
        />
      )}

      {/* Global Interactive Modals */}
      <CounsellingModal 
        isOpen={counsellingModalOpen} 
        onClose={() => setCounsellingModalOpen(false)} 
      />

      <ScholarshipModal 
        isOpen={scholarshipModalOpen} 
        onClose={() => setScholarshipModalOpen(false)} 
      />

      {/* Floating 1-to-1 WhatsApp Mentorship Automation Widget (6264749993) */}
      <WhatsAppWidget />
    </div>
  );
}
