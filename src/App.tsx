import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Overview from './pages/Overview/Overview';
import GradeTable from './pages/ExamManagement/GradeTable/GradeTable';
import ExamList from './pages/ExamManagement/ExamList/ExamList';
import Help from './pages/Help/Help';
import Notifications from './pages/Notifications/Notifications';
import ExamSchedule from './pages/ExamSchedule/ExamSchedule';
import ScoreInput from './pages/ExamManagement/ScoreInput/ScoreInput';
import ClassList from './pages/ClassManage/ClassList/ClassList';
import AddClassSchedule from './pages/ClassManage/AddClassSchedule/AddClassSchedule';

import ClassMange from './pages/ClassManage/ClassManage/ClassManage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/class-list" element={<ClassList />} />
                <Route path="/add-class-schedule" element={<AddClassSchedule />} />
                <Route path="/exam-list" element={<ExamList />} />
                <Route path="/grade-table" element={<GradeTable />} />
                <Route path="/score-input" element={<ScoreInput />} />
                <Route path="/exam-schedule" element={<ExamSchedule />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/help" element={<Help />} />
                <Route path="/class-manage" element={<ClassMange />} />
            </Routes>
        </Router>
    );
}
