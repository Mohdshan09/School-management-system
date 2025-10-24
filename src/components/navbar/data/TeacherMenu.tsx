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
  ListChevronsDownUp,
  BookCopy,
  ChevronRightCircle,
  BookDashed,
  ListOrdered,
  BookCheck,
  BookMarked,
} from "lucide-react";

export const teacherMenuItems = [
  {
    icon: <ListOrdered className="w-5 h-5" />,
    label: "Teachers",
    href: "/list/teachers",
  },
  {
    icon: <BookCheck className="w-5 h-5" />,
    label: "Subjects",
    href: "/list/subjects",
  },
  {
    icon: <ChevronRightCircle className="w-5 h-5" />,
    label: "Classes",
    href: "/list/classes",
  },
  {
    icon: <BookMarked className="w-5 h-5" />,
    label: "Lessons",
    href: "/list/lessons",
  },
  
];
