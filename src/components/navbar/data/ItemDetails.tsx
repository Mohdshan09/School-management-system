import {
  LayoutDashboard,
  User2,
  Settings2,
  GraduationCap,
  Users,
  Book,
  Wallet,
  UserPlus,
  Bus,
  BookA,
  PencilLine,
} from "lucide-react";

export const itemDetails = {
  Dashboard: {
    title: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    desc: "",
    visible: ["admin", "teacher", "student", "parent"],
  },
  "My Profile": {
    title: "My Profile",
    icon: <User2 className="w-5 h-5" />,
    desc: "View and edit your details.",
    visible: ["admin", "teacher", "student", "parent"],
  },
  Settings: {
    title: "Settings",
    icon: <Settings2 className="w-5 h-5" />,
    desc: "Manage preferences.",
    visible: ["admin", "teacher"],
  },
  Academics: {
    title: "Academics",
    icon: <GraduationCap className="w-5 h-5" />,
    desc: "Access courses.",
    visible: ["admin", "teacher", "student"],
  },
  "Staff / HR": {
    title: "Staff / HR",
    icon: <Users className="w-5 h-5" />,
    desc: "Manage staff.",
    visible: ["admin"],
  },
  Library: {
    title: "Library",
    icon: <Book className="w-5 h-5" />,
    desc: "Library management.",
    visible: ["admin", "teacher", "student"],
  },
  Finance: {
    title: "Finance",
    icon: <Wallet className="w-5 h-5" />,
    desc: "Manage school finance.",
    visible: ["admin"],
  },
  Admission: {
    title: "Admission",
    icon: <UserPlus className="w-5 h-5" />,
    desc: "New student admission.",
    visible: ["admin"],
  },
  Transport: {
    title: "Transport",
    icon: <Bus className="w-5 h-5" />,
    desc: "Bus and routes.",
    visible: ["admin", "teacher"],
  },
  "Fee Management": {
    title: "Fee Management",
    icon: <BookA className="w-5 h-5" />,
    desc: "Handle student fees.",
    visible: ["admin", "teacher"],
  },
  Examination: {
    title: "Examination",
    icon: <PencilLine className="w-5 h-5" />,
    desc: "Manage exams and results.",
    visible: ["admin", "teacher","student"],
  },
};
