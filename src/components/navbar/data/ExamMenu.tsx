import {
  FileText,
  ClipboardList,
  FilePlus,
  Calendar,
  CreditCardIcon,
  UserCheck,
  PencilLine,
  Users,
  GraduationCap,
} from "lucide-react";

export const examinationMenuItems = [
  {
    icon: <FileText className="w-5 h-5" />,
    label: "Grading Setup",
    path: "/examination/grading-setup",
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    label: "Examination Type",
    path: "/examination/type",
  },
  {
    icon: <FilePlus className="w-5 h-5" />,
    label: "Create Exam",
    path: "/examination/create",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    label: "Publish Exam Schedule",
    path: "/examination/schedule",
  },
  {
    icon: <CreditCardIcon className="w-5 h-5" />,
    label: "Admit Card",
    path: "/examination/admit-card",
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    label: "Mark Attendance",
    path: "/examination/attendance",
  },
  {
    icon: <PencilLine className="w-5 h-5" />,
    label: "Marks Entry",
    path: "/examination/marks-entry",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "Manage Subjects",
    path: "/examination/subjects",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: "Co-Scholastic Activities",
    path: "/examination/co-scholastic",
  },
];
