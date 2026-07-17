/**
 * Diploma in CST - 7th Semester Management System
 * Complete management system with all features
 */

// Global variable for the manager instance
let manager;

class SemesterManager {
    constructor() {
        // ===== STUDENTS DATA =====
        this.students = [
            { id: 1, name: 'Rajon', roll: 'CST-701', email: 'rajon@example.com', phone: '017XXXXXXXX' },
            { id: 2, name: 'Dhrubo', roll: 'CST-702', email: 'dhrubo@example.com', phone: '018XXXXXXXX' },
            { id: 3, name: 'Nihjum', roll: 'CST-703', email: 'nihjum@example.com', phone: '019XXXXXXXX' },
            { id: 4, name: 'Maria', roll: 'CST-704', email: 'maria@example.com', phone: '016XXXXXXXX' }
        ];

        // ===== SUBJECTS DATA =====
        this.subjects = [
            { id: 1, code: '25853', name: 'Innovation & Entrepreneurship', periods: 6, credits: 3, marks: 150, category: 'Theory' },
            { id: 2, code: '28571', name: 'Digital Marketing Technique', periods: 5, credits: 3, marks: 150, category: 'Theory' },
            { id: 3, code: '28572', name: 'Network Administration & Services', periods: 6, credits: 3, marks: 150, category: 'Theory' },
            { id: 4, code: '28573', name: 'Cyber Security & Ethics', periods: 5, credits: 3, marks: 150, category: 'Theory' },
            { id: 5, code: '28574', name: 'Apps Development Project', periods: 4, credits: 2, marks: 100, category: 'Practical' },
            { id: 6, code: '28575', name: 'Multimedia & Animation', periods: 4, credits: 3, marks: 150, category: 'Practical' },
            { id: 7, code: '28576', name: 'Project Work-II', periods: 3, credits: 2, marks: 100, category: 'Project' }
        ];

        // ===== ATTENDANCE DATA =====
        this.attendance = [];
        this.initializeAttendance();

        // ===== MARKS DATA =====
        this.marks = [];
        this.initializeMarks();

        // ===== SCHEDULE DATA =====
        this.schedule = [
            { day: 'Monday', periods: [
                { time: '09:00-10:00', subject: 'Innovation & Entrepreneurship', room: 'Room 101' },
                { time: '10:00-11:00', subject: 'Digital Marketing Technique', room: 'Room 102' },
                { time: '11:00-12:00', subject: 'Network Administration', room: 'Lab 1' },
                { time: '12:00-13:00', subject: 'Break', room: '-' },
                { time: '13:00-14:00', subject: 'Cyber Security', room: 'Room 103' },
                { time: '14:00-15:00', subject: 'Apps Development', room: 'Lab 2' }
            ]},
            { day: 'Tuesday', periods: [
                { time: '09:00-10:00', subject: 'Network Administration', room: 'Lab 1' },
                { time: '10:00-11:00', subject: 'Multimedia & Animation', room: 'Lab 3' },
                { time: '11:00-12:00', subject: 'Innovation & Entrepreneurship', room: 'Room 101' },
                { time: '12:00-13:00', subject: 'Break', room: '-' },
                { time: '13:00-14:00', subject: 'Digital Marketing', room: 'Room 102' },
                { time: '14:00-15:00', subject: 'Project Work-II', room: 'Lab 2' },
                { time: '15:00-16:00', subject: 'Cyber Security', room: 'Room 103' }
            ]},
            { day: 'Wednesday', periods: [
                { time: '09:00-10:00', subject: 'Cyber Security', room: 'Room 103' },
                { time: '10:00-11:00', subject: 'Apps Development', room: 'Lab 2' },
                { time: '11:00-12:00', subject: 'Digital Marketing', room: 'Room 102' },
                { time: '12:00-13:00', subject: 'Break', room: '-' },
                { time: '13:00-14:00', subject: 'Network Administration', room: 'Lab 1' },
                { time: '14:00-15:00', subject: 'Multimedia & Animation', room: 'Lab 3' }
            ]},
            { day: 'Thursday', periods: [
                { time: '09:00-10:00', subject: 'Multimedia & Animation', room: 'Lab 3' },
                { time: '10:00-11:00', subject: 'Project Work-II', room: 'Lab 2' },
                { time: '11:00-12:00', subject: 'Innovation & Entrepreneurship', room: 'Room 101' },
                { time: '12:00-13:00', subject: 'Break', room: '-' },
                { time: '13:00-14:00', subject: 'Digital Marketing', room: 'Room 102' },
                { time: '14:00-15:00', subject: 'Network Administration', room: 'Lab 1' },
                { time: '15:00-16:00', subject: 'Cyber Security', room: 'Room 103' }
            ]},
            { day: 'Friday', periods: [
                { time: '09:00-10:00', subject: 'Apps Development', room: 'Lab 2' },
                { time: '10:00-11:00', subject: 'Innovation & Entrepreneurship', room: 'Room 101' },
                { time: '11:00-12:00', subject: 'Project Work-II', room: 'Lab 2' },
                { time: '12:00-13:00', subject: 'Break', room: '-' },
                { time: '13:00-14:00', subject: 'Multimedia & Animation', room: 'Lab 3' }
            ]},
            { day: 'Saturday', periods: [
                { time: '09:00-10:00', subject: 'Digital Marketing', room: 'Room 102' },
                { time: '10:00-11:00', subject: 'Network Administration', room: 'Lab 1' }
            ]}
        ];

        // ===== ASSIGNMENTS DATA =====
        this.assignments = [
            { id: 1, subject: 'Project Work-II', title: 'Phase 1 - Project Proposal', dueDate: '2026-12-15', status: 'Pending' },
            { id: 2, subject: 'Cyber Security & Ethics', title: 'Case Study Analysis', dueDate: '2026-12-10', status: 'Submitted' },
            { id: 3, subject: 'Network Administration', title: 'Network Configuration Lab', dueDate: '2026-12-08', status: 'Graded' },
            { id: 4, subject: 'Innovation & Entrepreneurship', title: 'Business Plan Draft', dueDate: '2026-12-20', status: 'Pending' }
        ];

        // ===== RESOURCES DATA =====
        this.resources = [
            { id: 1, title: 'Network Administration Guide', type: 'PDF', size: '2.4 MB', icon: 'fa-file-pdf', color: '#e53935' },
            { id: 2, title: 'Cyber Security Lecture Notes', type: 'DOC', size: '1.8 MB', icon: 'fa-file-word', color: '#1976d2' },
            { id: 3, title: 'Digital Marketing Video Tutorial', type: 'Video', size: '450 MB', icon: 'fa-video', color: '#f57c00' },
            { id: 4, title: 'Project Work Template', type: 'PPT', size: '3.2 MB', icon: 'fa-file-powerpoint', color: '#d32f2f' },
            { id: 5, title: 'Multimedia Design Resources', type: 'ZIP', size: '890 MB', icon: 'fa-file-archive', color: '#388e3c' }
        ];

        this.nextId = 100;
        this.currentTab = 'dashboard';

        // ===== DOM REFS =====
        this.initializeDOMRefs();
        this.setupEventListeners();
        this.renderAll();
        this.updateStats();
    }

