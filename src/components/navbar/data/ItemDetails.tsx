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
  },
  "My Profile": {
    title: "My Profile",
    icon: <User2 className="w-5 h-5" />,
    desc: "View and edit your details.",
  },
  Settings: {
    title: "Settings",
    icon: <Settings2 className="w-5 h-5" />,
    desc: "Manage preferences.",
  },
  Academics: {
    title: "Academics",
    icon: <GraduationCap className="w-5 h-5" />,
    desc: "Access courses.",
  },
  "Staff / HR": {
    title: "Staff / HR",
    icon: <Users className="w-5 h-5" />,
    desc: "Manage staff.",
  },
  Library: {
    title: "Library",
    icon: <Book className="w-5 h-5" />,
    desc: "Library management.",
  },
  Finance: {
    title: "Finance",
    icon: <Wallet className="w-5 h-5" />,
    desc: "Manage school finance.",
  },
  Admission: {
    title: "Admission",
    icon: <UserPlus className="w-5 h-5" />,
    desc: "New student admission.",
  },
  Transport: {
    title: "Transport",
    icon: <Bus className="w-5 h-5" />,
    desc: "Bus and routes.",
  },
  "Fee Management": {
    title: "Fee Management",
    icon: <BookA className="w-5 h-5" />,
    desc: "Handle student fees.",
  },
  Examination: {
    title: "Examination",
    icon: <PencilLine className="w-5 h-5" />,
    desc: "Manage exams and results.",
  },
};
