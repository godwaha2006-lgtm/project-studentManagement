const FilterMarkAttendence = (data = [], course = "All") => {
    return data.filter((student) => course === "All" || student.course === course);
};

export default FilterMarkAttendence;