    initializeAttendance() {
        this.students.forEach(student => {
            this.subjects.forEach(subject => {
                const total = Math.floor(Math.random() * 20) + 15;
                const present = Math.floor(Math.random() * total);
                const absent = total - present;
                const percentage = total > 0 ? Math.round((present / total) * 100) : 0;
                
                this.attendance.push({
                    studentId: student.id,
                    subjectId: subject.id,
                    total: total,
                    present: present,
                    absent: absent,
                    percentage: percentage,
                    records: []
                });
            });
        });
    }

    initializeMarks() {
        this.students.forEach(student => {
            this.subjects.forEach(subject => {
                const obtained = Math.floor(Math.random() * 40) + 60;
                const percentage = Math.round((obtained / subject.marks) * 100);
                this.marks.push({
                    studentId: student.id,
                    subjectId: subject.id,
                    obtained: obtained,
                    outOf: subject.marks,
                    percentage: percentage
                });
            });
        });
    }

    initializeDOMRefs() {
        this.tabs = document.querySelectorAll('.nav-item');
        this.tabPanes = document.querySelectorAll('.tab-pane');
        this.sidebar = document.getElementById('sidebar');
        this.menuToggle = document.getElementById('menuToggle');
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalBody = document.getElementById('modalBody');
        this.modalForm = document.getElementById('modalForm');
        this.modalCloseBtn = document.getElementById('modalCloseBtn');
        this.modalCancelBtn = document.getElementById('modalCancelBtn');
        this.pageTitle = document.getElementById('pageTitle');
        
        this.studentsGrid = document.getElementById('studentsGrid');
        this.subjectsGrid = document.getElementById('subjectsGrid');
        this.scheduleBody = document.getElementById('scheduleBody');
        this.attendanceBody = document.getElementById('attendanceBody');
        this.attendanceSummary = document.getElementById('attendanceSummary');
        this.marksBody = document.getElementById('marksBody');
        this.marksStats = document.getElementById('marksStats');
        this.assignmentsList = document.getElementById('assignmentsList');
        this.resourcesGrid = document.getElementById('resourcesGrid');
        this.topStudentsList = document.getElementById('topStudentsList');
        this.dashboardAssignments = document.getElementById('dashboardAssignments');
        this.totalStudents = document.getElementById('totalStudents');
        this.totalSubjects = document.getElementById('totalSubjects');
        this.totalPeriods = document.getElementById('totalPeriods');
        this.totalMarks = document.getElementById('totalMarks');
    }

