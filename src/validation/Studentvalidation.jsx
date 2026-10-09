import toast from "react-hot-toast";

const Studentvalidation = (student) => {
    const required = ["name", "email", "phone", "rollno", "course", "DOB", "year", "gender", "address", "exam"];

    if (required.some((field) => !String(student?.[field] ?? "").trim())) {
        toast.error("Please fill all required fields");
        return false;
    }

    if (!/^[A-Za-z\s.'-]{2,60}$/.test(student.name.trim())) {
        toast.error("Enter a valid student name");
        return false;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(student.email.trim())) {
        toast.error("Enter a valid email");
        return false;
    }

    if (!/^[6-9]\d{9}$/.test(student.phone.trim())) {
        toast.error("Enter a valid 10-digit Indian phone number");
        return false;
    }

    if (!student.photo) {
        toast.error("Upload student photo");
        return false;
    }

    return true;
};

export default Studentvalidation;
