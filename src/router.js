import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/views/MainPage.vue'
import QuestionsPage from '@/views/QuestionsPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'
import PaymentRulesPage from '@/views/PaymentRulesPage.vue'
import NoServicePage from '@/views/NoServicePage.vue'
import Rules from '@/views/Rules.vue'
import UserData from '@/views/UserData.vue'
import HelpPage from '@/views/HelpPage.vue'
import FindPupils from '@/views/FindPupils.vue'
import FindTeachers from '@/views/FindTeachers.vue'
import PupilPage from '@/views/PupilPage.vue'
import TeacherPage from '@/views/TeacherPage.vue'
import CreateTask from '@/views/CreateTask.vue'
import ApplicationPage from '@/views/ApplicationPage.vue'
import PersonalAccount from '@/views/PersonalAccount.vue'
import EditProfile from '@/views/EditProfile.vue'
import HistoryPayments from '@/views/HistoryPayments.vue'
import TaskPupil from '@/views/TaskPupil.vue'
import TaskTeacher from '@/views/TaskTeacher.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/TeachersPortal/',
      name: "MainPage",
      component: MainPage,
    },
    {
      path: '/TeachersPortal/Questions',
      name: "QuestionsPage",
      component: QuestionsPage,
    },
    {
      path: '/TeachersPortal/Contacts',
      name: "ContactsPage",
      component: ContactsPage,
    },
    {
      path: '/TeachersPortal/PaymentRules',
      name: "PaymentRulesPage",
      component: PaymentRulesPage,
    },
    {
      path: '/TeachersPortal/NoService',
      name: "NoServicePage",
      component: NoServicePage,
    },
    {
      path: '/TeachersPortal/Rules',
      name: "Rules",
      component: Rules,
    },
    {
      path: '/TeachersPortal/UserData',
      name: "UserData",
      component: UserData,
    },
    {
      path: '/TeachersPortal/HelpPage',
      name: "HelpPage",
      component: HelpPage,
    },
    {
      path: '/TeachersPortal/FindPupils',
      name: "FindPupils",
      component: FindPupils,
    },
    {
      path: '/TeachersPortal/FindTeachers',
      name: "FindTEachers",
      component: FindTeachers,
    },
    {
      path: '/TeachersPortal/PupilPage',
      name: "PupilPage",
      component: PupilPage,
    },
    {
      path: '/TeachersPortal/TeacherPage',
      name: "TeacherPage",
      component: TeacherPage,
    },
    {
      path: '/TeachersPortal/CreateTask',
      name: "CreateTask",
      component: CreateTask,
    },
    {
      path: '/TeachersPortal/ApplicationPage',
      name: "ApplicationPage",
      component: ApplicationPage,
    },
    {
      path: '/TeachersPortal/Account',
      name: "PersonalAccount",
      component: PersonalAccount,
    },
    {
      path: '/TeachersPortal/EditProfile',
      name: "EditProfile",
      component: EditProfile,
    },
    {
      path: '/TeachersPortal/HistoryPayments',
      name: "HistoryPayments",
      component: HistoryPayments,
    },
    {
      path: '/TeachersPortal/TaskPupil',
      name: "TaskPupil",
      component: TaskPupil,
    },
    {
      path: '/TeachersPortal/TaskTeacher',
      name: "TaskTEacher",
      component: TaskTeacher,
    },
  ]
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router 