    setupEventListeners() {
        // Navigation
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.switchTab(tab.dataset.tab);
            });
        });

        // Mobile menu toggle
        this.menuToggle.addEventListener('click', () => {
            this.sidebar.classList.toggle('open');
        });

        // Modal
        this.modalCloseBtn.addEventListener('click', () => this.closeModal());
        this.modalCancelBtn.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) this.closeModal();
        });

        // Add buttons
        document.getElementById('addStudentBtn').addEventListener('click', () => {
            this.openModal('Add Student', this.getStudentFormHTML());
        });

        document.getElementById('addSubjectBtn').addEventListener('click', () => {
            this.openModal('Add Subject', this.getSubjectFormHTML());
        });

        document.getElementById('addScheduleBtn').addEventListener('click', () => {
            this.openModal('Add Schedule Entry', this.getScheduleFormHTML());
        });

        document.getElementById('markAttendanceBtn').addEventListener('click', () => {
            this.markTodayAttendance();
        });

        document.getElementById('addMarksBtn').addEventListener('click', () => {
            this.openModal('Add Marks', this.getMarksFormHTML());
        });

        document.getElementById('addAssignmentBtn').addEventListener('click', () => {
            this.openModal('Add Assignment', this.getAssignmentFormHTML());
        });

        document.getElementById('addResourceBtn').addEventListener('click', () => {
            this.openModal('Add Resource', this.getResourceFormHTML());
        });

        // Form submission
        this.modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(e);
        });

        // Filters
        const subjectFilter = document.getElementById('attendanceSubjectFilter');
        const studentFilter = document.getElementById('attendanceStudentFilter');
        
        if (subjectFilter) {
            subjectFilter.addEventListener('change', () => this.renderAttendance());
        }
        if (studentFilter) {
            studentFilter.addEventListener('change', () => this.renderAttendance());
        }

        // Close sidebar on outside click (mobile)
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!this.sidebar.contains(e.target) && !this.menuToggle.contains(e.target)) {
                    this.sidebar.classList.remove('open');
                }
            }
        });
    }

    switchTab(tabId) {
        this.currentTab = tabId;
        
        this.tabs.forEach(t => t.classList.remove('active'));
        document.querySelector(`.nav-item[data-tab="${tabId}"]`).classList.add('active');

        this.tabPanes.forEach(p => p.classList.remove('active'));
        document.getElementById(`tab-${tabId}`).classList.add('active');

        const titles = {
            dashboard: 'Dashboard',
            students: 'Students',
            subjects: 'Subjects',
            schedule: 'Schedule',
            attendance: 'Attendance',
            marks: 'Marks',
            assignments: 'Assignments',
            resources: 'Resources'
        };
        this.pageTitle.textContent = titles[tabId] || 'Dashboard';

        if (window.innerWidth <= 768) {
            this.sidebar.classList.remove('open');
        }

        this.renderTab(tabId);
    }

    renderTab(tabId) {
        switch(tabId) {
            case 'students': this.renderStudents(); break;
            case 'subjects': this.renderSubjects(); break;
            case 'schedule': this.renderSchedule(); break;
            case 'attendance': this.renderAttendance(); break;
            case 'marks': this.renderMarks(); break;
            case 'assignments': this.renderAssignments(); break;
            case 'resources': this.renderResources(); break;
            case 'dashboard': this.renderDashboard(); break;
        }
    }

    renderAll() {
        this.renderStudents();
        this.renderSubjects();
        this.renderSchedule();
        this.renderAttendance();
        this.renderMarks();
        this.renderAssignments();
        this.renderResources();
        this.renderDashboard();
    }

    // ===== RENDER: STUDENTS =====
    renderStudents() {
        if (!this.studentsGrid) return;
        
        const colors = ['#1976d2', '#388e3c', '#f57c00', '#c62828', '#6a1b9a', '#00838f', '#d81b60'];
        let html = '';
        
        if (this.students.length === 0) {
            html = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No students enrolled yet</div>';
        } else {
            this.students.forEach((student, index) => {
                const color = colors[index % colors.length];
                const initial = student.name.charAt(0).toUpperCase();
                
                html += `
                    <div class="student-card">
                        <div class="student-avatar" style="background: ${color}">
                            ${initial}
                        </div>
                        <div class="student-info">
                            <h4>${this.escapeHtml(student.name)}</h4>
                            <p class="student-roll">${this.escapeHtml(student.roll)}</p>
                            <p><i class="fas fa-envelope"></i> ${this.escapeHtml(student.email)}</p>
                            <p><i class="fas fa-phone"></i> ${this.escapeHtml(student.phone)}</p>
                            <div class="student-actions">
                                <button class="btn-view-attendance" onclick="manager.viewStudentAttendance(${student.id})">
                                    <i class="fas fa-user-check"></i> Attendance
                                </button>
                                <button class="btn-edit-student" onclick="manager.editStudent(${student.id})">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="btn-delete-student" onclick="manager.deleteStudent(${student.id})">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        this.studentsGrid.innerHTML = html;
    }

    viewStudentAttendance(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (!student) return;
        
        this.switchTab('attendance');
        const filter = document.getElementById('attendanceStudentFilter');
        if (filter) {
            filter.value = studentId;
            this.renderAttendance();
        }
    }

    editStudent(id) {
        const student = this.students.find(s => s.id === id);
        if (!student) return;
        
        const html = `
            <input type="hidden" id="editId" value="${student.id}">
            <label>Student Name</label>
            <input type="text" id="studentName" value="${this.escapeHtml(student.name)}" required>
            <label>Roll Number</label>
            <input type="text" id="studentRoll" value="${this.escapeHtml(student.roll)}" required>
            <label>Email</label>
            <input type="email" id="studentEmail" value="${this.escapeHtml(student.email)}" required>
            <label>Phone</label>
            <input type="text" id="studentPhone" value="${this.escapeHtml(student.phone)}" required>
        `;
        this.openModal('Edit Student', html);
    }

    deleteStudent(id) {
        if (confirm('Are you sure you want to delete this student?')) {
            this.students = this.students.filter(s => s.id !== id);
            this.attendance = this.attendance.filter(a => a.studentId !== id);
            this.marks = this.marks.filter(m => m.studentId !== id);
            this.renderStudents();
            this.updateStats();
        }
    }

    // ===== RENDER: SUBJECTS =====
    renderSubjects() {
        if (!this.subjectsGrid) return;
        
        let html = '';
        if (this.subjects.length === 0) {
            html = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No subjects added yet</div>';
        } else {
            this.subjects.forEach(sub => {
                html += `
                    <div class="subject-card">
                        <div class="subject-code">${sub.code}</div>
                        <h3>${this.escapeHtml(sub.name)}</h3>
                        <div class="subject-details">
                            <span><strong>Periods:</strong> ${sub.periods}/week</span>
                            <span><strong>Credits:</strong> ${sub.credits}</span>
                            <span><strong>Marks:</strong> ${sub.marks}</span>
                            <span><strong>Category:</strong> ${sub.category}</span>
                        </div>
                        <div class="subject-actions">
                            <button class="btn-edit-subject" onclick="manager.editSubject(${sub.id})">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button class="btn-delete-subject" onclick="manager.deleteSubject(${sub.id})">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                `;
            });
        }
        this.subjectsGrid.innerHTML = html;
    }

    editSubject(id) {
        const subject = this.subjects.find(s => s.id === id);
        if (!subject) return;
        
        const html = `
            <input type="hidden" id="editId" value="${subject.id}">
            <label>Subject Code</label>
            <input type="text" id="subjectCode" value="${subject.code}" required>
            <label>Subject Name</label>
            <input type="text" id="subjectName" value="${this.escapeHtml(subject.name)}" required>
            <label>Periods/Week</label>
            <input type="number" id="subjectPeriods" value="${subject.periods}" required>
            <label>Credits</label>
            <input type="number" id="subjectCredits" value="${subject.credits}" required>
            <label>Marks</label>
            <input type="number" id="subjectMarks" value="${subject.marks}" required>
            <label>Category</label>
            <select id="subjectCategory">
                <option value="Theory" ${subject.category === 'Theory' ? 'selected' : ''}>Theory</option>
                <option value="Practical" ${subject.category === 'Practical' ? 'selected' : ''}>Practical</option>
                <option value="Project" ${subject.category === 'Project' ? 'selected' : ''}>Project</option>
            </select>
        `;
        this.openModal('Edit Subject', html);
    }

    deleteSubject(id) {
        if (confirm('Are you sure you want to delete this subject?')) {
            this.subjects = this.subjects.filter(s => s.id !== id);
            this.attendance = this.attendance.filter(a => a.subjectId !== id);
            this.marks = this.marks.filter(m => m.subjectId !== id);
            this.renderSubjects();
            this.updateStats();
        }
    }

    // ===== RENDER: SCHEDULE =====
    renderSchedule() {
        if (!this.scheduleBody) return;
        
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let html = '';
        
        const maxPeriods = Math.max(...this.schedule.map(d => d.periods.length));
        
        for (let i = 0; i < maxPeriods; i++) {
            html += '<tr>';
            const timeSlot = this.schedule[0]?.periods[i]?.time || '';
            html += `<td><strong>${timeSlot || 'Free'}</strong></td>`;
            
            days.forEach(day => {
                const dayData = this.schedule.find(d => d.day === day);
                const period = dayData?.periods[i];
                if (period) {
                    const isBreak = period.subject === 'Break';
                    html += `
                        <td>
                            <span class="${isBreak ? 'schedule-break' : 'schedule-subject'}">
                                ${isBreak ? '🍽️ Break' : this.escapeHtml(period.subject)}
                            </span>
                            ${!isBreak ? `<br><span class="schedule-room">${this.escapeHtml(period.room)}</span>` : ''}
                        </td>
                    `;
                } else {
                    html += '<td>-</td>';
                }
            });
            html += '</tr>';
        }
        
        this.scheduleBody.innerHTML = html;
    }

    // ===== RENDER: ATTENDANCE =====
    renderAttendance() {
        if (!this.attendanceBody) return;
        
        this.populateAttendanceFilters();
        
        const subjectFilter = document.getElementById('attendanceSubjectFilter');
        const studentFilter = document.getElementById('attendanceStudentFilter');
        
        const subjectId = subjectFilter?.value || 'all';
        const studentId = studentFilter?.value || 'all';
        
        let filteredAttendance = this.attendance;
        
        if (subjectId !== 'all') {
            filteredAttendance = filteredAttendance.filter(a => a.subjectId === parseInt(subjectId));
        }
        if (studentId !== 'all') {
            filteredAttendance = filteredAttendance.filter(a => a.studentId === parseInt(studentId));
        }
        
        // Calculate summary
        const totalStudents = new Set(filteredAttendance.map(a => a.studentId)).size;
        const totalPresent = filteredAttendance.reduce((sum, a) => sum + a.present, 0);
        const totalAbsent = filteredAttendance.reduce((sum, a) => sum + a.absent, 0);
        const totalClasses = totalPresent + totalAbsent;
        const overallPercentage = totalClasses > 0 ? Math.round((totalPresent / totalClasses) * 100) : 0;
        
        // Render summary
        if (this.attendanceSummary) {
            this.attendanceSummary.innerHTML = `
                <div class="summary-card">
                    <span class="summary-label">Total Students</span>
                    <span class="summary-value">${totalStudents}</span>
                </div>
                <div class="summary-card">
                    <span class="summary-label">Total Present</span>
                    <span class="summary-value" style="color: #388e3c;">${totalPresent}</span>
                </div>
                <div class="summary-card">
                    <span class="summary-label">Total Absent</span>
                    <span class="summary-value" style="color: #c62828;">${totalAbsent}</span>
                </div>
                <div class="summary-card">
                    <span class="summary-label">Attendance %</span>
                    <span class="summary-value" style="color: ${overallPercentage >= 75 ? '#388e3c' : overallPercentage >= 60 ? '#f57c00' : '#c62828'}">
                        ${overallPercentage}%
                    </span>
                </div>
            `;
        }
        
        // Render table
        let html = '';
        if (filteredAttendance.length === 0) {
            html = '<tr><td colspan="9" style="text-align: center; padding: 30px;">No attendance records found</td></tr>';
        } else {
            filteredAttendance.forEach(att => {
                const student = this.students.find(s => s.id === att.studentId);
                const subject = this.subjects.find(s => s.id === att.subjectId);
                if (!student || !subject) return;
                
                const percentage = att.percentage;
                let status = 'Good';
                let statusClass = 'good';
                
                if (percentage < 60) {
                    status = 'Poor';
                    statusClass = 'poor';
                } else if (percentage < 75) {
                    status = 'Average';
                    statusClass = 'average';
                }
                
                html += `
                    <tr>
                        <td><strong>${this.escapeHtml(student.name)}</strong></td>
                        <td>${this.escapeHtml(student.roll)}</td>
                        <td>${this.escapeHtml(subject.name)}</td>
                        <td>${att.total}</td>
                        <td style="color: #388e3c;">${att.present}</td>
                        <td style="color: #c62828;">${att.absent}</td>
                        <td><strong>${percentage}%</strong></td>
                        <td><span class="attendance-status ${statusClass}">${status}</span></td>
                        <td>
                            <button class="btn-mark-present" onclick="manager.markStudentAttendance(${att.studentId}, ${att.subjectId}, 'present')">
                                <i class="fas fa-check"></i>
                            </button>
                            <button class="btn-mark-absent" onclick="manager.markStudentAttendance(${att.studentId}, ${att.subjectId}, 'absent')">
                                <i class="fas fa-times"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
        }
        
        this.attendanceBody.innerHTML = html;
    }

    populateAttendanceFilters() {
        const subjectFilter = document.getElementById('attendanceSubjectFilter');
        if (subjectFilter) {
            const currentValue = subjectFilter.value;
            subjectFilter.innerHTML = '<option value="all">All Subjects</option>';
            this.subjects.forEach(sub => {
                subjectFilter.innerHTML += `<option value="${sub.id}">${this.escapeHtml(sub.name)}</option>`;
            });
            if (currentValue) subjectFilter.value = currentValue;
        }
        
        const studentFilter = document.getElementById('attendanceStudentFilter');
        if (studentFilter) {
            const currentValue = studentFilter.value;
            studentFilter.innerHTML = '<option value="all">All Students</option>';
            this.students.forEach(student => {
                studentFilter.innerHTML += `<option value="${student.id}">${this.escapeHtml(student.name)}</option>`;
            });
            if (currentValue) studentFilter.value = currentValue;
        }
    }

    markStudentAttendance(studentId, subjectId, status) {
        const att = this.attendance.find(a => a.studentId === studentId && a.subjectId === subjectId);
        if (!att) return;
        
        if (status === 'present') {
            att.present += 1;
        } else if (status === 'absent') {
            att.absent += 1;
        }
        att.total = att.present + att.absent;
        att.percentage = att.total > 0 ? Math.round((att.present / att.total) * 100) : 0;
        
        this.renderAttendance();
        this.renderDashboard();
    }

    markTodayAttendance() {
        this.students.forEach(student => {
            this.subjects.forEach(subject => {
                const att = this.attendance.find(a => a.studentId === student.id && a.subjectId === subject.id);
                if (att) {
                    const isPresent = Math.random() < 0.7;
                    if (isPresent) {
                        att.present += 1;
                    } else {
                        att.absent += 1;
                    }
                    att.total = att.present + att.absent;
                    att.percentage = att.total > 0 ? Math.round((att.present / att.total) * 100) : 0;
                }
            });
        });
        
        this.renderAttendance();
        this.renderDashboard();
        alert('✅ Today\'s attendance marked for all students!');
    }

    // ===== RENDER: MARKS =====
    renderMarks() {
        if (!this.marksBody) return;
        
        let html = '';
        let totalObtained = 0;
        let totalMarks = 0;
        
        if (this.marks.length === 0) {
            html = '<tr><td colspan="7" style="text-align: center; padding: 30px;">No marks records found</td></tr>';
        } else {
            this.students.forEach(student => {
                this.subjects.forEach(subject => {
                    const mark = this.marks.find(m => m.studentId === student.id && m.subjectId === subject.id);
                    if (!mark) return;
                    
                    totalObtained += mark.obtained;
                    totalMarks += subject.marks;
                    
                    const percentage = mark.percentage;
                    let grade = 'F';
                    if (percentage >= 90) grade = 'A+';
                    else if (percentage >= 80) grade = 'A';
                    else if (percentage >= 70) grade = 'B+';
                    else if (percentage >= 60) grade = 'B';
                    else if (percentage >= 50) grade = 'C+';
                    else if (percentage >= 40) grade = 'C';
                    
                    html += `
                        <tr>
                            <td><strong>${this.escapeHtml(student.name)}</strong></td>
                            <td>${this.escapeHtml(student.roll)}</td>
                            <td>${this.escapeHtml(subject.name)}</td>
                            <td><strong>${mark.obtained}</strong></td>
                            <td>${subject.marks}</td>
                            <td>${percentage}%</td>
                            <td class="status-${percentage >= 40 ? 'pass' : 'fail'}">
                                <strong>${grade}</strong>
                            </td>
                        </tr>
                    `;
                });
            });
        }
        
        this.marksBody.innerHTML = html;
        
        // Update stats
        const overallPercentage = totalMarks > 0 ? Math.round((totalObtained / totalMarks) * 100) : 0;
        
        if (this.marksStats) {
            this.marksStats.innerHTML = `
                <div class="marks-stat-card">
                    <span class="marks-label">Total Marks</span>
                    <span class="marks-value">${totalMarks}</span>
                </div>
                <div class="marks-stat-card">
                    <span class="marks-label">Obtained</span>
                    <span class="marks-value">${totalObtained}</span>
                </div>
                <div class="marks-stat-card">
                    <span class="marks-label">Percentage</span>
                    <span class="marks-value" style="color: ${overallPercentage >= 70 ? '#388e3c' : '#f57c00'}">
                        ${overallPercentage}%
                    </span>
                </div>
                <div class="marks-stat-card">
                    <span class="marks-label">Grade</span>
                    <span class="marks-value">${this.getGrade(overallPercentage)}</span>
                </div>
            `;
        }
    }

    getGrade(percentage) {
        if (percentage >= 90) return 'A+';
        if (percentage >= 80) return 'A';
        if (percentage >= 70) return 'B+';
        if (percentage >= 60) return 'B';
        if (percentage >= 50) return 'C+';
        if (percentage >= 40) return 'C';
        return 'F';
    }

    // ===== RENDER: ASSIGNMENTS =====
    renderAssignments() {
        if (!this.assignmentsList) return;
        
        let html = '';
        if (this.assignments.length === 0) {
            html = '<div style="text-align: center; padding: 30px; color: #666;">No assignments yet</div>';
        } else {
            this.assignments.forEach(ass => {
                const statusClass = ass.status.toLowerCase();
                html += `
                    <div class="assignment-item">
                        <div class="assignment-info">
                            <h4>${this.escapeHtml(ass.title)}</h4>
                            <p><strong>${this.escapeHtml(ass.subject)}</strong> • Due: ${ass.dueDate}</p>
                        </div>
                        <span class="status-badge status-${statusClass}">${ass.status}</span>
                    </div>
                `;
            });
        }
        this.assignmentsList.innerHTML = html;
    }

    // ===== RENDER: RESOURCES =====
    renderResources() {
        if (!this.resourcesGrid) return;
        
        let html = '';
        if (this.resources.length === 0) {
            html = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No resources available</div>';
        } else {
            this.resources.forEach(res => {
                html += `
                    <div class="resource-card">
                        <div class="resource-icon" style="background: ${res.color}20; color: ${res.color};">
                            <i class="fas ${res.icon}"></i>
                        </div>
                        <div class="resource-info">
                            <h4>${this.escapeHtml(res.title)}</h4>
                            <p>${res.type} • ${res.size}</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-download"></i> Download</span>
                                <span><i class="fas fa-share"></i> Share</span>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        this.resourcesGrid.innerHTML = html;
    }

    // ===== RENDER: DASHBOARD =====
    renderDashboard() {
        this.renderTopStudents();
        this.renderDashboardAssignments();
        this.updateStats();
    }

    renderTopStudents() {
        if (!this.topStudentsList) return;
        
        const studentAttendance = this.students.map(student => {
            const attRecords = this.attendance.filter(a => a.studentId === student.id);
            const total = attRecords.reduce((sum, a) => sum + a.total, 0);
            const present = attRecords.reduce((sum, a) => sum + a.present, 0);
            const percentage = total > 0 ? Math.round((present / total) * 100) : 0;
            return { ...student, attendance: percentage };
        });
        
        studentAttendance.sort((a, b) => b.attendance - a.attendance);
        
        let html = '';
        const topStudents = studentAttendance.slice(0, 4);
        const medals = ['🥇', '🥈', '🥉', '4️⃣'];
        
        if (topStudents.length === 0) {
            html = '<div style="text-align: center; color: #666; padding: 10px;">No students enrolled</div>';
        } else {
            topStudents.forEach((student, index) => {
                html += `
                    <div class="top-student-item">
                        <span class="rank">${medals[index]}</span>
                        <span class="student-name">${this.escapeHtml(student.name)}</span>
                        <span class="student-attendance">${student.attendance}%</span>
                    </div>
                `;
            });
        }
        
        this.topStudentsList.innerHTML = html;
    }

    renderDashboardAssignments() {
        if (!this.dashboardAssignments) return;
        
        let html = '';
        const recentAssignments = this.assignments.slice(0, 3);
        if (recentAssignments.length === 0) {
            html = '<div style="text-align: center; color: #666; padding: 10px;">No assignments</div>';
        } else {
            recentAssignments.forEach(ass => {
                const statusClass = ass.status.toLowerCase();
                html += `
                    <div class="assignment-item">
                        <div class="assignment-info">
                            <h4>${this.escapeHtml(ass.title)}</h4>
                            <p>${this.escapeHtml(ass.subject)} • Due: ${ass.dueDate}</p>
                        </div>
                        <span class="status-badge status-${statusClass}">${ass.status}</span>
                    </div>
                `;
            });
        }
        this.dashboardAssignments.innerHTML = html;
    }

    // ===== MODAL =====
    openModal(title, bodyHTML) {
        this.modalTitle.textContent = title;
        this.modalBody.innerHTML = bodyHTML;
        this.modalOverlay.style.display = 'flex';
    }

    closeModal() {
        this.modalOverlay.style.display = 'none';
        this.modalForm.reset();
    }

    // ===== FORM HANDLING =====
    handleFormSubmit(e) {
        const formData = new FormData(e.target);
        const title = this.modalTitle.textContent;
        
        if (title.includes('Student')) {
            const id = formData.get('editId');
            if (id) {
                const student = this.students.find(s => s.id === parseInt(id));
                if (student) {
                    student.name = formData.get('studentName');
                    student.roll = formData.get('studentRoll');
                    student.email = formData.get('studentEmail');
                    student.phone = formData.get('studentPhone');
                }
            } else {
                const newStudent = {
                    id: this.nextId++,
                    name: formData.get('studentName'),
                    roll: formData.get('studentRoll'),
                    email: formData.get('studentEmail'),
                    phone: formData.get('studentPhone')
                };
                this.students.push(newStudent);
                // Add attendance records for new student
                this.subjects.forEach(subject => {
                    this.attendance.push({
                        studentId: newStudent.id,
                        subjectId: subject.id,
                        total: 0,
                        present: 0,
                        absent: 0,
                        percentage: 0,
                        records: []
                    });
                });
                // Add marks for new student
                this.subjects.forEach(subject => {
                    this.marks.push({
                        studentId: newStudent.id,
                        subjectId: subject.id,
                        obtained: 0,
                        outOf: subject.marks,
                        percentage: 0
                    });
                });
            }
            this.renderStudents();
            this.updateStats();
        } else if (title.includes('Subject')) {
            const id = formData.get('editId');
            if (id) {
                const subject = this.subjects.find(s => s.id === parseInt(id));
                if (subject) {
                    subject.code = formData.get('subjectCode');
                    subject.name = formData.get('subjectName');
                    subject.periods = parseInt(formData.get('subjectPeriods'));
                    subject.credits = parseInt(formData.get('subjectCredits'));
                    subject.marks = parseInt(formData.get('subjectMarks'));
                    subject.category = formData.get('subjectCategory');
                }
            } else {
                this.subjects.push({
                    id: this.nextId++,
                    code: formData.get('subjectCode'),
                    name: formData.get('subjectName'),
                    periods: parseInt(formData.get('subjectPeriods')),
                    credits: parseInt(formData.get('subjectCredits')),
                    marks: parseInt(formData.get('subjectMarks')),
                    category: formData.get('subjectCategory')
                });
            }
            this.renderSubjects();
            this.updateStats();
        } else if (title.includes('Assignment')) {
            this.assignments.push({
                id: this.nextId++,
                subject: formData.get('assignmentSubject'),
                title: formData.get('assignmentTitle'),
                dueDate: formData.get('assignmentDueDate'),
                status: formData.get('assignmentStatus')
            });
            this.renderAssignments();
        } else if (title.includes('Resource')) {
            this.resources.push({
                id: this.nextId++,
                title: formData.get('resourceTitle'),
                type: formData.get('resourceType'),
                size: formData.get('resourceSize'),
                icon: 'fa-file',
                color: '#1976d2'
            });
            this.renderResources();
        } else if (title.includes('Marks')) {
            const subjectId = parseInt(formData.get('marksSubject'));
            const studentId = parseInt(formData.get('marksStudent'));
            const obtained = parseInt(formData.get('marksObtained'));
            const mark = this.marks.find(m => m.studentId === studentId && m.subjectId === subjectId);
            if (mark) {
                mark.obtained = obtained;
                mark.percentage = Math.round((obtained / mark.outOf) * 100);
            }
            this.renderMarks();
        }
        
        this.closeModal();
    }

    // ===== FORM HTML GENERATORS =====
    getStudentFormHTML() {
        return `
            <label>Student Name</label>
            <input type="text" id="studentName" placeholder="Full name" required>
            <label>Roll Number</label>
            <input type="text" id="studentRoll" placeholder="e.g. CST-701" required>
            <label>Email</label>
            <input type="email" id="studentEmail" placeholder="email@example.com" required>
            <label>Phone</label>
            <input type="text" id="studentPhone" placeholder="Phone number" required>
        `;
    }

    getSubjectFormHTML() {
        return `
            <label>Subject Code</label>
            <input type="text" id="subjectCode" placeholder="e.g. 25853" required>
            <label>Subject Name</label>
            <input type="text" id="subjectName" placeholder="Subject name" required>
            <label>Periods/Week</label>
            <input type="number" id="subjectPeriods" value="5" required>
            <label>Credits</label>
            <input type="number" id="subjectCredits" value="3" required>
            <label>Marks</label>
            <input type="number" id="subjectMarks" value="150" required>
            <label>Category</label>
            <select id="subjectCategory">
                <option value="Theory">Theory</option>
                <option value="Practical">Practical</option>
                <option value="Project">Project</option>
            </select>
        `;
    }

    getScheduleFormHTML() {
        return `
            <label>Day</label>
            <select id="scheduleDay">
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
            </select>
            <label>Time</label>
            <input type="text" id="scheduleTime" placeholder="e.g. 09:00-10:00" required>
            <label>Subject</label>
            <input type="text" id="scheduleSubject" placeholder="Subject name" required>
            <label>Room</label>
            <input type="text" id="scheduleRoom" placeholder="Room/Lab" required>
        `;
    }

    getMarksFormHTML() {
        return `
            <label>Student</label>
            <select id="marksStudent">
                ${this.students.map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('')}
            </select>
            <label>Subject</label>
            <select id="marksSubject">
                ${this.subjects.map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('')}
            </select>
            <label>Marks Obtained</label>
            <input type="number" id="marksObtained" placeholder="Enter marks" required>
        `;
    }

    getAssignmentFormHTML() {
        return `
            <label>Subject</label>
            <input type="text" id="assignmentSubject" placeholder="Subject name" required>
            <label>Assignment Title</label>
            <input type="text" id="assignmentTitle" placeholder="Assignment title" required>
            <label>Due Date</label>
            <input type="date" id="assignmentDueDate" required>
            <label>Status</label>
            <select id="assignmentStatus">
                <option value="Pending">Pending</option>
                <option value="Submitted">Submitted</option>
                <option value="Graded">Graded</option>
            </select>
        `;
    }

    getResourceFormHTML() {
        return `
            <label>Resource Title</label>
            <input type="text" id="resourceTitle" placeholder="Resource title" required>
            <label>Type</label>
            <input type="text" id="resourceType" placeholder="e.g. PDF, Video, DOC" required>
            <label>Size</label>
            <input type="text" id="resourceSize" placeholder="e.g. 2.4 MB" required>
        `;
    }

    // ===== UTILITY =====
    escapeHtml(text) {
        if (!text) return '';
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return String(text).replace(/[&<>"']/g, m => map[m]);
    }

    updateStats() {
        if (this.totalStudents) this.totalStudents.textContent = this.students.length;
        if (this.totalSubjects) this.totalSubjects.textContent = this.subjects.length;
        
        const periods = this.subjects.reduce((sum, s) => sum + s.periods, 0);
        if (this.totalPeriods) this.totalPeriods.textContent = periods;
        
        const marks = this.subjects.reduce((sum, s) => sum + s.marks, 0);
        if (this.totalMarks) this.totalMarks.textContent = marks;
    }
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    manager = new SemesterManager();
    console.log('CST Semester Management System initialized successfully!');
});