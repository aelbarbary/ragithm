import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import CaseStudyDetail from './pages/CaseStudyDetail';
import BlogPost from './pages/BlogPost';
import { FactCheckHub } from './projects/fact-check-hub/FactCheckHub';
import { ChatWithPdf } from './projects/chat-with-pdf/ChatWithPdf';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/fact-check-hub" element={<FactCheckHub />} />
            <Route path="/projects/chat-with-pdf" element={<ChatWithPdf />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;